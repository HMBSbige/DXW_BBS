package com.bbs.postapi.controller;

import com.bbs.postapi.exception.UserDisabledException;
import com.bbs.postapi.exception.UserIdNotMatchException;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import com.bbs.userapi.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {
    // can not be done without
    // https://auth0.com/blog/introduction-getting-started-with-spring-webflux-api/

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    // stream/text-event
    // https://www.callicoder.com/reactive-rest-apis-spring-webflux-reactive-mongo/
    // https://medium.com/@nithinmallya4/processing-streaming-data-with-spring-webflux-ed0fc68a14de
    public Flux<Post> getPosts(@RequestParam(value = "community") String community,
                               @RequestParam(value = "page", required = false) Optional<Integer> page) {
        // https://zupzup.org/kotlin-webflux-example/
        // https://thepracticaldeveloper.com/2017/11/04/full-reactive-stack-with-spring-webflux-and-angularjs/#Pagination
        return postRepository
            .findAllPagination(community, PageRequest.of(page.orElse(0), 10));
    }

    @GetMapping(value = "{id}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Mono<ResponseEntity<Flux<Post>>> getPost(@PathVariable String id,
                                                    @RequestParam(value = "page", required = false) Optional<Integer> page) {
        // get method parameters
        // https://stackoverflow.com/questions/45924505/is-there-any-way-to-implement-pagination-in-spring-webflux-and-spring-data-react
        return postRepository.findById(id)
            .map(post -> postRepository.findByParentId(id, PageRequest.of(page.orElse(0), 10)))
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.notFound().build());
//            .delayElement(Duration.ofMillis(100));
    }

    @PostMapping
    public Mono<ResponseEntity<Post>> savePost(@RequestBody Post post_in_request, Mono<Principal> principal) {
        LocalDateTime time = LocalDateTime.now();
        return principal
            .map(Principal::getName)
            .flatMap(username -> userRepository
                .findByName(username)
                .flatMap(user -> {
                    if (user.isLocked()) {
                        return Mono.error(new UserDisabledException("UserDisabledException"));
                    } else {
                        return Mono.just(username);
                    }
                })
            )
            .flatMap(username -> postRepository.save(
                new Post(null, username, post_in_request.getTitle(),
                    post_in_request.getContent(), post_in_request.getCommunity(), time, time))
            )
            .map(post -> ResponseEntity.status(HttpStatus.CREATED).body(post))
            .onErrorResume(UserDisabledException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @PostMapping("{id}")
    public Mono<ResponseEntity<Post>> saveComment(@PathVariable(value = "id") String parentId,
                                                  @RequestBody Post post_in_request, Mono<Principal> principal) {
        LocalDateTime time = LocalDateTime.now();
        return principal
            .map(Principal::getName)
            .flatMap(username -> userRepository
                .findByName(username)
                .flatMap(user -> {
                    if (user.isLocked() == true) {
                        return Mono.error(new UserDisabledException("UserDisabledException"));
                    } else {
                        return Mono.just(username);
                    }
                })
            )
            .flatMap(username -> postRepository.save(new Post(
                null, username, post_in_request.getTitle(),
                post_in_request.getContent(),
                parentId, post_in_request.getCommunity(),
                false, false, time, time))
            )
            .map(post -> ResponseEntity.status(HttpStatus.CREATED).body(post))
            .onErrorResume(UserDisabledException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<Post>> updatePost(@PathVariable(value = "id") String id,
                                                 @RequestBody Post post, Mono<Principal> principal) {
        return principal
            .map(Principal::getName)
            .flatMap(username -> userRepository
                .findByName(username)
                .flatMap(user -> {
                    if (user.isLocked() == true) {
                        return Mono.error(new UserDisabledException("UserDisabledException"));
                    } else {
                        return Mono.just(username);
                    }
                })
            )
            .flatMap(username -> postRepository.findById(id)
                    .filter(existingPost -> username.equals(existingPost.getAuthor()))
                    .flatMap(existingPost -> {
//                    System.out.println(username);
//                    System.out.println(existingPost.getAuthor());
                        existingPost.setContent(post.getContent());
                        existingPost.setLastUpdateTime(post.getLastUpdateTime());
                        return postRepository.save(existingPost);
                    })
                    .switchIfEmpty(Mono.error(new UserIdNotMatchException("UserIdNotMatchException")))
            )
            .map(ResponseEntity::ok)
            // https://stackoverflow.com/questions/44273112/onerrorresume-not-working-as-expected
            .onErrorResume(UserIdNotMatchException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .onErrorResume(UserDisabledException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @DeleteMapping("{id}")
    public Mono<ResponseEntity<Post>> deletePost(@PathVariable(value = "id") String id, Mono<Principal> principal) {
        return principal
            .map(Principal::getName)
            .flatMap(username -> userRepository
                .findByName(username)
                .flatMap(user -> {
                    if (user.isLocked() == true) {
                        return Mono.error(new UserDisabledException("UserDisabledException"));
                    } else {
                        return Mono.just(username);
                    }
                })
            )
            .flatMap(username -> postRepository.findById(id)
                .filter(existingPost -> username.equals(existingPost.getAuthor()))
                .flatMap(existingPost -> {
                    existingPost.setDeleted(true);
                    return postRepository.save(existingPost);
                })
                .switchIfEmpty(Mono.error(new UserIdNotMatchException("UserIdNotMatchException")))
            )
            .map(ResponseEntity::ok)
            .onErrorResume(UserIdNotMatchException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .onErrorResume(UserDisabledException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

}