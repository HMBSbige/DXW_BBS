package com.bbs.serachapi.controller;

import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import com.bbs.userapi.model.User;
import com.bbs.userapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

import java.util.Optional;

@RestController
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private UserService userRepository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping(value = "/users/{username}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<User> getUsers(@PathVariable String username) {
        return userRepository
            .findByLikeUsername(username);
    }

    @GetMapping(value = "/posts/{username}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Post> getPosts(@PathVariable String username,
                               @RequestParam(value = "page", required = false) Optional<Integer> page) {
        return postRepository
            .findUserPostAllPagination(username, PageRequest.of(page.orElse(0), 10));
    }

    @GetMapping(value = "/comments/{username}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Post> getComments(@PathVariable String username,
                                  @RequestParam(value = "page", required = false) Optional<Integer> page) {
        return postRepository
            .findUserCommentAllPagination(username, PageRequest.of(page.orElse(0), 10));
    }

}