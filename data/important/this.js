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

`解答`;
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

// `解析`
// 先执行 obj.fn() 返回一个函数
// 最后执行这个函数,但这个函数最后的调用是window

// function fn1(fn) {
//   arguments[0](3, 4);
// }

// function fn2() {
//   console.log(this.length);
// }

// fn1(fn2, 1, 2, 3, 4);

// 函数直接运行，上下文window对象
