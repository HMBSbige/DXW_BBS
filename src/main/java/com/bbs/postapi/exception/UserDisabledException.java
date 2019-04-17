package com.bbs.postapi.exception;

public class UserDisabledException extends Exception {

    public UserDisabledException() {}

    public UserDisabledException(String message) {
        super(message);
    }

}