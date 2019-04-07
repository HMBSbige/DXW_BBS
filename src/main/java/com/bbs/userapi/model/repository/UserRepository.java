package com.bbs.userapi.model.repository;

import com.bbs.userapi.model.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveMongoRepository<User, String>{
    @Query("{ 'username': ?0 }")
    Mono<User> findByName(final String name);
}
