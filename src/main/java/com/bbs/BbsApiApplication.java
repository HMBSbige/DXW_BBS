package com.bbs;

import com.bbs.communityapi.model.Community;
import com.bbs.communityapi.model.repository.CommunityRepository;
import com.bbs.postapi.model.Post;
import com.bbs.postapi.model.repository.PostRepository;
import com.bbs.userapi.model.User;
import com.bbs.userapi.model.repository.UserRepository;
import com.bbs.userapi.security.PBKDF2Encoder;
import com.bbs.userapi.security.model.Role;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.ReactiveMongoOperations;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.HashSet;

// https://stackoverflow.com/questions/40228036/how-to-turn-off-spring-security-in-spring-boot-application
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class BbsApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(BbsApiApplication.class, args);
    }

    // We are using annotated way, if you like funcional way, see below
    // https://stackoverflow.com/questions/44570730/how-to-view-response-from-spring-5-reactive-api-in-postman

    //Keep the rest of the code untouched. Just add the following method
    @Bean
    CommandLineRunner init(ReactiveMongoOperations operations,
                           UserRepository userRepository,
                           PostRepository postRepository,
                           CommunityRepository communityRepository,
                           PBKDF2Encoder passwordEncoder) {
        return args -> {
            userRepository
                    .deleteAll()
                    .then().block();

            HashSet<String> managers = new HashSet<String>();
            managers.add("admin");

            communityRepository
                .deleteAll()
                .thenMany(
                    communityRepository
                        .save(new Community("5cb1f17c80a35f37407791ee", "编程分享", true, managers))
                )
                .subscribe(System.out::println);

            communityRepository
                .deleteAll()
                .thenMany(
                    communityRepository
                        .save(new Community("5cb9111064330637a055382f", "东华时事", true, managers))
                )
                .subscribe(System.out::println);

            postRepository
                .deleteAll()
                .thenMany(
                    postRepository.save(
                        new Post(
                            null, "user1", "SSE",
                            "SSE的简单模型是：一个客户端去从服务器端订阅一条“流”，之后服务端可以发送消息给客户端直到服务端或者客户端关闭该“流”，所以eventsource也叫作\"server-sent-event\"。相比以前的轮询，SSE可以为B2C带来更高的效率。", "5cb1f17c80a35f37407791ee", LocalDateTime.now(), LocalDateTime.now()
                        ))
                        .flatMap(post -> {
                            LocalDateTime time = LocalDateTime.now();
                            Flux<Post> postFlux = postRepository.saveAll(
                                Flux
                                    .just(
                                        new Post(
                                            null, "user2", null,
                                            "真的是很厉害的技术呢wwwwwwww",
                                            post.getId(), "5cb1f17c80a35f37407791ee",
                                            false, false, time, time
                                        ),
                                        new Post(
                                            null, "user1", null,
                                            "这个看上去没有websocket功能多，只能单向通讯",
                                            post.getId(), "5cb1f17c80a35f37407791ee",
                                            false, false, time, time
                                        ),
                                        new Post(
                                            null, "user2", null,
                                            "但是这个是基于http而非tcp的，减少服务器需支持功能和减小开销",
                                            post.getId(), "5cb1f17c80a35f37407791ee",
                                            false, false, time, time
                                        ))
                            );
                            postFlux
                                .thenMany(postRepository.findAll())
                                .subscribe(System.out::println);
                            return Mono.just(post);
                        })
                )
                .subscribe(System.out::println);

            postRepository.save(
                new Post(
                    null, "user1", "晨跑够了吗？",
                    "这学期晨跑改革不知道大家适应了吗？", "5cb9111064330637a055382f", LocalDateTime.now(), LocalDateTime.now()
                ))
                .flatMap(post -> {
                    LocalDateTime time = LocalDateTime.now();
                    Flux<Post> postFlux = postRepository.saveAll(
                        Flux
                            .just(
                                new Post(
                                    null, "user1", null,
                                    "挽尊，抢沙发",
                                    post.getId(), "5cb9111064330637a055382f",
                                    false, false, time, time
                                ),
                                new Post(
                                    null, "user2", null,
                                    "谢邀，够了。利益相关：无体育课。",
                                    post.getId(), "5cb9111064330637a055382f",
                                    false, false, time, time
                                ))
                    );
                    postFlux
                        .thenMany(postRepository.findAll())
                        .subscribe(System.out::println);
                    return Mono.just(post);
                }).subscribe(System.out::println);


            postRepository.save(
                new Post(
                    null, "user2", "JWT",
                    "JWT是一种用于双方之间传递安全信息的简洁的、URL安全的表述性声明规范。JWT作为一个开放的标准（ RFC 7519 ），定义了一种简洁的，自包含的方法用于通信双方之间以Json对象的形式安全的传递信息。因为数字签名的存在，这些信息是可信的，JWT可以使用HMAC算法或者是RSA的公私秘钥对进行签名。\n" +
                        "简洁(Compact): 可以通过URL，POST参数或者在HTTP header发送，因为数据量小，传输速度也很快。\n" +
                        "自包含(Self-contained)：负载中包含了所有用户所需要的信息，避免了多次查询数据库。\n" +
                        "一旦用户完成了登陆，在接下来的每个请求中包含JWT，可以用来验证用户身份以及对路由，服务和资源的访问权限进行验证。由于它的开销非常小，可以轻松的在不同域名的系统中传递，所有目前在单点登录（SSO）中比较广泛的使用了该技术。\n", "5cb1f17c80a35f37407791ee", LocalDateTime.now(), LocalDateTime.now()
                ))
                .flatMap(post -> {
                    LocalDateTime time = LocalDateTime.now();
                    Flux<Post> postFlux = postRepository.saveAll(
                        Flux
                            .just(
                                new Post(
                                    null, "user2", null,
                                    "在身份鉴定的实现中，传统方法是在服务端存储一个session，给客户端返回一个cookie，而使用JWT之后，当用户使用它的认证信息登陆系统之后，会返回给用户一个JWT，用户只需要本地保存该token（通常使用local storage，也可以使用cookie）即可。\n" +
                                        "当用户希望访问一个受保护的路由或者资源的时候，通常应该在 Authorization 头部使用 Bearer 模式添加JWT，其内容看起来是下面这样：\n" +
                                        "Authorization: Bearer <token>\n" +
                                        "因为用户的状态在服务端的内存中是不存储的，所以这是一种 无状态 的认证机制。服务端的保护路由将会检查请求头 Authorization 中的JWT信息，如果合法，则允许用户的行为。由于JWT是自包含的，因此减少了需要查询数据库的需要。\n",
                                    post.getId(), "5cb1f17c80a35f37407791ee",
                                    false, false, time, time
                                ),
                                new Post(
                                    null, "user2", null,
                                    "JWT的这些特性使得我们可以完全依赖其无状态的特性提供数据API服务，甚至是创建一个下载流服务。因为JWT并不使用Cookie的，所以你可以使用任何域名提供你的API服务而不需要担心跨域资源共享问题（CORS）。",
                                    post.getId(), "5cb1f17c80a35f37407791ee",
                                    false, false, time, time
                                ))
                    );
                    postFlux
                        .thenMany(postRepository.findAll())
                        .subscribe(System.out::println);
                    return Mono.just(post);
                }).subscribe(System.out::println);


            Flux<User> productFlux = userRepository
                .deleteAll()
                .thenMany(
                    Flux
                        .just(
                            new User("user1", passwordEncoder.encode("user1"), null, false, true, Arrays.asList(Role.ROLE_USER)),
                            new User("user2", passwordEncoder.encode("user2"), null, false, true, Arrays.asList(Role.ROLE_USER)),
                            new User("admin", passwordEncoder.encode("admin"), null, false, true, Arrays.asList(Role.ROLE_ADMIN)))
                        .flatMap(userRepository::save)
                );

//            Flux<User> productFlux = Flux.just(
//                    new User(null, "Avenger: Infinity Wars", "Action", LocalDateTime.now()),
//                    new User(null, "Gladiator", "Drama/Action", LocalDateTime.now()),
//                    new User(null, "Black Panther", "Action", LocalDateTime.now()))
//                    .flatMap(userRepository::save);

            productFlux
                .thenMany(userRepository.findAll())
                .subscribe(System.out::println);
        };
    }
}