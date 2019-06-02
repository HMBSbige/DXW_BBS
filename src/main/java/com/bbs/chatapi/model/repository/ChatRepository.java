package com.bbs.chatapi.model.repository;

import com.bbs.chatapi.model.Chat;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;

public interface ChatRepository extends ReactiveMongoRepository<Chat, String> {

    @Query(value = "{ 'sender': ?0, 'receiver': ?1 }", sort = "{ 'sendTime': -1}")
    Flux<Chat> findAll(String sender, String receiver, final Pageable page);

}
