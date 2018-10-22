/*
 * @Author: chen zhen
 * @Date: 2018-05-15 15:39:58
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 15:46:32
 * @Description echarts
 */

/**
 * 在
 * http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts
 * 进行 Echarts的按需引用，减少引用大小
 */

import echarts from 'echarts'

export default {
  install(Vue) {
    Vue.prototype.$echarts = echarts
    Vue.echarts = echarts
    // 需要修改成按需引用
  }
}
