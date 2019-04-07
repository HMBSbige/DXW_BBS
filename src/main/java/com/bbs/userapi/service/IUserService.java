package com.bbs.userapi.service;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.bbs.userapi.model.User;

public interface IUserService {

    void create(User e);

    Mono<User> findById(String id);

    Flux<User> findAll();

    Mono<User> update(User e);

    Mono<Void> delete(String id);
}
