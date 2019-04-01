package com.bbs.userapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bbs.userapi.model.repository.UserRepository;
import com.bbs.userapi.model.User;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserService implements IUserService {

    @Autowired
    UserRepository userRepository;

    public void create(User e) {
        userRepository.save(e).subscribe();
    }

    public Mono<User> findById(String id) {
        return userRepository.findById(id);
    }

    public Flux<User> findByName(String name) {
        return userRepository.findByName(name);
    }

    public Flux<User> findAll() {
        return userRepository.findAll();
    }

    public Mono<User> update(User u) {
        return userRepository.save(u);
    }

    public Mono<Void> delete(String id) {
        return userRepository.deleteById(id);
    }

}
