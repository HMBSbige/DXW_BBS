package com.bbs.userapi.controller;

import java.security.Principal;

import com.bbs.userapi.model.Message;
import com.bbs.userapi.model.User;
import com.bbs.userapi.security.PBKDF2Encoder;
import com.bbs.userapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userRepository;

    @Autowired
    private PBKDF2Encoder passwordEncoder;

    @GetMapping("{name}")
    public Mono<ResponseEntity<User>> getUser(@PathVariable String name) {
        return userRepository
            .findByUsername(name)
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/search/{name}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<User> getLikeUser(@PathVariable String name) {
        return userRepository
            .findByLikeUsername(name);
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<User>> updateUser(@PathVariable(value = "id") String id,
                                                 @RequestBody User user_in_request) {
        return userRepository
            .findById(id)
            .flatMap(user -> {
                user.setSignature(user_in_request.getSignature());
                user.setPassword(passwordEncoder.encode(user_in_request.getPassword()));
                return userRepository.update(user);
            })
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<User>> deletePost(@PathVariable(value = "id") String id) {
        return userRepository
            .findById(id)
            .flatMap(user -> {
                if (user.getEnabled() == true) {
                    user.setEnabled(false);
                } else {
                    user.setEnabled(true);
                }
                return userRepository.update(user);
            })
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

}