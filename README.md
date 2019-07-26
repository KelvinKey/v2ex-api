
<h1 align="center"> v2ex-api </h1>

<p align="center"> :palm_tree: 基于 V2EX API 的 node 组件.</p>


## 使用

```node
const V2exApi = require('./V2exApi');

const $v2ex = new V2exApi();
```

### 获取最热主题

```node
response = $v2ex.getHotTopics();
```

示例：
```json
[
    {
        "node":{
            "avatar_large":"//cdn.v2ex.com/navatar/9a11/5815/52_large.png?m=1562806929",
            "name":"hardware",
            "avatar_normal":"//cdn.v2ex.com/navatar/9a11/5815/52_normal.png?m=1562806929",
            "title":"硬件",
            "url":"https://www.v2ex.com/go/hardware",
            "topics":2603,
            "footer":"",
            "header":"硬件发烧友的讨论节点",
            "title_alternative":"Hardware",
            "avatar_mini":"//cdn.v2ex.com/navatar/9a11/5815/52_mini.png?m=1562806929",
            "stars":1256,
            "root":false,
            "id":52,
            "parent_node_name":"computer"
        },
        "member":{
            "username":"zgChihiro",
            "website":"",
            "github":"zgChihiro",
            "psn":"",
            "avatar_normal":"//cdn.v2ex.com/avatar/0531/ae78/232587_mini.png?m=1495762232",
            "bio":"",
            "url":"https://www.v2ex.com/u/zgChihiro",
            "tagline":"",
            "twitter":"",
            "created":1495762097,
            "avatar_large":"//cdn.v2ex.com/avatar/0531/ae78/232587_mini.png?m=1495762232",
            "avatar_mini":"//cdn.v2ex.com/avatar/0531/ae78/232587_mini.png?m=1495762232",
            "location":"",
            "btc":"",
            "id":232587
        },
        "last_reply_by":"Cloutain",
        "last_touched":1564128347,
        "title":"程序员一般都在用什么样的蓝牙耳机，",
        "url":"https://www.v2ex.com/t/586236",
        "created":1564056696,
        "content":"最近想入手一款蓝牙耳机对音质没什么要求，就是满足日常看视频即可最好无线充电，所以想问下 V 站的程序员们都在用什么样的蓝牙耳机有没有值得推荐的",
        "content_rendered":"<p>最近想入手一款蓝牙耳机</p><p>对音质没什么要求，就是满足日常看视频即可</p><p>最好无线充电，</p><p>所以想问下 V 站的程序员们都在用什么样的蓝牙耳机</p><p>有没有值得推荐的</p>",
        "last_modified":1564101595,
        "replies":79,
        "id":586236
    }
]
```

### 获取最新主题

```node
response = $v2ex.getLatestTopics();
```

示例：
> 返回结果跟 `获取最热主题` 一样

### 获取节点信息

```node
response = $v2ex.getNode("python");
```

示例：
```json
     
{
    "avatar_large":"//cdn.v2ex.com/navatar/2421/fcb1/436_large.png?m=1551072244",
    "name":"nodejs",
    "avatar_normal":"//cdn.v2ex.com/navatar/2421/fcb1/436_normal.png?m=1551072244",
    "title":"Node.js",
    "url":"https://www.v2ex.com/go/nodejs",
    "topics":1831,
    "footer":"",
    "header":"Node.js is a platform built on <a href="http://code.google.com/p/v8/" target="_blank">Chrome's JavaScript runtime</a> for easily building fast, scalable network applications.",
    "title_alternative":"Node.js",
    "avatar_mini":"//cdn.v2ex.com/navatar/2421/fcb1/436_mini.png?m=1551072244",
    "stars":2235,
    "root":false,
    "id":436,
    "parent_node_name":"js"
}
```

### 获取用户信息

根据用户名获取用户信息

```node
response = $v2ex.getMemberByUsername('kelvinkeyss');
```

根据用户 ID 获取用户信息

```node
response = $v2ex.getMemberByID(429521);
```

示例：
```json
{
    "username":"kelvinkeyss",
    "website":null,
    "github":null,
    "psn":null,
    "avatar_normal":"//cdn.v2ex.com/avatar/aac0/a860/429521_mini.png?m=1563932895",
    "bio":null,
    "url":"https://www.v2ex.com/u/kelvinkeyss",
    "tagline":null,
    "twitter":null,
    "created":1563181064,
    "status":"found",
    "avatar_large":"//cdn.v2ex.com/avatar/aac0/a860/429521_mini.png?m=1563932895",
    "avatar_mini":"//cdn.v2ex.com/avatar/aac0/a860/429521_mini.png?m=1563932895",
    "location":null,
    "btc":null,
    "id":429521
}
```

### 获取原始返回结果

方法最后一个参数为是否格式化结果，`bool` 类型 ：

```node
$response = $v2ex.getMemberByUsername('kelvinkeyss', false);
```

### 参数说明

```node
array|string getHotTopics(bool $format = true)
array|string getLatestTopics(bool $format = true)
array|string getNode(string name, bool $format = true)
array|string getMemberByUsername(string username, bool $format = true)
array|string getMemberByID(int id, bool $format = true)
```
> - name - 节点名称，比如：“nodejs”；
> - username - 用户名称，比如：“kelvinkeyss”；
> - id - 用户 ID，比如：“429521”；
> - $format - 是否格式化返回结果。

## License

MIT