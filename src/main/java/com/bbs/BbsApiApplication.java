package com.bbs;

import com.bbs.postapi.model.repository.PostRepository;
import com.bbs.userapi.model.User;
import com.bbs.userapi.model.repository.UserRepository;
import com.bbs.userapi.security.PBKDF2Encoder;
import com.bbs.userapi.security.model.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.ReactiveMongoOperations;
import reactor.core.publisher.Flux;

import java.util.Collections;

// https://stackoverflow.com/questions/40228036/how-to-turn-off-spring-security-in-spring-boot-application
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class BbsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BbsApiApplication.class, args);
    }

    //Keep the rest of the code untouched. Just add the following method
    @Bean
    CommandLineRunner init(ReactiveMongoOperations operations, UserRepository userRepository, PostRepository postRepository, PBKDF2Encoder passwordEncoder) {
        return args -> {
//            userRepository
//                    .deleteAll()
//                    .then().block();

            postRepository
                    .deleteAll()
                    .then().block();

            Flux<User> productFlux = userRepository
                    .deleteAll()
                    .thenMany(
                            Flux
                                    .just(
                                            new User("user", passwordEncoder.encode("user"), true, Collections.singletonList(Role.ROLE_USER)),
                                            new User("manager", passwordEncoder.encode("manager"), true, Collections.singletonList(Role.ROLE_MANAGER)),
                                            new User("admin", passwordEncoder.encode("admin"), true, Collections.singletonList(Role.ROLE_ADMIN)))
                                    .flatMap(userRepository::save)
                    );

//            Flux<User> productFlux = Flux.just(
//                    new User(null, "Avenger: Infinity Wars", "Action", LocalDateTime.now()),
//                    new User(null, "Gladiator", "Drama/Action", LocalDateTime.now()),
//                    new User(null, "Black Panther", "Action", LocalDateTime.now()))
//                    .flatMap(userRepository::save);

            productFlux
                    .thenMany(userRepository.findAll())
                    .subscribe(System.out::println);
        };
    }
}