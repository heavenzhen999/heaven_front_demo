/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:00:00
 * @Last Modified by: Piscs.z
 * @Last Modified time: 2018-03-28 10:46:41
 * @description 状态管理部分入口
 */

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations
})
