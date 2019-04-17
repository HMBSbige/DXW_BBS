package com.bbs.userapi.service;

import com.bbs.userapi.model.User;
import com.bbs.userapi.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class UserService implements IUserService {

    // this is just an example, you can load the user from the database from the repository

    @Autowired
    UserRepository userRepository;

    public Mono<User> create(User e) {
        return userRepository.save(e);
    }

    public Mono<User> findByUsername(String username) {
        return userRepository.findByName(username);
    }

    public Mono<User> findById(String id) {
        return userRepository.findById(id);
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