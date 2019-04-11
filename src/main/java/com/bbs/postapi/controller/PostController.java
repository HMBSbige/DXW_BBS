package com.bbs.postapi.controller;

import com.bbs.postapi.exception.UserIdNotMatchException;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/posts")
public class PostController {

    private PostRepository postRepository;

    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @GetMapping
    public Flux<Post> getPosts() {
        // TODO: get posts with multithread and pagination
        // https://zupzup.org/kotlin-webflux-example/
        // https://thepracticaldeveloper.com/2017/11/04/full-reactive-stack-with-spring-webflux-and-angularjs/#Pagination
        return postRepository.findAll();
    }

    @GetMapping("/parentId/{parentId}")
    public Flux<Post> getPostByParentId(@PathVariable String parentId) {
        return postRepository.findByParentId(parentId);
    }

    @GetMapping("{id}")
    public Mono<ResponseEntity<Post>> getPost(@PathVariable String id) {
        return postRepository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Mono<ResponseEntity<Post>> savePost(@RequestBody Post post_in_request, Mono<Principal> principal) {
        LocalDateTime time = LocalDateTime.now();
        return principal
                .map(Principal::getName)
                .flatMap(username -> postRepository.save(
                        new Post(null, username, post_in_request.getContent(), post_in_request.getCommunity(), time, time))
                )
                .map(post -> ResponseEntity.status(HttpStatus.CREATED).body(post))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @PostMapping("{id}")
    public Mono<ResponseEntity<Post>> saveComment(@PathVariable(value = "id") String parentId, @RequestBody Post post_in_request, Mono<Principal> principal) {
        LocalDateTime time = LocalDateTime.now();
        return principal
                .map(Principal::getName)
                .flatMap(username -> postRepository.save(new Post(
                        null, username, post_in_request.getContent(),
                        parentId, post_in_request.getCommunity(), 0,
                        true, false, time, time))
                )
                .map(post -> ResponseEntity.status(HttpStatus.CREATED).body(post))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<Post>> updatePost(@PathVariable(value = "id") String id, @RequestBody Post post, Mono<Principal> principal) {
        return principal
                .map(Principal::getName)
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
                .onErrorResume(UserIdNotMatchException.class, e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @DeleteMapping("{id}")
    public Mono<ResponseEntity<Void>> deletePost(@PathVariable(value = "id") String id, Mono<Principal> principal) {
        return principal
                .map(Principal::getName)
                .flatMap(username -> postRepository.findById(id)
                        .filter(existingPost -> username.equals(existingPost.getAuthor()))
                        .flatMap(existingPost -> postRepository.delete(existingPost))
                        .switchIfEmpty(Mono.error(new UserIdNotMatchException("UserIdNotMatchException")))
                )
                .map(ResponseEntity::ok)
                .onErrorResume(UserIdNotMatchException.class,
                        e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
                .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @DeleteMapping
    public Mono<Void> deleteAllPosts() {
        return postRepository.deleteAll();
    }
}