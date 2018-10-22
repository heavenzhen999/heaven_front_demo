# HTML Coding Notations

> HTML代码规范。此规范与Vue结构相关，不建议单独使用。此规范主要描述为`.vue`文件内template部分内规范，不适用于默认html开发。

## 书写规范

- 如果为图片，需要使用`img`标签。但是背景图片不使用img标签
- 缩进为**2个空格**，禁止使用`Tab`进行缩进。
- 除最下级标签，均需要进行折行操作。
- 最下级标签，看内部`innerText`长度来确定是否进行折行操作。
- 除特殊计算属性样式外，进行在标签上使用style来进行设定样式。统一使用`class`进行设定。
- 不使用`id`属性，只使用`class`属性做为`css`样式的关联
- (Vue)若需要获取某个`dom`节点,使用Vue自带的ref属性进行设定
- (Vue)由于`Vue`内，在标签上会绑定很多的属性和方法，遂需要对标签进行折行操作

``` html
<el-button v-if="loginProcessState === 'SUCCESS'" 
  class="login-box__button" icon="el-icon-success"
  type="success">
  登陆成功
</el-button>
```
- (Vue)对标签上的方法进行合理排序，对Vue内置属性`v-if`/`v-for`/`v-show`等进行前置

## 使用规范




## 命名规范

- 尽量避免使用数字，,但不可位于标签的首位。eg:`<hello-world-1></hello-world-1>`
- 尽量减少层级的套用
- 统一使用英文单词（或正确缩写） + `-`中划线 + 数字的方式
- 采用“中划线命名法”,标签内部使用“-”进行分割标签内部的单词。eg: `<hello-world></hello-world>`
- 使用英文单词进行容积的编写，可以使用约定的单词缩写以减少容器的长度。(自定义标签)

## 注释规范

- 对语意化不明显的标签，进行注释描述
- tamplate内部，统一使用`<!-- 我是html部分的注释，大家合力使用 -->`进行注释。
- 在`<!--`与正文，和正文与`-->` 之间，均有**空格**进行填充
- 注释使用可以对书写的标签进行注释，增加可读性。

``` html
<div>
  <table>
    <!-- 这里是header部分 -->
    <thead>
      <tr>
        <th>header1</th>
        <th>header1</th>
      </tr>
    </thead>
    <!-- 这里是body部分 -->
    <tbody>
      <tr>
        <td>data1</td>
        <td>data2</td>
      </tr>
    </tbody>
  </table>
</div>
```