# vue

- 页面禁止滚动

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

    

    







