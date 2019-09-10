# JavaScript

> 学习改变人生，习惯成就事业。

---

## 目录
- [js](https://github.com/ZHR63/JavaScript/blob/master/data/js)
- [Vue](https://github.com/ZHR63/JavaScript/blob/master/data/vue)
- [CSS](https://github.com/ZHR63/JavaScript/blob/master/data/css)
- [npm](https://github.com/ZHR63/JavaScript/blob/master/data/npm)
- [node](https://github.com/ZHR63/JavaScript/blob/master/data/node)


### window 中查找端口并关闭

**1.查找端口占用的进程信息**

    netstat  -aon|findstr  "8080"

**2.关闭 8081 对应的进程号**

![number](img/js.png)

    taskkill /pid 10940 /F
