# JavaScript

自己在项目中记录积累的

-------------

## 目录

* [前端性能优化](*前端性能优化)



### 前端性能优化

> 在今天网速这么高的时代，为什么还要性能优化，我之前很不理解，就算性能做的再好，在高流量下，也最多会提升百分之一，这是我之前的想法，但是当我接了一个与硬件对接的项目时，彻底傻眼了，终于感觉到性能的重要性。首先硬件简直了，一运行我的项目，就闪退或者停止运行，测试好久，才发现硬件对性能的要求极为苛刻，让我重新审视了下前端，以下是我从项目中学到的

####  1.避免全局查找

先告诉大家一个基本概念：访问局部变量的速度要比访问全局变量的速度更快些

反例

```
function fun() {
    console.log(window.location.href + window.location.host);
}
```

好例子

```
function fun() {
    var location = window.location;
    console.log(location.href + location.host);
}
```

