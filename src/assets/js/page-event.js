/*
 * @Author: chen zhen
 * @Date: 2018-10-23 15:28:01
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:01:32
 * @Description: 处理事件的初始化和销毁之前的钩子事件
 */
// import store from '@/store'
// import debounce from '@/assets/js/debounce'

const init = () => {
  // 当出现resize事件的时候  进行执行
  // window.onresize = () => {
  //   for (let e of store.getters.resizeEventSet) {
  //     e()
  //   }
  // }
}

const destroy = () => {}

export default {
  init, destroy
}
