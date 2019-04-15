package com.bbs.communityapi.service;

import com.bbs.communityapi.model.Community;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ICommunityService {

    void create(Community e);

    Mono<Community> findById(String id);

    Flux<Community> findAll();

    Mono<Community> update(Community e);

    Mono<Void> delete(String id);
}
