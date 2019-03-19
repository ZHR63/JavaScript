# Vue

## 目录
* [vue-devloots安装](https://www.cnblogs.com/yuqing6/p/7440549.html)
* [Vue-CLI3](#Vue-CLI3)
* [Vue-CLI3使用Vue-CLI2版本](#Vue-CLI3使用Vue-CLI2版本)
* [vue-cli3安装element-ui](https://github.com/ElementUI/vue-cli-plugin-element)
* [normalize.css](https://github.com/necolas/normalize.css)
* [Vue项目](#Vue项目)


### Vue-CLI3

**安装**

    npm install -g @vue/cli

查看版本

    vue --version

<br>    

### Vue-CLI3使用Vue-CLI2版本
    npm install -g @vue/cli-init


### Vue项目

**使用scss**

如果安装element-ui 就不需要安装下面的插件了，框架自动安装了

![scss](img/vue.png)

`安装`

    cnpm install sass-loader node-sass --save-dev

<br>

vue脚手架引入normalize.css，前提是安装sass-loader

    import 'normalize.css'



报错信息: npm install --loglevel error 

**解决方法**

    npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver

    npm cache clean --force 清除npm的缓存


**关于文本垂直居中的经验**

先给一张图,我想实现垂直居中，高度为40px

    padding: 12px 14px;

![vue2](./img/vue2.png)

但是效果图，感觉整体向上

![vue2](./img/vue3.png)

原来问题是出在这里

![vue2](./img/vue4.png)

![vue2](./img/vue5.png)

我的文本默认向上，找到问题就好解决了

    给父元素设置
    line-height: 16px;