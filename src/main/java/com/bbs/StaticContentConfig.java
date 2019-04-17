package com.bbs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.web.reactive.function.server.RequestPredicates.GET;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Configuration
public class StaticContentConfig {
    // https://www.logicbig.com/tutorials/spring-framework/spring-boot/boot-serve-static.html
    // https://www.baeldung.com/spring-webflux-static-content

    @Bean
    public RouterFunction<ServerResponse> htmlRouter(@Value("classpath:/static/index.html") Resource html) {
        return route(
            GET("/"),
            request -> ok()
                .contentType(MediaType.TEXT_HTML)
                .syncBody(html)
        );
    }

    @Bean
    public RouterFunction<ServerResponse> allRouter() {
        return RouterFunctions.resources("/**", new ClassPathResource("static/"));
    }

}