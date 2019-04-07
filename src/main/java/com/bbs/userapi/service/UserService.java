package com.bbs.userapi.service;

import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;
import com.bbs.userapi.model.User;
import com.bbs.userapi.service.IUserService;
import com.bbs.userapi.security.model.Role;
import com.bbs.userapi.model.repository.UserRepository;

@Service
public class UserService implements IUserService{

    // this is just an example, you can load the user from the database from the repository

    @Autowired
    UserRepository userRepository;

    //username:passwowrd -> user:user
    private final String userUsername = "user";// password: user
    private final User user = new User(userUsername, "cBrlgyL2GI2GINuLUUwgojITuIufFycpLG4490dhGtY=", true, Arrays.asList(Role.ROLE_USER));

    //username:passwowrd -> admin:admin
    private final String adminUsername = "admin";// password: admin
    private final User admin = new User(adminUsername, "dQNjUIMorJb8Ubj2+wVGYp6eAeYkdekqAcnYp+aRq5w=", true, Arrays.asList(Role.ROLE_ADMIN));

    public void create(User e) {
        userRepository.save(e).subscribe();
    }

    public Mono<User> findByUsername(String username) {
        return userRepository.findByName(username);
    }

    public Mono<User> findById(String id) {
        return userRepository.findById(id);
    }

    public Flux<User> findAll() {
        return userRepository.findAll();
    }

    public Mono<User> update(User u) {
        return userRepository.save(u);
    }

    public Mono<Void> delete(String id) {
        return userRepository.deleteById(id);
    }

}