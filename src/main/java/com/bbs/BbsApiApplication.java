package com.bbs;

import com.bbs.communityapi.model.Community;
import com.bbs.communityapi.model.repository.CommunityRepository;
import com.bbs.userapi.security.PBKDF2Encoder;
import com.bbs.userapi.security.model.Role;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.bbs.userapi.model.User;
import com.bbs.userapi.model.repository.UserRepository;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.ReactiveMongoOperations;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;

// https://stackoverflow.com/questions/40228036/how-to-turn-off-spring-security-in-spring-boot-application
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class BbsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BbsApiApplication.class, args);
    }

    // We are using annotated way, if you like funcional way, see below
    // https://stackoverflow.com/questions/44570730/how-to-view-response-from-spring-5-reactive-api-in-postman

    //Keep the rest of the code untouched. Just add the following method
    @Bean
    CommandLineRunner init(ReactiveMongoOperations operations,
                           UserRepository userRepository,
                           PostRepository postRepository,
                           CommunityRepository communityRepository,
                           PBKDF2Encoder passwordEncoder) {
        return args -> {
//            userRepository
//                    .deleteAll()
//                    .then().block();

            HashSet<String> managers = new HashSet<String>();
            managers.add("admin");

            communityRepository
                .deleteAll()
                .thenMany(
                    communityRepository
                        .save(new Community("5cb1f17c80a35f37407791ee", "main", true, managers))
                )
                .subscribe(System.out::println);

            postRepository
                .deleteAll()
                .thenMany(
                    postRepository.save(
                        new Post(
                            null, "user1", "first post",
                            "first post", "5cb1f17c80a35f37407791ee", LocalDateTime.now(), LocalDateTime.now()
                        ))
                        .flatMap(post -> {
                            LocalDateTime time = LocalDateTime.now();
                            Flux<Post> postFlux = postRepository.saveAll(
                                Flux
                                    .just(
                                        new Post(
                                            null, "user1", null,
                                            "first comment",
                                            post.getId(), "5cb1f17c80a35f37407791ee",
                                            false, false, time, time
                                        ),
                                        new Post(
                                            null, "user1", null,
                                            "second comment",
                                            post.getId(), "5cb1f17c80a35f37407791ee",
                                            false, false, time, time
                                        ),
                                        new Post(
                                            null, "user1", null,
                                            "third comment",
                                            post.getId(), "5cb1f17c80a35f37407791ee",
                                            false, false, time, time
                                        ))
                            );
                            postFlux
                                .thenMany(postRepository.findAll())
                                .subscribe(System.out::println);
                            return Mono.just(post);
                        })
                )
                .subscribe(System.out::println);

            postRepository.save(
                new Post(
                    null, "user2", "second post",
                    "second post", "5cb1f17c80a35f37407791ee", LocalDateTime.now(), LocalDateTime.now()
                ))
                .flatMap(post -> {
                    LocalDateTime time = LocalDateTime.now();
                    Flux<Post> postFlux = postRepository.saveAll(
                        Flux
                            .just(
                                new Post(
                                    null, "user2", null,
                                    "first comment",
                                    post.getId(), "5cb1f17c80a35f37407791ee",
                                    false, false, time, time
                                ),
                                new Post(
                                    null, "user1", null,
                                    "second comment",
                                    post.getId(), "5cb1f17c80a35f37407791ee",
                                    false, false, time, time
                                ))
                    );
                    postFlux
                        .thenMany(postRepository.findAll())
                        .subscribe(System.out::println);
                    return Mono.just(post);
                }).subscribe(System.out::println);


            Flux<User> productFlux = userRepository
                .deleteAll()
                .thenMany(
                    Flux
                        .just(
                            new User("user1", passwordEncoder.encode("user1"), null, false, true, Arrays.asList(Role.ROLE_USER)),
                            new User("user2", passwordEncoder.encode("user2"), null, false, true, Arrays.asList(Role.ROLE_USER)),
                            new User("admin", passwordEncoder.encode("admin"), null, false, true, Arrays.asList(Role.ROLE_ADMIN)))
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