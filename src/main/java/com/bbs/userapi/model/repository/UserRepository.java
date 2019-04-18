package com.bbs.userapi.model.repository;

import com.bbs.userapi.model.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface UserRepository extends ReactiveMongoRepository<User, String> {
    @Query("{ 'username': ?0 }")
    Mono<User> findByName(final String name);

    // bullshit of regex
    // https://stackoverflow.com/questions/48424222/spring-data-mongodb-regex-search
    // https://stackoverflow.com/questions/53792312/custom-query-regex-mongodb-spring-data
    @Query("{ 'username': {'$regex': '?0', $options:'i'} }")
    Flux<User> findByLikeName(final String name);
}
