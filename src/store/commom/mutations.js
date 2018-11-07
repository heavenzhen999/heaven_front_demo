/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:08:19
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-01 23:38:38
 * @description 状态管理 mutations 部分
 *              用于修改状态
 *
 * // 示例
 * import * as types from './mutation-types'
 *
 * const mutations = {
 *  [types.SET_TESTDATA](state, o) {
 *    state.testData = o
 *  }
 * }
 *
 * export default mutations
 *
 */
import * as types from './mutation-types'

const mutations = {
  // [types.SET_SECOND_NAV](state, o) {
  //   state.secondNav = o
  // },
  // 添加resize函数
  [types.APPEND_RESIZE_EVENT](state, o) {
    state.resizeEventSet.add(o)
  },
  // 移除resize函数
  [types.REMOVE_RESIZE_EVENT](state, o) {
    // 移除对应的函数
    if (state.resizeEventSet.has(o)) state.resizeEventSet.delete(o)
  }
}

export default mutations
