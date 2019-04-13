package com.bbs.communityapi.controller;

import com.bbs.communityapi.model.Community;
import com.bbs.communityapi.model.repository.CommunityRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashSet;
import java.util.Optional;

@RestController
@RequestMapping("/communities")
public class CommunityController {

    private CommunityRepository communityRepository;

    public CommunityController(CommunityRepository communityRepository) {
        this.communityRepository = communityRepository;
    }

    @GetMapping(value = "", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    // stream/text-event
    // https://www.callicoder.com/reactive-rest-apis-spring-webflux-reactive-mongo/
    // https://medium.com/@nithinmallya4/processing-streaming-data-with-spring-webflux-ed0fc68a14de
    public Flux<Community> getCommunities(@RequestParam(value = "page", required = false) Optional<Integer> page) {
        // TODO: get posts with multithread and pagination
        // https://zupzup.org/kotlin-webflux-example/
        // https://thepracticaldeveloper.com/2017/11/04/full-reactive-stack-with-spring-webflux-and-angularjs/#Pagination
        return communityRepository
            .findAllPagination(PageRequest.of(page.orElse(0), 10));
    }

    @GetMapping(value = "{id}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Mono<ResponseEntity<Community>> getCommunity(@PathVariable String id,
                                                        @RequestParam(value = "page", required = false) Optional<Integer> page) {
        // get method parameters
        // https://stackoverflow.com/questions/45924505/is-there-any-way-to-implement-pagination-in-spring-webflux-and-spring-data-react
        return communityRepository.findById(id)
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<Community>> saveCommunity(@RequestBody Community community_in_request) {
        // format for set in body
        // https://stackoverflow.com/questions/34789357/how-to-pass-liststring-in-post-method-using-spring-mvc
        return communityRepository
            .save(new Community(null, community_in_request.getName(), true, community_in_request.getManagers()))
            .map(community -> ResponseEntity.status(HttpStatus.CREATED).body(community))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.BAD_REQUEST).build());
    }

    @PutMapping("{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<Community>> updatePost(@PathVariable(value = "id") String id,
                                                      @RequestBody Community community_in_request) {
        return communityRepository
            .findById(id)
            .flatMap(community -> {
//                we can't delete one of manager in community
//                HashSet<String> managers_in_request = community_in_request.getManagers();
//                HashSet<String> managers = community.getManagers();
//                managers.addAll(managers_in_request);
                community.setManagers(community_in_request.getManagers());
                community.setVisibility(community_in_request.getVisibility());
                return communityRepository.save(community);
            })
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<Community>> deletePost(@PathVariable(value = "id") String id) {
        return communityRepository
            .findById(id)
            .flatMap(community -> {
                community.setVisibility(false);
                return communityRepository.save(community);
            })
            .map(ResponseEntity::ok)
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }

}
