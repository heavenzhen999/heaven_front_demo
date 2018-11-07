/*
 * @Author: chen zhen
 * @Date: 2018-11-07 14:30:44
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:02:02
 * @Description: 系统主页
 */
<template>
  <div class="home">
    <g-header class="home__header"></g-header>
    <g-content class="home__content"></g-content>
  </div>
</template>

<script>
import GHeader from '@/components/g-header'
import GContent from '@/components/g-content'

// 此屏不进行滚动，不添加此功能
// import getScrollWidth from '@/assets/js/get-scroll-width'

export default {
  components: {
    GHeader,
    GContent
  }
}
</script>

<style lang="scss">
.home{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: $top-header-height auto;
  grid-template-areas: "header"
                       "content";
}
.home__header{
  grid-area: header;
}
.home__content{
  grid-area: content;
}
</style>
