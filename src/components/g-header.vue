/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:09:15
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:06:49
 */

<template>
  <header class="g-header">
    <!--  :style="{ width: width }" -->
    <div class="g-header__container">
      <div class="g-header__left">
        <div class="g-header__logo" @click="routeHome">
              <!-- <img class="img" src="../../assets/images/logo.png" alt="Logo"> -->
          </div>
          <div class="g-header__title">
              <!-- <div class="h1">Potato - 系统名称</div> -->
              <!-- <div class="h3">Potato - 副系统名称</div> -->
        </div>
      </div>
      <!-- 右侧处理一级导航栏和用户登录部分 -->
      <div class="g-header__right">
        <m-nav-first></m-nav-first>
        <!-- 最右边放置：用户信息 -->
        <!-- <m-user-config class="g-header__user-config"></m-user-config> -->
      </div>
    </div>
  </header>
</template>

<script>
// import MUserConfig from '@/components/m-user-config'
// import getScrollWidth from '@/assets/scripts/get-scroll-width'
import MNavFirst from '@/components/m-nav-first.vue'

export default {
  created() {
    // 进行计算当前的宽度
    // this.resize()
  },
  methods: {
    /**
     * 用于点击LOGO恢复到主页的功能
     */
    routeHome() {
      this.$router.push({
        path: '/'
      })
    }
    /**
     * 当页面触发resize事件的时候，触发此函数（不需要使用此方法）
     */
    // resize() {
    //   /**
    //    * 1.获取当前浏览器可视宽度
    //    * 2.获取当前浏览器的滚动条的宽度
    //    * 3.将差值设置为width值
    //    */
    //   let widthAll = window.innerWidth
    //   let scrollWidth = getScrollWidth()
    //   this.width = `${widthAll - scrollWidth}px`
    // }
  },
  components: {
    // MUserConfig
    MNavFirst
  }
}
</script>

<style lang="scss" scoped>
$logoSize: 50px;

.g-header{
  position: fixed;
  z-index: 10;
  width: 100%;
  background: $header-bg-color;
}
.g-header__container{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  min-width: 1250px;
  height: 100%;
}
.g-header__left{
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.g-header__logo {
  float: left;
  width: $logoSize;
  height: $logoSize;
  margin: ($top-header-height - $logoSize)/2 ($top-header-height - $logoSize)/2
    ($top-header-height - $logoSize)/2 20px;
  .img {
    height: $logoSize;
    width: $logoSize;
    cursor: pointer;
  }
}
.g-header__title{
  margin-left: 20px;
}
.g-header__right{
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.top-bar__title{
  margin-left: 20px;
}
.h1 {
  font-size: 24px;
  color: $text-light-color;
  line-height: 32px;
}

.h3 {
  font-size: 16px;
  color: $text-light-color;
}
</style>
