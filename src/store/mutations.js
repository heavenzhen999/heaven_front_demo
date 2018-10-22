/*
 * @Author: Piscs.z
 * @Date: 2018-03-27 15:08:19
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 16:40:09
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
  [types.CHANGE_MODULE_TYPE](state, o) {
    state.moduleType = o
  }
}

export default mutations
