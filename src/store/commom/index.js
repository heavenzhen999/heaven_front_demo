/*
 * @Author: chen zhen
 * @Date: 2018-11-01 23:11:15
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-01 23:36:28
 * @Description 通用模块的 store，次模块负责脱离于业务的部分，
 *              仅仅对页面的正常显示效果负责
 */
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'

const commonModule = {
  // 私有命名空间
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default commonModule
