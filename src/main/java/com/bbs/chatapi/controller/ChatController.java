package com.bbs.chatapi.controller;

import com.bbs.chatapi.model.Chat;
import com.bbs.chatapi.model.repository.ChatRepository;
import com.bbs.postapi.exception.UserDisabledException;
import com.bbs.userapi.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/chat")
public class ChatController {

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "")
    public Flux<Chat> getChat(@RequestParam(value = "sender") String sender,
                              @RequestParam(value = "receiver") String receiver,
                              @RequestParam(value = "page", required = false) Optional<Integer> page,
                              Mono<Principal> principal) {
//        return principal
//            .map(Principal::getName)
//            .flatMap(username -> userRepository
//                .findByName(username)
//                .map(user -> {
//                    if (user.isLocked()) {
//                        return Flux.error(new UserDisabledException("UserDisabledException"));
//                    } else {
//                        return Flux.just(username);
//                    }
//                })
//            )
//            .flatMap(chatRepository.findAll(sender, receiver, PageRequest.of(page.orElse(0), 10)))
//            .onErrorResume(UserDisabledException.class,
//                e -> Flux.just();
        Flux<Chat> a2b = chatRepository.findAll(sender, receiver, PageRequest.of(page.orElse(0), 10));
        Flux<Chat> b2a = chatRepository.findAll(receiver, sender, PageRequest.of(page.orElse(0), 10));
        return Flux.merge(a2b, b2a).sort((chat1, chat2)->chat1.getSendTime().isBefore(chat2.getSendTime())?1:0);
    }

    @PostMapping("{receiver}")
    public Mono<ResponseEntity<Chat>> saveChat(@PathVariable(value = "receiver") String receiver,
                                               @RequestBody Chat chat_in_request, Mono<Principal> principal) {
        return principal
            .map(Principal::getName)
            .flatMap(username -> userRepository
                .findByName(username)
                .flatMap(user -> {
                    if (user.isLocked() == true) {
                        return Mono.error(new UserDisabledException("UserDisabledException"));
                    } else {
                        return Mono.just(username);
                    }
                })
            )
            .flatMap(username -> chatRepository.save(new Chat(
                null, username, receiver, chat_in_request.getContent(), LocalDateTime.now())))
            .map(chat -> ResponseEntity.status(HttpStatus.CREATED).body(chat))
            .onErrorResume(UserDisabledException.class,
                e -> Mono.just(ResponseEntity.status(HttpStatus.BAD_REQUEST).build()))
            .defaultIfEmpty(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }
}
