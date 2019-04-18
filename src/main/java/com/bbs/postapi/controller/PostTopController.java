package com.bbs.postapi.controller;

import com.bbs.communityapi.model.repository.CommunityRepository;
import com.bbs.postapi.exception.CommentsCantSetTopException;
import com.bbs.postapi.exception.UserCantSetTopException;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.util.HashSet;
import java.util.Optional;

@RestController
@RequestMapping("/posts/top")
public class PostTopController {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommunityRepository communityRepository;

    @GetMapping(value = "", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    // stream/text-event
    // https://www.callicoder.com/reactive-rest-apis-spring-webflux-reactive-mongo/
    // https://medium.com/@nithinmallya4/processing-streaming-data-with-spring-webflux-ed0fc68a14de
    public Flux<Post> getTopPosts(@RequestParam(value = "community") String community,
                                  @RequestParam(value = "page", required = false) Optional<Integer> page) {
        // https://zupzup.org/kotlin-webflux-example/
        // https://thepracticaldeveloper.com/2017/11/04/full-reactive-stack-with-spring-webflux-and-angularjs/#Pagination
        return postRepository
            .findTopAllPagination(community, PageRequest.of(page.orElse(0), 10));
    }

    @PostMapping("{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<Post>> setTopPost(@PathVariable(value = "id") String id,
                                                 @RequestBody Post post, Mono<Principal> principal) {
        return principal
            .map(Principal::getName)
            .flatMap(name ->communityRepository
                .findById(post.getCommunity())
                .flatMap(community -> {
                    HashSet<String> managers = community.getManagers();
                    if(managers.contains(name)){
                        return postRepository
                            .findById(id)
                            .flatMap(existingPost -> {
                                if(existingPost.getParentId()!=null)
                                    return Mono.error(new CommentsCantSetTopException("CommentsCantSetTopException"));
                                existingPost.setTop(true);
                                return postRepository.save(existingPost);
                            });
                    }else{
                        return Mono.error(new UserCantSetTopException("UserCantSetTopException"));
                    }
                })
            )
            .map(ResponseEntity::ok)
            .onErrorResume(CommentsCantSetTopException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .onErrorResume(UserCantSetTopException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }


    @DeleteMapping("{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<Post>> unsetTopPost(@PathVariable(value = "id") String id,
                                                   @RequestBody Post post, Mono<Principal> principal) {
        return principal
            .map(Principal::getName)
            .flatMap(name ->communityRepository
                .findById(post.getCommunity())
                .flatMap(community -> {
                    HashSet<String> managers = community.getManagers();
                    if(managers.contains(name)){
                        return postRepository
                            .findById(id)
                            .flatMap(existingPost -> {
                                existingPost.setTop(false);
                                return postRepository.save(existingPost);
                            });
                    }else{
                        return Mono.error(new UserCantSetTopException("UserCantSetTopException"));
                    }
                })
            )
            .map(ResponseEntity::ok)
            .onErrorResume(UserCantSetTopException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

}
