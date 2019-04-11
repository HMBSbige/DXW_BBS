package com.bbs.postapi.model.repository;

import com.bbs.postapi.model.Post;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface PostRepository extends ReactiveMongoRepository<Post, String> {
    @Query("{ 'parentId': ?0 }")
    Flux<Post> findByParentId(final String parentId);

    @Query("{ 'id': ?0, 'author': ?1 }")
    Flux<Post> findByIdAndAuthor(final String Id, final String author);
}
