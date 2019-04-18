package com.bbs.postapi.controller;

import com.bbs.communityapi.model.repository.CommunityRepository;
import com.bbs.postapi.exception.CommentsCantSetTopException;
import com.bbs.postapi.exception.UserCantSetTopException;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;

@RestController
@RequestMapping("/posts/hot")
public class PostHotController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("")
    // stream/text-event
    // https://www.callicoder.com/reactive-rest-apis-spring-webflux-reactive-mongo/
    // https://medium.com/@nithinmallya4/processing-streaming-data-with-spring-webflux-ed0fc68a14de
    public Flux<Post> getHotPosts(@RequestParam(value = "page", required = false) Optional<Integer> page) {
        // https://zupzup.org/kotlin-webflux-example/
        // https://thepracticaldeveloper.com/2017/11/04/full-reactive-stack-with-spring-webflux-and-angularjs/#Pagination
        return postRepository
            .findHotAllPagination(community, PageRequest.of(page.orElse(0), 10))
            // .filter(distinctByKey(post -> post.getParentId()))
            // why not that?
            // https://stackoverflow.com/questions/44874857/intellij-can-be-replaced-with-method-reference
            .filter(distinctByKey(Post::getParentId))
            .flatMap(post -> postRepository.findById(post.getParentId()));
        // TODO: add post without comments here
    }

    // distinct after findHotAllPagination before findById
    // which can reduce mongodb I/O
    // https://blog.csdn.net/haiyoung/article/details/80934467
    private static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
        Map<Object,Boolean> seen = new ConcurrentHashMap<>();
        return t -> seen.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }

}
