/*
 * @Author: chen zhen
 * @Date: 2018-10-23 15:00:01
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:45:44
 * @Description: 进行重置大小的事件插拔
 */
import {
  APPEND_RESIZE_EVENT,
  REMOVE_RESIZE_EVENT
} from '@/store/commom/mutation-types'

const mixin = {
  mounted() {
    if (_.isFunction(this.resize)) this.$store.commit(APPEND_RESIZE_EVENT, this.resize.bind(this))
  },
  beforeDestroy() {
    if (_.isFunction(this.resize)) this.$store.commit(REMOVE_RESIZE_EVENT, this.resize.bind(this))
  }
}

export default mixin
