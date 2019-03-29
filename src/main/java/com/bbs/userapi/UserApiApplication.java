package com.bbs.userapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.bbs.userapi.model.User;
import com.bbs.userapi.model.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.ReactiveMongoOperations;
import reactor.core.publisher.Flux;

import java.time.LocalDateTime;

// https://stackoverflow.com/questions/40228036/how-to-turn-off-spring-security-in-spring-boot-application
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class UserApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserApiApplication.class, args);
    }

    //Keep the rest of the code untouched. Just add the following method
    @Bean
    CommandLineRunner init(ReactiveMongoOperations operations, UserRepository userRepository) {
        return args -> {
            Flux<User> productFlux = Flux.just(
                    new User(null, "Avenger: Infinity Wars", "Action", LocalDateTime.now()),
                    new User(null, "Gladiator", "Drama/Action", LocalDateTime.now()),
                    new User(null, "Black Panther", "Action", LocalDateTime.now()))
                    .flatMap(userRepository::save);

            productFlux
                    .thenMany(userRepository.findAll())
                    .subscribe(System.out::println);
        };
    }
}