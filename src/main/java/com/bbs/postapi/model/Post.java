package com.bbs.postapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data @AllArgsConstructor @NoArgsConstructor
public class Post {

    @Id
    private String id;

    private String author;

    private String content;

    private String parentId;

    private String community;

    private int upvote;

    private boolean visibility;

    private boolean deleted;

    private LocalDateTime initTime;

    private LocalDateTime lastUpdateTime;

    public Post(String id, String author, String content, String community,
                LocalDateTime initTime, LocalDateTime lastUpdateTime) {
        // new post
        this.id = id;
        this.author = author;
        this.content = content;
        this.parentId = null;
        this.community = community;
        this.upvote = 0;
        this.visibility = true;
        this.deleted = false;
        this.initTime = initTime;
        this.lastUpdateTime = lastUpdateTime;
    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, genre, releaseDate);
//    }

}