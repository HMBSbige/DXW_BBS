package com.bbs.postapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bbs.postapi.service.IPostService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;

@Service
public class PostService implements IPostService {

    @Autowired
    PostRepository postRepository;

    public void create(Post e) {
        postRepository.save(e).subscribe();
    }

    public Mono<Post> findById(String id) {
        return postRepository.findById(id);
    }

    public Flux<Post> findByParentId(String parentId) {
        return postRepository.findAll();
    }

    public Flux<Post> findAll() {
        return postRepository.findAll();
    }

    public Mono<Post> update(Post u) {
        return postRepository.save(u);
    }

    public Mono<Void> delete(String id) {
        return postRepository.deleteById(id);
    }

}
