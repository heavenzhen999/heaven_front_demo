/*
 * @Author: chen zhen
 * @Date: 2018-05-15 15:39:58
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-05-15 15:40:46
 * @Description echarts
 */

import echarts from 'echarts'

export default {
  install(Vue) {
    Vue.prototype.$echarts = echarts
    Vue.echarts = echarts
  }
}
