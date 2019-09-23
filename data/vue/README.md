# vue

    构建用户界面的渐进式框架，只关注视图层

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

  - 创建

    - 创建前

      - beforeCreate 初始化事件还没有开始
    
    - 创建后

        - created 已经完成了数据观测，也就是可以使用数据

  - 挂载
    
    - 挂载前

        - beforeMount 虚拟Dom已经创建完成，即将开始渲染

    - 挂载后

        - mounted 真实的Dom挂载完毕，数据完成双向绑定

  - 更新
    
    - 更新前

        - beforeUpdate 响应式数据发生更新，虚拟dom重新渲染之前被触发
    
    - 更新后

        - updated 组件Dom已完成更新，要注意的是避免在此期间更改数据，因为这可能会导致无限循环的更新。

  - 销毁

    - 销毁前

        - beforeDestroy 进行善后收尾工作，比如清除计时器

    - 销毁后
    
        - destroyed 组件已被拆解，数据绑定被卸除，监听被移出，子实例也统统被销毁

* ### Vue 指令和用法

  - v-if (条件渲染) 表示存在与销毁

  - v-bind (绑定与销毁)

  - v-on (事件指令)

  - v-for (循环指令)

* ### 避免样式穿透 (scoped)

* ### 父子组件的数据传递

  - 父组件通过属性的形式向子组件传递一个 massage 数据，子组件通过 props 接收
    message

        - 子组件参数校验

  - 子组件通过自定义事件\$emit('事件名', 参数)传递给父组件，父组件监听子组件这个事件名

* ### keep-alive

  - 组件切换过程中，将状态保留到内存中，而不是销毁

* ### vue-loader

  - 解析 vue 文件的加载器，转换成 js 模块，并开发过程中提供热加载

* ## 导航钩子

- ## vuex

  管理页面的数据状态，提供统一数据操作

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

* 非父子组件间传值

  - 发布订阅模式/观察者模式

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
