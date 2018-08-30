/*
 * @Author: chen zhen
 * @Date: 2018-06-26 14:01:18
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-30 14:47:56
 * @Description: 一些 工具方法
 */

/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
  let target
  // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
  if (attr === 'scrollTop') {
    target = element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  // 在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode === 'float' ? parseFloat(target) : parseInt(target)
}

/**
 * 时间格式化转换
 *
 * @param {Date} date 时间
 * @param {String} format 转换格式 'YYYY-MM-DD hh:mm:ss'
 */
export const format = (date, format = 'YYYY-MM-DD hh:mm:ss') => {
  const o = {
    'M+': date.getMonth() + 1, // month
    'D+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    'S': date.getMilliseconds() // millisecond
  }
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

/**
 * 判断系统
 */
export const judgeSystem = () => {
  // navigator 系统内置属性
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'Android'
  } else if (isIOS) {
    return 'IOS'
  } else {
    return 'PC'
  }
}

/**
* 对类型进行判定
* @param {*} obj // 未知参数
* @return {String} 返回值
* 示例：
* judgeType(5); // => "Number"
* judgeType({}); // => "Object"
* judgeType(/foo/); // => "RegExp"
* judgeType(''); // => "String"
* judgeType(true); // => "Boolean"
* judgeType([]); // => "Array"
* judgeType(undefined); // => "Window"
* judgeType(Element); // => "Constructor"
* judgeType(HTMLDivElement) // => "HTMLDivElement"
*/

export const judgeType = obj => {
  return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1]
}

/**
 * 从UTC时间字符串转换为本地时间
 * @param {*} UTCStr UTC时间字符串
 */
export const getLocalDateByUTC = UTCStr => {
  try {
    if (_.isNull(UTCStr) || _.isUndefined(UTCStr)) return UTCStr
    let u = new Date(UTCStr.substr(0, 23).replace('T', ' '))
    let localMilliSecond = Date.UTC(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds())
    return new Date(localMilliSecond)
  } catch (e) {
    console.error('错误的时间转换')
    console.error(UTCStr)
    return new Date()
  }
}

/**
 * 解析location.search
 * @param {String} search location.search字符串
 */
export const getMapBySearch = search => {
  let m = new Map()
  if (search.length === 0) return m
  let s = search.substring(1)
  let a = s.split('&')
  for (let i of a) {
    let o = i.split('=')
    m.set(o[0], o[1])
  }
  return m
}

/**
 * 从数组内随机进行选择
 * @param {Array} arr
 */
export const randomOne = arr => {
  if (arr.length === 0) return null
  return arr[Math.floor(Math.random() * arr.length)]
}
