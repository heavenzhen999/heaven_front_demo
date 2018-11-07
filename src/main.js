// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 垫片
import '@/assets/styles/main.scss'

// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import axios from '@/assets/js/install-axios'
import echarts from '@/assets/js/install-echarts'
import elementUI from '@/assets/js/install-element-ui.js'

import pageEvent from '@/assets/js/page-event'
import resizeMixin from '@/mixin/resizeMixin'

import _ from 'lodash'

global._ = _

// TODO 怎么能根据环境进行不引入
// require('@/../mock')

Vue.use(elementUI)
Vue.use(axios) // 修改为network
Vue.use(echarts)
Vue.mixin(resizeMixin)

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  created() {
    pageEvent.init()
  },
  beforeDestroy() {
    pageEvent.destroy()
  },
  render: h => h(App)
}).$mount('#app')
