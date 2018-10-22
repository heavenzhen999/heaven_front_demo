// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 垫片
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/common.scss'

import axios from '@/assets/js/install-axios'
import echarts from '@/assets/js/install-echarts'
import elementUI from '@/assets/js/install-element-ui.js'

// TODO 怎么能根据环境进行不引入
require('@/../mock')
/* eslint-disable no-cond-assign */
if (process.env.NODE_ENV === 'development' && process.env.MOCK === true) {
  // import '@/mock'
}

Vue.use(elementUI)
Vue.use(axios)
Vue.use(echarts)

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
