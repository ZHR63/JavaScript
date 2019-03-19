# 面试

## 目录

- [this](#this)

- [call、apply、bind](#call-apply-bind)

- [前端性能优化](#前端性能优化)

- [前端内存泄漏如何避免](#前端内存泄漏如何避免)

- [从内存来看 null 和 undefined 本质的区别是什么](#从内存来看null和undefined本质的区别是什么)

### this

```javascript
// 1.默认情况下指向window 在use strict情况下为undefined
function ft() {
  console.log(this);
}

function ft2() {
  "use strict";
  console.log(this);
}

ft(); //window
ft2(); //undefined
```

```javascript
// 2.找函数前面的`.` 如果用到this的这个函数属于 context object,那么this就指向context object
var a = {
  a: 1,
  b() {
    return this;
  }
};

console.log(a.b() == a); //true

// 拓展
var a1 = {
  a: 1,
  b() {
    return this;
  }
};

var a2 = {
  a: 2,
  b() {
    return a1.b();
  }
};

console.log(a2.b() == a1); //true
```

### call-apply-bind

> 先告诉大家一个基本概念：**改变函数执行时的上下文**，在具体一点就是**改变函数运行时 this 指向**

call 和 apply 改变了什么？先上一段代码

```
function fn1() {
    console.log(1);
};
function fn2() {
    console.log(2);
};
fn1.call(fn2);
```

一定要搞清楚谁是被调用者，fn1 永远是要执行的任务，改变的只是 this 的指向，现在 this 指向 fn2,现在我要验证 this 是否指向 fn2

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

obj1 中 this.num 的值为 obj2 中 num 的值

### 前端性能优化


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

针对的是不断运行的代码，不应该使用 setTimeout，而应该是用 setInterval，因为 setTimeout 每一次都会初始化一个定时器，而 setInterval 只会在开始的时候初始化一个定时器

**3. 浮点数转换成整型**

很多人喜欢使用 parseInt()，其实 parseInt()是用于将字符串转换成数字，而不是浮点数和整型之间的转换，我们应该使用 Math.floor()或者 Math.round()

**4. 使用直接量**

`反例`

    var arr = new Array();

`好例子`

    var varr = [];

### 前端内存泄漏如何避免

**1、意外的全局变量**

**解决方法：**

在 JavaScript 文件头部加上 'use strict'，使用严格模式避免意外的全局变量

### 从内存来看 null 和 undefined 本质的区别是什么

**解答**：

给一个全局变量赋值为 null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为 null，或者局部变量赋值为 null,相当于给这个属性分配了一块空的内存，然后值为 null， JS 会回收全局变量为 null 的对象。

给一个全局变量赋值为 undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为 undefined，说明这个值为空值
