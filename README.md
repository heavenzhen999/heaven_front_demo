# heaven_front_demo

> 此项目为个人前端初始化包

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 技术栈

| 库 | 描述 |
| --- | --- |
|Vue.js|前端Mvvm|
|Vuex|前端数据Store|
|Vue-router|前端路由|
|element-ui|基于Vue.js的UI库|
|axios|数据请求处理库|
|font-awesome|字体图标库，此处用于扩展element-ui内部图标不全的问题|
|lodash|工具方法库|
|normalize.css|css样式初始化库|
|mockjs|前端数据模拟库|
|echarts|图标库|
|sass|css演示预编译|
|babel|javascript编译|
|Nightwatch|整体测试|
|jest|单元测试|

## 目录结构

```
build 打包
config 打包设置
node_modules npm/yarn 安装的库
src 主要内容代码
src/assets 资源代码
src/assets/const-value 常量数据
src/assets/css 系统样式（主要为默认样式）
src/assets/img 引入图片
src/assets/js 引用脚本文件
src/assets/scss sass 文件
src/assets/svg 一些svg 图片
src/assets/utils 一些工具方法代码
src/components 通用模块
src/mock 虚拟数据
src/pages 主要的业务代码
src/router 路由
src/store 数据store
src/app.vue 入口/主.vue文件
src/main.js 入口文件
static 静态资源文件
test 测试目录

favicon.ico 网站ico
index.html 主页面
```

## 组建模块化

## 命名规范

<<<<<<< HEAD
### 文件命名

- 文件命名(详见doc/document Naming.md)

=======
>>>>>>> 05f327bfe15f2941f75f0bd600168164b85627a5
### HTML

- HTML 语义化(详见doc/Semantic HTML.md)
- HTML 代码规范(详见doc/HTML Coding Notations.md)
<<<<<<< HEAD
- Meta 标签
- 文件引用说明
=======
>>>>>>> 05f327bfe15f2941f75f0bd600168164b85627a5

### Javascript

- Javascript 代码规范
<<<<<<< HEAD
- Javascript 示例推荐

### Css

CSS规范采用BEM + 命名空间的方式进行处理。

（可以学习一下SMAcss/Object-Oriented CSS）

- CSS 命名空间(详见doc/CSS Name Scope.md)
- CSS 基础规范(详见doc/CSS Coding Notations Basic.md)
- Scss 使用规范
- BEM 命名规范
- 图片格式选用规范

？？？
用png图片做图片时, 要求图片格式为png-8格式,若png-8实在影响图片质量或其中有半透明效果, 请为ie6单独定义背景:

background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=crop, src=’img/bg.png’);


### Vue

- Vue 使用规范


<!-- 学习一下 vue 的自定义指令 -->
<!-- HTTP 规范 ，哪里可以查到 -->
<!-- 可以使用 indexedDB座位 localStroge的扩展， 而且当前有也可以对 localStroge的数据进行保存，例如，对 group和 port 和 company的数据进行localstroge的数据保存 -->


<!-- 
一个兼容CMD、AMD、普通引用方法的接口

(function (factory) {

    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports) {
            window.Orienter = factory(exports);
        });
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        window.Orienter = factory({});
    }

}(function (Orienter) {
    ……
    ……
}

 -->
=======

### Css

命名书写规范采用BEM + 命名范围的方式进行处理。
>>>>>>> 05f327bfe15f2941f75f0bd600168164b85627a5
