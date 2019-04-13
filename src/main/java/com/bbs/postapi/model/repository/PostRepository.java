package com.bbs.postapi.model.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;
import com.bbs.postapi.model.Post;

public interface PostRepository extends ReactiveMongoRepository<Post, String>{

    @Query("{ 'parentId': ?0 }")
    Flux<Post> findByParentId(final String parentId, final Pageable page);

    @Query("{ 'parentId': null, 'top': false } }")
    Flux<Post> findAllPagination(final Pageable page);

    @Query("{ 'parentId': null, 'top': true }")
    Flux<Post> findTopAllPagination(final Pageable page);

}
