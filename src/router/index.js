import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'OverallSituation' }
    },
    {
      path: '/index',
      redirect: { name: 'OverallSituation' }
    },
    {
      path: '/overall',
      name: 'OverallSituation',
      component: () => import(/* webpackChunkName: "views" */ '@/views/overall-situation'),
      props: {
        label: '整体态势'
      }
    },
    {
      path: '/building',
      name: 'BuildingEconomy',
      component: () => import(/* webpackChunkName: "views" */ '@/views/building-economy'),
      props: {
        label: '楼宇经济'
      }
    },
    {
      path: '/equipment',
      name: 'EquipmentManage',
      component: () => import(/* webpackChunkName: "views" */ '@/views/equipment-manage'),
      props: {
        label: '设备管理'
      }
    },
    {
      path: '/energy',
      name: 'EnergyManage',
      component: () => import(/* webpackChunkName: "views" */ '@/views/energy-manage'),
      props: {
        label: '能耗管理'
      }
    },
    {
      path: '/security',
      name: 'SecurityManage',
      component: () => import(/* webpackChunkName: "views" */ '@/views/security-manage'),
      props: {
        label: '安防管理'
      }
    },
    {
        path: '*',
        name: '404',
        component: () => import(/* webpackChunkName: "views" */ '@/components/g-404'),
    }
  ]
})
