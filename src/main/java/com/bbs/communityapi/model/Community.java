package com.bbs.communityapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Community {

    @Id
    private String id;

    private String name;

    private boolean visibility;

    // though convert set to some kind of string is possible
    // it would be great if we can use dynamic properties natively supported by mongodb
    // https://stackoverflow.com/questions/46466562/how-to-save-and-query-dynamic-fields-in-spring-data-mongodb/46467040
    private HashSet<String> managers;

    public boolean getVisibility(){
        return this.visibility;
    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, genre, releaseDate);
//    }

}