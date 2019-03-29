package com.bbs.userapi.model.repository;

import com.bbs.userapi.model.User;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

public interface UserRepository extends ReactiveMongoRepository<User, String>{
}
