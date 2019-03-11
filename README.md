# JavaScript

自己在项目中积累的一些经验

-------------

## 目录

* [npm总结](https://github.com/ZHR63/JavaScript/blob/master/data/data-npm.md)
* [node使用总结](https://github.com/ZHR63/JavaScript/blob/master/data/node/node.md)
* [计算数组的极值](#计算数组的极值)
* [数组排序](#数组排序)
* [js中call、apply、bind](#js中call-apply-bind)
* [前端性能优化](#前端性能优化)
* [前端内存泄漏如何避免](#前端内存泄漏如何避免)
* [从内存来看 null 和 undefined 本质的区别是什么](#从内存来看null和undefined本质的区别是什么)
* [window中查找端口并关闭](#window中查找端口并关闭)




### 计算数组的极值

```
var arr = [1, -1, 30, 7, -99, 0];

function smallArr(array) {
    return Math.min.apply(Math, array);
}

function largeArr(array) {
    return Math.max.apply(Math, array);
}

smallArr(arr); // -99
largeArr(arr); // 30
```


### 数组排序
> sort()对数组的元素进行排列

```
var arr = [1, 2, -1, 0, 89, -16];
arr.sort(function(a,b) {
    return a - b;
});
// 从大到小 b - a
console.log(arr);
```



### js中call-apply-bind

> 先告诉大家一个基本概念：**改变函数执行时的上下文**，在具体一点就是**改变函数运行时this指向**

call和apply改变了什么？先上一段代码
```
function fn1() {
    console.log(1);
};
function fn2() {
    console.log(2);
};
fn1.call(fn2);
```

一定要搞清楚谁是被调用者，fn1 永远是要执行的任务，改变的只是this的指向，现在this指向fn2,现在我要验证this是否指向fn2

```
var obj1 = {
    num : 20,
    fn : function(n){
        console.log(this.num+n);
    }
};
var obj2 = {
    num : 15,
    fn : function(n){
        console.log(this.num-n);
    }
};
obj1.fn.call(obj2,10);//25
```
obj1中this.num的值为obj2中num的值



### 前端性能优化
> 在今天网速这么高的时代，为什么还要性能优化，我之前很不理解，就算性能做的再好，在高流量下，也最多会提升百分之一，这是我之前的想法，但是当我接了一个与硬件对接的项目时，彻底傻眼了，终于感觉到性能的重要性。首先硬件简直了，一运行我的项目，就闪退或者停止运行，测试好久，才发现硬件对性能的要求极为苛刻，让我重新审视了下前端，以下是我从项目中学到的

**1.避免全局查找**

先告诉大家一个基本概念：访问局部变量的速度要比访问全局变量的速度更快些

`反例`

```
function fun() {
    console.log(window.location.href + window.location.host);
}
```

`好例子`   
```
function fun() {
    var location = window.location;
    console.log(location.href + location.host);
}
```

**2. 定时器**

针对的是不断运行的代码，不应该使用setTimeout，而应该是用setInterval，因为setTimeout每一次都会初始化一个定时器，而setInterval只会在开始的时候初始化一个定时器

**3. 浮点数转换成整型**

很多人喜欢使用parseInt()，其实parseInt()是用于将字符串转换成数字，而不是浮点数和整型之间的转换，我们应该使用Math.floor()或者Math.round()

**4. 使用直接量**

`反例`

    var arr = new Array();

`好例子`

    var varr = [];




### 前端内存泄漏如何避免

**1、意外的全局变量**

**解决方法：**

在 JavaScript 文件头部加上 'use strict'，使用严格模式避免意外的全局变量





### 从内存来看null和undefined本质的区别是什么

**解答**：

给一个全局变量赋值为null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为null，或者局部变量赋值为null,相当于给这个属性分配了一块空的内存，然后值为null， JS会回收全局变量为null的对象。

给一个全局变量赋值为undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为undefined，说明这个值为空值



### window中查找端口并关闭

**1.查找端口占用的进程信息**

    netstat  -aon|findstr  "8080"

**2.关闭8081对应的进程号**

    taskkill /pid 8081 /F