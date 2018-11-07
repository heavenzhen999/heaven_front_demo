/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:00:00
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:45:15
 * @description 状态管理部分入口
 */

import Vue from 'vue'
import Vuex from 'vuex'

import common from './commom'

import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  },
  actions,
  state,
  getters,
  mutations
})
