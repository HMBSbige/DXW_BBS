package com.bbs.userapi.controller;

import com.bbs.userapi.model.User;
import com.bbs.userapi.model.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/users")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping
    public Flux<User> getMovies(){
        return userRepository.findAll();
    }

    @GetMapping("{id}")
    public Mono<ResponseEntity<User>> getMovie(@PathVariable String id){
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }


    @RequestMapping(value = "/name/{name}", method = RequestMethod.GET)
    @ResponseBody
    public Flux<User> findByName(@PathVariable("name") String name) {
        return userRepository.findByName(name);
    }


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<User> saveMovie(@RequestBody User movie){
        return userRepository.save(movie);
    }

    @PutMapping("{id}")
    public Mono<ResponseEntity<User>> updateMovie(@PathVariable(value = "id") String id, @RequestBody User user){
        return userRepository.findById(id)
                .flatMap(existingMovie -> {
                    existingMovie.setName(user.getName());
                    existingMovie.setPassword(user.getPassword());
                    existingMovie.setLastLoginTime(user.getLastLoginTime());
                    return userRepository.save(existingMovie);
                })
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("{id}")
    public Mono<ResponseEntity<Void>> deleteMovie(@PathVariable(value = "id") String id){
        return userRepository.findById(id)
                .flatMap(existingMovie ->
                        userRepository.delete(existingMovie)
                                .then(Mono.just(ResponseEntity.ok().<Void>build()))
                )
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping
    public Mono<Void> deleteAllMovies(){
        return userRepository.deleteAll();
    }
}