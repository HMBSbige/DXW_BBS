package com.bbs.userapi.controller;

import java.security.Principal;

import com.bbs.userapi.model.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/resource")
public class ResourceController {

    @RequestMapping(value = "/anonymous", method = RequestMethod.GET)
    public Mono<ResponseEntity<?>> anonymous() {
        return Mono.just(ResponseEntity.ok(new Message("Content for anonymous")));
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @PreAuthorize("hasRole('USER')")
    public Mono<ResponseEntity<?>> user() {
        return Mono.just(ResponseEntity.ok(new Message("Content for user")));
    }

    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<?>> admin() {
        return Mono.just(ResponseEntity.ok(new Message("Content for admin")));
    }

    @RequestMapping(value = "/user-or-admin", method = RequestMethod.GET)
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public Mono<ResponseEntity<?>> userOrAdmin(Mono<Principal> principal) {
        // https://stackoverflow.com/questions/47503873/how-to-get-the-authentication-object-with-spring-webflux
        return principal
                .map(Principal::getName)
                .flatMap(username->
                        Mono.just(ResponseEntity.ok(new Message("Content for user or admin "+username)))
                );
    }
}