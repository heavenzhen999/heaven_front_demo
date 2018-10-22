/*
 * @Author: chen zhen
 * @Date: 2018-06-22 15:10:52
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 15:45:42
 * @Description: 将axios 绑定到 vue 上
 */
import _axios from 'axios'

export default {
  install(Vue) {
    Vue.prototype.$axios = _axios
    Vue.axios = _axios
  }
}

// 向外暴露，单独引用axios
export const axios = _axios
