package com.bbs.postapi.service;

import com.bbs.postapi.model.Post;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface IPostService {

    void create(Post e);

    Mono<Post> findById(String id);

    Flux<Post> findAll();

    Mono<Post> update(Post e);

    Mono<Void> delete(String id);
}
