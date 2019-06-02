//package com.bbs.postapi.controller;
//
//import com.bbs.postapi.model.Post;
//import com.bbs.postapi.model.PostRedis;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.redis.core.ReactiveRedisTemplate;
//import org.springframework.data.redis.core.ReactiveValueOperations;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.*;
//import reactor.core.publisher.Flux;
//import reactor.core.publisher.Mono;
//
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/postsRedis")
//public class PostRedisTestController {
//
//    @Autowired
//    private ReactiveRedisTemplate reactiveRedisTemplate;
//
//    @GetMapping(value = "/{id}")
//    public Mono<PostRedis> getPosts(@PathVariable("id") Long id) {
//        String key = "post_" + id;
//        ReactiveValueOperations<String, PostRedis> operations = reactiveRedisTemplate.opsForValue();
//        Mono<PostRedis> postRedis = operations.get(key);
//        return postRedis;
//    }
//
//    @PostMapping
//    public Mono<PostRedis> saveCity(@RequestBody PostRedis postRedis) {
//        String key = "post_" + postRedis.getId();
//        ReactiveValueOperations<String, PostRedis> operations = reactiveRedisTemplate.opsForValue();
//        return operations.getAndSet(key, postRedis);
//    }
//
//    @DeleteMapping(value = "/{id}")
//    public Mono<Long> deleteCity(@PathVariable("id") Long id) {
//        String key = "post_" + id;
//        return reactiveRedisTemplate.delete(key);
//    }
//}
