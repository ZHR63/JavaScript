# WebSocket 详解

> **双向通信协议，持久化的协议**，允许服务端主动向客户端推送数据


## 传统轮询(Traditional Polling)

```javascript
setInterval(function() {
    $.get("/path/to/server", function(data, status) {
        console.log(data);
    });
}, 10000);
```

**缺陷**

在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过10秒，而请求是以10秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致。于是出现了采用 setTimeout 的轮询方式：

```javascript
function poll() {
    setTimeout(function() {
        $.get("/path/to/server", function(data, status) {
            console.log(data);
            // 发起下一次请求
            poll();
        });
    }, 10000);
}
```
当数据返回后再隔10秒发起第二次请求


## nodejs+websocket实时聊天

    https://www.cnblogs.com/sulishibaobei/p/6872132.html

1.引入[nodejs-websocket](https://www.npmjs.com/package/nodejs-websocket)

    npm isntall -g nodejs-websocket

