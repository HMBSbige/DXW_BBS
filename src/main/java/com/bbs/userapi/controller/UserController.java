package com.bbs.userapi.controller;

import java.security.Principal;

import com.bbs.userapi.exception.UserNotMatchException;
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

    @GetMapping("{username}")
    public Mono<ResponseEntity<User>> getUser(@PathVariable String username) {
        return userRepository
            .findByUsername(username)
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/search/{username}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<User> getLikeUser(@PathVariable String username) {
        return userRepository
            .findByLikeUsername(username);
    }

    @PutMapping("{username}")
    @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
    public Mono<ResponseEntity<User>> updateUser(@PathVariable String username,
                                                 @RequestBody User user_in_request,
                                                 Mono<Principal> principal) {
        return principal
            .map(Principal::getName)
            .flatMap(username_principal -> userRepository.findByUsername(username_principal))
            .flatMap(user -> {
                if (user.getUsername().equals(user_in_request.getUsername())) {
                    user.setSignature(user_in_request.getSignature());
                    user.setPassword(passwordEncoder.encode(user_in_request.getPassword()));
                    return userRepository.update(user);
                } else {
                    return Mono.error(new UserNotMatchException("UserNotMatchException"));
                }
            })
            .map(ResponseEntity::ok)
            .onErrorResume(UserNotMatchException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @DeleteMapping("{username}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<User>> deletePost(@PathVariable String username) {
        return userRepository
            .findByUsername(username)
            .flatMap(user -> {
                if(user.getLock()==true){
                    user.setLock(false);
                }else {
                    user.setLock(true);
                }
                return userRepository.update(user);
            })
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

}