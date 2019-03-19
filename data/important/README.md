# 面试

## 目录

- [new](#new)

- [this](#this)

- [前端性能优化](#前端性能优化)

- [前端内存泄漏如何避免](#前端内存泄漏如何避免)

- [从内存来看 null 和 undefined 本质的区别是什么](#从内存来看null和undefined本质的区别是什么)

### this

`《JavaScript 高级程序设计》 this对象在运行时基于函数的执行环境绑定的，在在全局函数中，this 等于 windows，而当函数被作为某个对象的方法调用时，this 等于那个对象。`

```javascript
// 1.普通函数调用，默认指向window 在use strict情况下为undefined
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
// 2.作为对象的方法调用， 如果用到this的这个函数属于 context object,那么this就指向context object
var a = {
  a: 1,
  b() {
    return this.a;
  }
};

console.log(a.b());

// 拓展
var a1 = {
  a: 1,
  b: {
    a: 2,
    fn() {
      return this.a;
    }
  }
};

// 这是this指向的是对象b
console.log(a1.b.fn()); // 2
```

```javascript
// 强化题
var a = 1;
var a2 = {
  a: 2,
  b: {
    a: 3,
    fn() {
      return this.a;
    }
  }
};
var c = a2.b.fn;
console.log(c()); // 1

`解析`;
// this 指向的是最后调用它的对象
// 先赋值给c
// 执行c时，相当于window.c();

var b = 3;
var obj = {
  b: 1,
  fn() {
    var b = 2;
    return function() {
      console.log(this.b);
    };
  }
};
obj.fn()(); // 3

`解析`;
// 先执行 obj.fn() 返回一个函数
// 最后执行这个函数,但这个函数最后的调用是window
```

### 前端性能优化

**1.避免全局查找**

基本概念：访问局部变量的速度要比访问全局变量的速度更快些

```javascript
`反例`
function fun() {
  console.log(window.location.href + window.location.host);
}

`好例子`;
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
```javascript
`反例`
var arr = new Array();

`好例子`
var varr = [];
```

### 前端内存泄漏如何避免

**1、意外的全局变量**

**解决方法：**

在 JavaScript 文件头部加上 'use strict'，使用严格模式避免意外的全局变量

### 从内存来看 null 和 undefined 本质的区别是什么

**解答**：

给一个全局变量赋值为 null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为 null，或者局部变量赋值为 null,相当于给这个属性分配了一块空的内存，然后值为 null， JS 会回收全局变量为 null 的对象。

给一个全局变量赋值为 undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为 undefined，说明这个值为空值
