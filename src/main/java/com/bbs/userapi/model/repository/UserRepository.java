package com.bbs.userapi.model.repository;

import com.bbs.userapi.model.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface UserRepository extends ReactiveMongoRepository<User, String>{
    @Query("{ 'name': ?0 }")
    Flux<User> findByName(final String name);
}
