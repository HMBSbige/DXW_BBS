package com.bbs.chatapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.HashSet;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Chat {

    @Id
    private String id;

    private String sender;

    private String receiver;

    private String content;

    private LocalDateTime sendTime;

}
