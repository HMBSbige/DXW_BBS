package com.bbs.postapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Objects;

@Document
@Data @AllArgsConstructor @NoArgsConstructor
public class Post {

    @Id
    private String id;

    private String author;

    private String title;

    private String content;

    private String parentId;

    private String community;

    private boolean top;

    private boolean deleted;

    private LocalDateTime initTime;

    private LocalDateTime lastUpdateTime;

    public Post(String id, String author, String title,
                String content, String community,
                LocalDateTime initTime, LocalDateTime lastUpdateTime) {
        // new post
        this.id = id;
        this.author = author;
        this.title = title;
        this.content = content;
        this.parentId = null;
        this.community = community;
        this.top = false;
        this.deleted = false;
        this.initTime = initTime;
        this.lastUpdateTime = lastUpdateTime;
    }

    public boolean getDeleted(){
        return this.deleted;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, author, title, content, community);
    }

    @Override
    public boolean equals(Object obj){
        if (obj instanceof Post) {
            Post post= (Post) obj;
            return id.equals(post.getId());
        }
        return false;
    }

}