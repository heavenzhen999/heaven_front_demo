/*
 * @Author: chen zhen
 * @Date: 2018-07-19 14:27:38
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 15:46:19
 * @Description element-ui 的安装模块，同步可以进行 按需加载 的情况
 */
import ElementUI from 'element-ui'

export default {
  install(Vue) {
    Vue.use(ElementUI)
    // 需要修改成按需引用
  }
}
