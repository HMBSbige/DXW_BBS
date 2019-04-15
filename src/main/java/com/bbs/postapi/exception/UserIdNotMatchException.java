package com.bbs.postapi.exception;

public class UserIdNotMatchException extends Exception {

    public UserIdNotMatchException() {}

    public UserIdNotMatchException(String message) {
        super(message);
    }

}