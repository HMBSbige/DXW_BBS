# API
请自行替换 `http://127.0.0.1:8080`

## 注册
URL|method|header|body example
-|-|-|-
http://127.0.0.1:8080/signup|POST|Content-Type: application/json|{"username": "test","password": "test"}

### 返回
Status|HTTP Status Code
-|-|
成功注册|201
重复注册|409

## 登录
URL|method|header|body example
-|-|-|-
http://127.0.0.1:8080/login|POST|Content-Type: application/json|{"username": "test","password": "test"}

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
登录成功|201|{"token": "$TOKEN"}
登录失败|401|-

# Usage
配置 `\src\main\resources\application.properties`

Example
```
# fvcking application.properties
# https://stackoverflow.com/questions/38775194/where-is-the-application-properties-file-in-a-spring-boot-project
#Application Configuration
#server.port=8090
#Monodb Configuration
spring.data.mongodb.database=mongodemo
#spring.data.mongodb.username=
#spring.data.mongodb.password=
spring.data.mongodb.host=127.0.0.1
spring.data.mongodb.port=27017
# https://stackoverflow.com/questions/45428826/reading-values-from-application-properties-spring-boot
springbootwebfluxjjwt.password.encoder.secret=xxxxxxx
#springbootwebfluxjjwt.password.encoder.secret=bbs_dxw_secret
springbootwebfluxjjwt.password.encoder.iteration=33
springbootwebfluxjjwt.password.encoder.keylength=256
springbootwebfluxjjwt.jjwt.secret=xxxxxxx
springbootwebfluxjjwt.jjwt.expiration=28800
```