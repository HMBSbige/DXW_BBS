package com.bbs.postapi.exception;

//import org.springframework.http.HttpStatus;
//import org.springframework.web.server.ResponseStatusException;

//public class UserIdNotMatchException extends ResponseStatusException {
//
//    public UserIdNotMatchException(HttpStatus status, String message, Throwable e) {
//        super(status, message, e);
//    }
//
//}

public class UserIdNotMatchException extends Exception {

    public UserIdNotMatchException() {
    }

    public UserIdNotMatchException(String message) {
        super(message);
    }

}