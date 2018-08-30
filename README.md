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

### HTML

- HTML 语义化(详见doc/Semantic HTML.md)
- HTML 代码规范(详见doc/HTML Coding Notations.md)

### Javascript

- Javascript 代码规范

### Css

命名书写规范采用BEM + 命名范围的方式进行处理。
