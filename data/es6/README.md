# es6

## 目录

* [let和const](#let和const)
* [模板字符串](#模板字符串)
* [箭头函数](#箭头函数)
* [Symbol](#Symbol)


### let和const

默认使用 const,当确实需要改变变量的值的时候才使用 let

<br>

### 模板字符串

    const foo = `this is a ${example}`;

在字符串中使用反撇号

    const message = `Hello \` World`;

<br>

### 箭头函数

**箭头函数没有 this,this 绑定的就是最近一层非箭头函数的 this**

ES6 增加了箭头函数：

    const func = value => value;

相当于：

```javascript
const func = function (value) {
    return value;
};
```


<br>

### Symbol

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。

    const s = Symbol();
    console.log(typeof s); // "symbol"


### set数据结构

成员的值都是唯一的，没有重复的值

**初始化**

Set 本身是一个构造函数

    const set = new Set();

**属性和方法**

1. add(value)：添加某个值，返回 Set 结构本身。

2. delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。

3. has(value)：返回一个布尔值，表示该值是否为 Set 的成员。

4. clear()：清除所有成员，无返回值。

<br>

    const set = new Set();
    console.log(set.add(1).add(2)); // Set [ 1, 2 ]

    console.log(set.delete(2)); // true
    console.log(set.has(2)); // false

    console.log(set.clear()); // undefined
    console.log(set.has(1)); // false
