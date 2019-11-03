# vue

    构建用户界面的渐进式框架，核心库只关注视图层

- [初级前端面试](https://juejin.im/post/5d87985d6fb9a06add4e6ac3#heading-1)

- ### MVVM

  - model: 数据

  - View: 视图

  - ViewModel: 监听数据和改变视图

- ### Vue 优缺点

  - 优点

    - 低耦合， 可重用性，独立发开

  - 缺点

    - 不利于 SEO

- ### vue 生命周期

  [生命周期](https://blog.csdn.net/mqingo/article/details/86031260)

  - 创建

    - 创建前

      - beforeCreate 实例没有被创建之前执行

    - 创建后

      - created 数据和方法初始化完成，可以调用 methods 里的方法和 data 中的数据

  - 挂载

    - 挂载前

      - beforeMount 虚拟 Dom 已经创建完成，只是没有渲染到页面上

    - 挂载后

      - mounted 真实的 Dom 挂载完毕，y 用户可以看到页面了

  - 更新

    - 更新前

      - beforeUpdate data 中的数据是新的，页面中的数据是旧的，页面没有和最新数据同步

    - 更新后

      - updated 页面和数据同步

  - 销毁

    - 销毁前

      - beforeDestroy 进行善后收尾工作，比如清除计时器

    - 销毁后

      - destroyed 组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁

* ### Vue 指令和用法

  - v-if (条件渲染) 表示重建与销毁

  - v-show (条件渲染) 表示显示与隐藏

  - v-model (双向数据绑定)

  - v-bind (响应式作用于 DOM)

  - v-on (事件指令)

  - v-for (循环指令)

- ### 事件修饰符

  - .stop 阻止冒泡

  - .prevent 阻止默认事件

  - .once 事件只触发一次

* ### 避免样式穿透 (scoped)

* ### 父子组件的数据传递

  - 父组件通过属性的形式向子组件传递一个 massage 数据，子组件通过 props 接收
    message

        - 子组件参数校验

  - 子组件派发一个自定义事件\$emit('事件名', 参数)传递给父组件，父组件监听子组件这个事件名

* ### 非父子组件间传值

  - 发布订阅模式/观察者模式

* ### vue-loader

  - 解析 vue 文件的加载器，转换成 js 模块，并开发过程中提供热加载

* ## vue-router

  [参考](https://juejin.im/post/5d832bd75188255be3360cb6#heading-0)

  vue 的路由管理器

  - ### 组件

    - `<rouer-link>`

    - `<router-view>`

    - `<keep-alive>`

      - 将被包含的组件，状态保留到内存中，而不是销毁

  - ### 路由懒加载

    - 只有当路由被访问时才加载对应的组件

- ## vuex

  是个仓库，里面存放很多对象，管理页面的数据状态，提供统一数据操作

  - ### state

    - 存储数据，共享数据

  - ### getters

    - store 的计算属性，对状态进行过滤操作

  - ### mutations

    - 更改状态

  - ### actions

    - 异步操作，通过提交 mutation 间接更改状态

  - ### modules

    - 将 store 分割成模块

* 页面禁止滚动

  ```javascript
      // 滑动限制
      stop() {
          var mo = e => {
              e.preventDefault();
          }
          document.body.style.overflow = "hidden";
          document.addEventListener("touchmove", mo, { passive: false });
      }

      // 取消滑动限制
      move() {
          var mo = e => {
              e.preventDefault();
          }
          document.body.style.overflow = "";
          document.removeEventListener("touchmove", mo, { passive: false });
      }
  ```

- 子向父组件传参

  - 子组件通过`this.$emit(fn, props)方式将值传递给父组件`

    - `this.$emit('myData', '子组件传参')`

  - 绑定函数名 <parse @myData="parseData" />

    ```javascript
        methods: {
            parseData(data) {
                console.log(data);
            }
        }
    ```

* vue 中的插槽(slot)

* ### 虚拟 DOM

  - 用 js 模拟 DOM 结构

  - DOM 变化的对比，放在 JS 层来做

  - 提高重绘性能

  ```html
  <ul id="list">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
  </ul>
  ```

  ```javascript
  {
      tag: 'ul',
      attrs: {
          id: 'list'
      },
      children: [
          {
              tag: 'li',
              attrs: { className: 'item'},
              children: ['Item 1']
          },
          {
              tag: 'li',
              attrs: { className: 'item'},
              children: ['Item 2']
          }
      ]
  }
  ```

### `vue的key属性`


item的唯一标识

- 没有 Key 值时

  当列表的顺序发生变化，vue 为了提升性能，不会移动 dom 元素，只是更新相应的元素内容

  `弊端`:这种模式时高效的，只适用于不依赖子元素状态
