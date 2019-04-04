package com.bbs.postapi.controller;

import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/posts")
public class PostController {

    private PostRepository postRepository;

    public PostController(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    @GetMapping
    public Flux<Post> getMovies(){
        return postRepository.findAll();
    }

    @GetMapping("/parentId/{parentId}")
    public Flux<Post> getPostByParentId(@PathVariable String parentId){
        return postRepository.findByParentId(parentId);
    }

    @GetMapping("{id}")
    public Mono<ResponseEntity<Post>> getPost(@PathVariable String id){
        return postRepository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Post> savePost(@RequestBody Post post){
        LocalDateTime time=LocalDateTime.now();
        return postRepository.save(
                new Post(null, "Author", post.getContent(), post.getCommunity(), time, time));
    }

    @PostMapping("{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Post> saveComment(@PathVariable(value = "id") String parentId, @RequestBody Post post){
        LocalDateTime time=LocalDateTime.now();
        return postRepository.save(
                new Post(null, "Author", post.getContent(),
                        parentId, post.getCommunity(), 0,
                        true, false, time, time));
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<Post>> updatePost(@PathVariable(value = "id") String id, @RequestBody Post post){
        return postRepository.findById(id)
                .flatMap(existingPost -> {
                    existingPost.setContent(post.getContent());
                    existingPost.setLastUpdateTime(post.getLastUpdateTime());
                    return postRepository.save(existingPost);
                })
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public Mono<ResponseEntity<Void>> deletePost(@PathVariable(value = "id") String id){
        return postRepository.findById(id)
                .flatMap(existingPost ->
                        postRepository.delete(existingPost)
                                .then(Mono.just(ResponseEntity.ok().<Void>build()))
                )
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public Mono<Void> deleteAllPosts(){
        return postRepository.deleteAll();
    }
}