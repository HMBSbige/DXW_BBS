package com.bbs.communityapi.service;

import com.bbs.communityapi.model.Community;
import com.bbs.communityapi.model.repository.CommunityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CommunityService implements ICommunityService{

    @Autowired
    CommunityRepository communityRepository;

    public void create(Community e) {
        communityRepository.save(e).subscribe();
    }

    public Mono<Community> findById(String id) {
        return communityRepository.findById(id);
    }

    public Flux<Community> findAll() {
        return communityRepository.findAll();
    }

    public Mono<Community> update(Community u) {
        return communityRepository.save(u);
    }

    public Mono<Void> delete(String id) {
        return communityRepository.deleteById(id);
    }
}
