/*
 * @Author: chen zhen
 * @Date: 2018-06-12 16:15:18
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-10-23 15:08:52
 * @Description: 用来数据共享数据存储
 *               所有属性在初始值的时候都为null,
 *               如果为Array/Object的时候 在Getter部分进行转换成 [] / {}
 *
 * // 示例
 * const state = {
 *  testData: [1, 2, 3] // 用于测试的数据
 * }
 *
 * export default state
 */

const state = {
  secondNav: null, // 第二级导航信息
  resizeEventSet: new Set()
}

export default state
