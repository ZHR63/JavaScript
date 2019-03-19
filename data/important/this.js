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

console.log(a2.b() == a1);  //true











// var obj = {
//   a: 1,
//   fn() {
//     var a = 2;
//     return function() {
//       console.log(this.a);
//     };
//   }
// };
// var a = 3;

// obj.fn()();

// function fn1(fn) {
//   arguments[0](3, 4);
// }

// function fn2() {
//   console.log(this.length);
// }

// fn1(fn2, 1, 2, 3, 4);

// 函数直接运行，上下文window对象
