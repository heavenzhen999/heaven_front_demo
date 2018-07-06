import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   redirect: { name: 'monitor' },
    //   meta: {
    //     show: false,
    //     path: '/monitor'
    //   }
    // },
    // {
    //   path: '/index',
    //   name: 'index',
    //   redirect: { name: 'monitor' },
    //   meta: {
    //     path: '/monitor'
    //   }
    // },
    // {
    //   path: '/monitor',
    //   name: 'monitor',
    //   component: () => import(/* webpackChunkName: "monitor" */ '@/pages/monitor/index'),
    //   meta: {
    //     id: ['1'],
    //     alias: '风速统计监控'
    //   }
    // }
  ]
})
