# CSS Coding Notations Basic

> CSS 代码规范。

## 书写规范

- 缩进为**2个空格**
- 类名全部采用小写字母
- 可以适当的使用一些约定的单词缩写
- 合理的保证css内部的顺序
- 小数数值，省略 `0` , 即`.3rem` 或`rgba(255, 255, 255, .5)`
- 在rgba内部每个逗号后边都需要有一个空格
- 在样式的`key`与`value`之间需要有一个空格`height: 10.5px;`
- 在每行css后边，均需要书写`;`分号。不允许对最后个一分号进行省略
- 在每个类面前使用

## 命名规范

- 除特殊情况，不使用`Id`。全部使用`class`进行命名。
- TODO
- .....未完待续


- 其他详见BEM命名方案

## 注释规范

- 在css内，注释仅有一种方案。将注释内容使用`/* text-align: center; */`包裹起来即可。
- 在`/*` 与正文之间，必须要有一个**空格**，用以统一样式。
- 在正文与`*/`之间，同样需要有一个**空格**，用以统一样式。
``` CSS
.a{
  background: #fff;
  font-weight: bold;
  /* text-align: center; */
} 
```

## 命名推荐规则

|命名|英文|
| --- | --- |
| 头 | header |
| 容器 | container|
| 内容 |content |
| 尾 | footer |
| 导航 | nav |
| 侧栏 | sidebar |
| 栏目 | column |
| 页面外围控制整体布局宽度| wrapper |
| 左中右 | left center right |
| 登录条 | loginbar |
| 标志 | logo |
| 广告 | banner |
| 页面主题 | main |
| 热点 | hot |
| 新闻 | news |
| 下载 | download |
| 自导航 | subnav |
| 菜单 | menu |
| 子菜单 | submenu |
| 搜索 | search |
| 友情链接 | friendlink|
| 版权 | copyright |
| 滚动 | scroll |
| 内容 | content |
| 标签页 | tab |
| 文章列表 | list |
| 提示信息 | msg |
| 小技巧 | tips |
| 栏目标题 | title |
| 加入 | joinus |
| 指南 | guild |
| 服务 | service |
| 注册 | regsiter |
| 状态 | status |
| 投票 | vote|
