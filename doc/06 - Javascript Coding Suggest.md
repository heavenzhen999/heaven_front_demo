# Javascript Coding Suggest

> 在 Coding Notations 外，一些代码书写的建议

## **单行if语句省略括号**

``` js

if (1 === 1) {
  cosole.log('true') // ✗ avoid
}

if (1 === 1) console.log('true') // ✓ suggest

```

## **较少属性的Object可以写在一行**

``` js


let o = { // ✗ avoid
  key: 'A'
}

let o = { key: 'A', key2: 'B', key3: 'C', key4: 'D' } // ✗ avoid

let o = { key: 'A' } // ✓ suggest

let o = { // ✓ suggest
  key: 'A',
  key2: 'B',
  key3: 'C',
  key4: 'D'
}

```

## **字符串拼接优先使用 \` \`符号**

``` js

const NAME = 'HEAVEN'

console.log('Hello World! I\'m ' + NAME) // ✗ avoid
console.log(`Hello World! I'm ${NAME}`) // ✓ suggest
```

## **针对多行字符串的说明**

在某些特定时候，需要进行使用多行字符串来提高识别效果。但**不优先使用**。**不优先使用**。**不优先使用**。