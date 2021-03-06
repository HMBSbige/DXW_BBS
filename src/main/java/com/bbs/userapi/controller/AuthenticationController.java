package com.bbs.userapi.controller;

import com.bbs.userapi.model.User;
import com.bbs.userapi.security.JWTUtil;
import com.bbs.userapi.security.PBKDF2Encoder;
import com.bbs.userapi.security.model.AuthRequest;
import com.bbs.userapi.security.model.AuthResponse;
import com.bbs.userapi.security.model.Role;
import com.bbs.userapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Arrays;

@RestController
public class AuthenticationController {
    // can not be done without
    // https://medium.com/@ard333/authentication-and-authorization-using-jwt-on-spring-webflux-29b81f813e78

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private PBKDF2Encoder passwordEncoder;

    @Autowired
    private UserService userRepository;

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
        // Just remember my whole afternoon and night
        // https://stackoverflow.com/questions/54554581/spring-webflux-how-to-get-data-from-request
        // https://stackoverflow.com/questions/52491405/how-to-combine-flux-and-responseentity-in-spring-webflux-controllers
        return userRepository.findByUsername(ar.getUsername())
            .map((userDetails) -> new ResponseEntity<Object>(HttpStatus.CONFLICT))
            .switchIfEmpty(Mono
                .just(new User(
                    ar.getUsername(), passwordEncoder.encode(ar.getPassword()),
                    null, false, true, Arrays.asList(Role.ROLE_USER)))
                .flatMap(user -> userRepository.create(user))
                .map(user -> ResponseEntity.status(HttpStatus.CREATED).build())
            );
    }

}