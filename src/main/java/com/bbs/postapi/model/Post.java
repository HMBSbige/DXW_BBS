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

    private String Title;

    private String content;

    private String parentId;

    private String community;

    private boolean top;

    private boolean deleted;

    private LocalDateTime initTime;

    private LocalDateTime lastUpdateTime;

    public Post(String id, String author, String Title,
                String content, String community,
                LocalDateTime initTime, LocalDateTime lastUpdateTime) {
        // new post
        this.id = id;
        this.author = author;
        this.Title = Title;
        this.content = content;
        this.parentId = null;
        this.community = community;
        this.top = false;
        this.deleted = false;
        this.initTime = initTime;
        this.lastUpdateTime = lastUpdateTime;
    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, genre, releaseDate);
//    }

}