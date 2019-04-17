package com.bbs.userapi.service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.bbs.userapi.model.User;

public interface IUserService {

    Mono<User> create(User e);

    Mono<User> findById(String id);

    Mono<User> findByUsername(String username);

    Flux<User> findByLikeUsername(String username);

    Flux<User> findAll();

    Mono<User> update(User e);

    Mono<Void> delete(String id);
}
