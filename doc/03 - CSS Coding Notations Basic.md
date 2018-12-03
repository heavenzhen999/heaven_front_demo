# CSS Coding Notations Basic

> CSS 代码规范。

## 细则

* **使用两个空格**进行缩进。

``` css
body {
  margin: 0;
  font-size: 16px;
}
```

* **css规则使用合理的排序顺序**

``` css

```

* **不允许使用超过3层的选择器**

```
.table .body .th .td {           // ✗ avoid
  color: red;
}

.table .name-td {           // ✗ avoid
  color: red;
}
```

* **class使用小写字母+中划线命名**

``` css
.tableHeader {         // ✗ avoid
  color: #444;
}
.tablebody {           // ✗ avoid
  color: #444;
}

.table-header {        // ✓ ok
  color: #444;
}
.table-body {          // ✓ ok
  color: #444;
}
```

* **优先使用class**

对于样式的设定，均使用`class`进行设定。`id`属性仅在`js`调用该DOM的时候进行设定。

* **class可以似乎用约定的单词缩写**

* **css注释**

在注释标记与注释体均有一个空格进行分割

```css
.a {                            // ✗ avoid
  background: #fff;
  font-weight: bold;
  /*text-align: center;*/
} 

.a {                            // ✓ ok
  background: #fff;
  font-weight: bold;
  /* text-align: center; */
} 
```

* **css小数**

小于1的小数**0**统一不进行缩写

``` css 
color: rgba(255, 255, 255, .5)  // ✗ avoid

color: rgba(255, 255, 255, .5)  // ✓ ok
```

* **rgba内每个逗号后都有一个空格**

* **每个css样式的key与value之间均存在一个空格**

``` css 
height:10px;   // ✗ avoid

height: 10px;  // ✓ ok
```

* **每行css规则后边均需要有一个分号**

``` css
.a {                            // ✗ avoid
  background: #fff;
  font-weight: bold
}

.a {                            // ✓ ok
  background: #fff;
  font-weight: bold;
}
```

* **优先使用精简写法**

``` css

.table {                            // ✗ avoid
  margin-top: 10px;
  margin-right: 12px;
  margin-bottom: 14px;
  margin-left: 16px;
}

.table{                            // ✓ ok
  margin: 10px 12px 14px 16px;
}
```