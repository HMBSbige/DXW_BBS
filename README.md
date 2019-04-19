# 前端
https://github.com/Frozen-Troll/bbs

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

## 获取所有版块
URL|method
-|-|
http://127.0.0.1:8080/communities|GET|

### 返回举例
```
data:{"id":"5cb1f17c80a35f37407791ee","name":"main","visibility":true,"managers":["admin"]}

data:{"id":"5cb6a063bf94d44e7420aee4","name":"test","visibility":true,"managers":["admin"]}
```
Key|Value
-|-
id|版块 ID
name|版块名
visibility|是否可见
managers|管理员

## 创建版块
URL|method|header|body example
-|-|-|-
http://127.0.0.1:8080/communities|POST|Content-Type: application/json Authorization: Bearer $TOKEN|{"name":"test","managers":["admin"]}

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
创建成功|201|{"id":"5cb6a438bf94d44e7420aeea","name":"test","visibility":true,"managers":["admin"]}
创建失败|401|-

返回的数据结构和获取版块的一样

注：创建版块一定要管理员权限，其中`$TOKEN` 为管理员用户登录成功时的返回

## 修改版块属性
URL|method|header|body example
-|-|-|-
http://127.0.0.1:8080/communities/$ID|PUT|Content-Type: application/json Authorization: Bearer $TOKEN|{"visibility":true,"managers":["user","admin"]}

注：其中`$ID`为版块 ID，`$TOKEN`为管理员用户登录成功时的返回

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
修改成功|200|{"id":"5cb6a1b8bf94d44e7420aee9","name":"test","visibility":true,"managers":["admin","user"]}
修改失败|401|-

## 查看某版块的所有贴子
URL|method|说明
-|-|-|
http://127.0.0.1:8080/posts?community=$ID|GET|获取非置顶贴
http://127.0.0.1:8080/posts/top?community=$ID|GET|获取置顶贴

可选参数 `page`，获取指定页数

注：其中`$ID`为版块 ID

### 返回举例
```
data:{"id":"5cb6d920bf94d463b0ec270e","author":"user","content":"first post","parentId":null,"community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,15,43,28,209000000],"lastUpdateTime":[2019,4,17,15,43,28,209000000],"title":"first post"}

data:{"id":"5cb6d920bf94d463b0ec2712","author":"user","content":"second post","parentId":null,"community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,15,43,28,237000000],"lastUpdateTime":[2019,4,17,15,43,28,237000000],"title":"second post"}
```
Key|Value
-|-
id|贴子 ID
author|作者
content|内容
parentId|主贴
community|版块 ID
top|是否置顶
deleted|是否已被删除
initTime|创建时间
lastUpdateTime|最近发帖时间
title|标题

## 发帖
URL|method|header|body example
-|-|-|-
http://127.0.0.1:8080/posts|POST|Content-Type: application/json Authorization: Bearer $TOKEN|{"title":"$Title","content":"$String","community":"$CID"}

注：其中 `$ID` 为所要跟贴的 ID，`$Title` 为贴子标题，`$String` 为贴子内容，`$CID` 为版块 ID

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
发帖成功|201|{"id":"5cb6eec0bf94d4625804f2c1","author":"admin","content":"something","parentId":null,"community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,17,15,44,177000000],"lastUpdateTime":[2019,4,17,17,15,44,177000000],"title":"Title"}
发帖失败|401|-

## 删帖
URL|method|header
-|-|-|
http://127.0.0.1:8080/posts/$ID|DEL|Authorization: Bearer $TOKEN

注：其中`$ID`为贴子 ID, 其中`$TOKEN` 为用户登录成功时的返回

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
删除成功|200|{"id":"5cb6d920bf94d463b0ec2712","author":"user","content":"second post","parentId":null,"community":"5cb1f17c80a35f37407791ee","top":false,"deleted":true,"initTime":[2019,4,17,15,43,28,237000000],"lastUpdateTime":[2019,4,17,15,43,28,237000000],"title":"second post"}
无权限删除|401|-
找不到贴子|400|-

## 查看某个贴子
URL|method
-|-|
http://127.0.0.1:8080/posts/$ID|GET|

可选参数 `page`，获取指定页数

注：其中`$ID`为贴子 ID

### 返回举例
```
data:{"id":"5cb6d920bf94d463b0ec270f","author":"user","content":"first comment","parentId":"5cb6d920bf94d463b0ec270e","community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,15,43,28,237000000],"lastUpdateTime":[2019,4,17,15,43,28,237000000],"title":null}

data:{"id":"5cb6d920bf94d463b0ec2710","author":"user","content":"second comment","parentId":"5cb6d920bf94d463b0ec270e","community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,15,43,28,237000000],"lastUpdateTime":[2019,4,17,15,43,28,237000000],"title":null}

data:{"id":"5cb6d920bf94d463b0ec2711","author":"user","content":"third comment","parentId":"5cb6d920bf94d463b0ec270e","community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,15,43,28,237000000],"lastUpdateTime":[2019,4,17,15,43,28,237000000],"title":null}
```

## 跟贴
URL|method|header|body example
-|-|-|-
http://127.0.0.1:8080/posts/$ID|POST|Content-Type: application/json Authorization: Bearer $TOKEN|{"content": "$String"}

注：其中 `$ID` 为所要跟贴的 ID，`$String` 为所要发的内容

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
跟贴成功|201|{"id":"5cb6def5bf94d463b0ec2717","author":"test","content":"comment on something","parentId":"5cb6d920bf94d463b0ec270e","community":null,"top":false,"deleted":false,"initTime":[2019,4,17,16,8,21,651000000],"lastUpdateTime":[2019,4,17,16,8,21,651000000],"title":null}
跟贴失败|401|-

## 置顶某贴
URL|method|header
-|-|-|
http://127.0.0.1:8080/posts/top/$ID|POST|Authorization: Bearer $TOKEN

注：其中`$ID`为贴子 ID, 其中`$TOKEN` 为管理员或该版块 `MANAGER` 登录成功时的返回

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
置顶成功|200|{"id":"5cb6d920bf94d463b0ec270e","author":"user","content":"first post","parentId":null,"community":"5cb1f17c80a35f37407791ee","top":true,"deleted":false,"initTime":[2019,4,17,15,43,28,209000000],"lastUpdateTime":[2019,4,17,15,43,28,209000000],"title":"first post"}
无权限置顶|401|-
找不到贴子|404|-

## 取消置顶
URL|method|header|body example
-|-|-|-|
http://127.0.0.1:8080/posts/top/$ID|DEL|Content-Type: application/json Authorization: Bearer $TOKEN|{"community": "$CID"}

注：其中`$ID`为贴子 ID，`$TOKEN` 为用户登录成功时的返回，`$CID` 为版块 ID

### 返回
Status|HTTP Status Code|HTTP Responses example
-|-|-|
取消置顶成功|200|{"id":"5cb6eacdbf94d4625804f2be","author":"user","content":"second post","parentId":null,"community":"5cb1f17c80a35f37407791ee","top":false,"deleted":false,"initTime":[2019,4,17,16,58,53,121000000],"lastUpdateTime":[2019,4,17,16,58,53,121000000],"title":"second post"}
无权限|401|-
找不到贴子|404|-

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

## 运行 Mongo 服务器
`docker run --name=mongo -p 27017:27017 -v ~/db:/data/db -d mongo`

`~/db` 为自己的 mongo 数据存储目录

