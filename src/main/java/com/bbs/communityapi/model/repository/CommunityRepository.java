package com.bbs.communityapi.model.repository;

import com.bbs.communityapi.model.Community;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface CommunityRepository extends ReactiveMongoRepository<Community, String> {

    @Query("{}")
    Flux<Community> findAllPagination(final Pageable page);

}
