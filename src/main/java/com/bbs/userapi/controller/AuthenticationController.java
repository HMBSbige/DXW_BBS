package com.bbs.userapi.controller;

import java.util.Arrays;

import com.bbs.userapi.security.model.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import com.bbs.userapi.model.User;
import com.bbs.userapi.security.JWTUtil;
import com.bbs.userapi.security.PBKDF2Encoder;
import com.bbs.userapi.security.model.AuthRequest;
import com.bbs.userapi.security.model.AuthResponse;
import com.bbs.userapi.service.UserService;
import com.bbs.userapi.model.repository.UserRepository;

import javax.validation.constraints.Null;

@RestController
public class AuthenticationController {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private PBKDF2Encoder passwordEncoder;

    @Autowired
    private UserService userRepository;

    @Autowired
    private UserRepository userRepository_;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Mono<ResponseEntity<?>> login(@RequestBody AuthRequest ar) {
        return userRepository.findByUsername(ar.getUsername()).map((userDetails) -> {
            if (passwordEncoder.encode(ar.getPassword()).equals(userDetails.getPassword())) {
                return ResponseEntity.ok(new AuthResponse(jwtUtil.generateToken(userDetails)));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
            }
        }).defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public Mono<ResponseEntity<Object>> signup(@RequestBody AuthRequest ar) {
        return userRepository
            .findByUsername(ar.getUsername())
            .map((userDetails) -> {
                System.out.println(ar.getUsername());
                System.out.println(userDetails);
                userRepository_
                    .save(new User(ar.getUsername(), ar.getPassword(), true, Arrays.asList(Role.ROLE_USER)))
                    .subscribe();
                return ResponseEntity.status(HttpStatus.CREATED).build();
            })
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
    }

}