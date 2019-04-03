package com.bbs.postapi.service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.bbs.postapi.model.Post;

public interface IPostService {

    void create(Post e);

    Mono<Post> findById(String id);

    Flux<Post> findByParentId(String parentId);

    Flux<Post> findAll();

    Mono<Post> update(Post e);

    Mono<Void> delete(String id);
}
