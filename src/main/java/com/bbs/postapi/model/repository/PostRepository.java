package com.bbs.postapi.model.repository;

import com.bbs.postapi.model.Post;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface PostRepository extends ReactiveMongoRepository<Post, String> {

    @Query("{ 'parentId': ?0 }")
    Flux<Post> findByParentId(final String parentId, final Pageable page);

    @Query("{ 'parentId': null, 'top': false, 'deleted': false, 'community': ?0 }")
    Flux<Post> findAllPagination(String community, final Pageable page);

    @Query("{ 'parentId': null, 'top': true, 'deleted': false, 'community': ?0 }")
    Flux<Post> findTopAllPagination(String community, final Pageable page);

    // https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/#mongodb.repositories.queries.sort
    @Query(value = "{ 'parentId': {$ne:null},'deleted': false }", sort = "{ 'lastUpdateTime': -1}")
    Flux<Post> findHotAllPagination(final Pageable page);

    @Query("{ 'parentId': null, 'deleted': false, 'author': ?0 }")
    Flux<Post> findUserPostAllPagination(String username, final Pageable page);

    @Query("{ 'parentId': {$ne:null}, 'deleted': false, 'author': ?0 }")
    Flux<Post> findUserCommentAllPagination(String username, final Pageable page);

}
