# JavaScript

> 学习改变人生，习惯成就事业。

---

## 目录
- [GitHub](https://github.com/ZHR63/JavaScript/blob/master/data/github)
- [VUE](https://github.com/ZHR63/JavaScript/blob/master/data/vue)
- [npm](https://github.com/ZHR63/JavaScript/blob/master/data/npm)
- [node](https://github.com/ZHR63/JavaScript/blob/master/data/node)
- [es6](https://github.com/ZHR63/JavaScript/blob/master/data/ese)
- [面试](https://github.com/ZHR63/JavaScript/blob/master/data/important)
- [WebSocket](https://github.com/ZHR63/JavaScript/blob/master/data/WebSocket)


### window 中查找端口并关闭

**1.查找端口占用的进程信息**

    netstat  -aon|findstr  "8080"

**2.关闭 8081 对应的进程号**

![number](img/js.png)

    taskkill /pid 10940 /F
