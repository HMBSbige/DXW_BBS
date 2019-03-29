package com.bbs.userapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Objects;

@Document
public class User {

    @Id
    private String id;

    private String name;

    private String password;

    private LocalDateTime lastLoginTime;

    public User() {
    }

    public User(String id, String name, String password, LocalDateTime lastLoginTime) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.lastLoginTime = lastLoginTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String genre) {
        this.password = password;
    }

    public LocalDateTime getLastLoginTime() {
        return lastLoginTime;
    }

    public void setLastLoginTime(LocalDateTime lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Movie movie = (Movie) o;
//        return Objects.equals(id, movie.id) &&
//                Objects.equals(name, movie.name) &&
//                Objects.equals(genre, movie.genre) &&
//                Objects.equals(releaseDate, movie.releaseDate);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, genre, releaseDate);
//    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", lastLoginTime=" + lastLoginTime +
                '}';
    }
}