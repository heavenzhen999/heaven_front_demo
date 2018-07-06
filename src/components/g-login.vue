/*
 * @Author: chen zhen
 * @Date: 2018-04-21 14:50:09
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-06-26 16:29:29
 * @Description 登录模块
 */

<template>
  <div class="page-login no-select">
    <div class="page-login__background"></div>
    <div class="page-login__title">
      <span class="page-login__text">青岛港</span>
      <span class="page-login__subtext">气象预警管控平台</span>
    </div>
    <div class="page-login__box">
      <login-box ref="login-box"></login-box>
    </div>
  </div>
</template>

<script>
import LoginBox from '@/components/m-login-box'

export default {
  mounted() {
    // TODO 需要考虑mac的情况
    // 绑定回车事件
    document.onkeydown = this.enterEvent
  },
  beforeDestroy() {
    // TODO 需要考虑mac的情况
    // 移除回车事件
    document.onkeydown = null
  },
  methods: {
    // TODO 考虑对此方法进行向上移动
    /**
     * 对系统按键的监听操作，暂时仅在登录页监听 回车 按键
     */
    enterEvent(e) {
      if (!e) {
        e = window.event
      }
      if ((e.keyCode || e.which) === 13) {
        this.$refs['login-box'].login()
      }
    },
    /**
     * 登陆成功
     */
    loginSuccess(e) {
      this.$emit('login-success', e)
    }
  },
  components: {
    LoginBox
  }
}
</script>

<style lang="scss">
.page-login{
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.page-login__background{
  height: 100%;
  width: 100%;
  background: url('../assets/img/login-background.jpg') center 100% no-repeat;
}
.page-login__title,
.page-login__box{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.page-login__title{
  left: 14%;
  z-index: 3;
}
.page-login__subtext2{
  left: 24%;
  z-index: 3;
  margin-left: 10px;
  font-size: 32px;
  color: #fff;
}
.page-login__text{
  font-size: 42px;
  color: #FF4500;
}
.page-login__subtext{
  margin-left: 10px;
  font-size: 32px;
  color: #fff;
}
.page-login__box{
  right: 16%;
  z-index: 4;
}
</style>
