# JavaScript

> 学习改变人生，习惯成就事业。

---

## 目录
- [GitHub](https://github.com/ZHR63/JavaScript/blob/master/data/github)
- [npm](https://github.com/ZHR63/JavaScript/blob/master/data/npm)
- [node](https://github.com/ZHR63/JavaScript/blob/master/data/node)
- [es6](https://github.com/ZHR63/JavaScript/blob/master/data/ese)
- [面试](https://github.com/ZHR63/JavaScript/blob/master/data/important)
- [WebSocket](https://github.com/ZHR63/JavaScript/blob/master/data/WebSocket)
- [http](#http)
- [window 中查找端口并关闭](#window中查找端口并关闭)

### http

`返回码`

    每次请求,都会有状态码返回,常见的状态码有:

    200,请求成功

    206,请求内容局部成功

    400,客户端请求语法错误,一般是连接地址不对

    500,服务器出现异常


### window 中查找端口并关闭

**1.查找端口占用的进程信息**

    netstat  -aon|findstr  "8080"

**2.关闭 8081 对应的进程号**

![number](img/js.png)

    taskkill /pid 10940 /F
