<template>
  <div class="app" :style="{
    width: width
  }">
    <m-logo class="app__logo"></m-logo>
    <g-header class="app__header"></g-header>
    <g-menu class="app__menu"></g-menu>
    <g-container class="app__container"></g-container>
    <!-- //TODO 添加一个 sidebar -->
    <g-footer class="app__footer"></g-footer>
  </div>
</template>

<script>
import MLogo from '@/components/m-logo'
import GHeader from '@/components/g-header'
import GFooter from '@/components/g-footer'
import GMenu from '@/components/g-menu'
import GContainer from '@/components/g-container'
import getScrollWidth from '@/assets/js/get-scroll-width'

export default {
  data() {
    return {
      width: '100%'
    }
  },
  computed: {},
  beforeCreate() {},
  created() {
    // 进行计算当前的宽度
    this.resize()
    // 绑定到resize内部
  },
  mounted() {},
  methods: {
    /**
     * 当页面触发resize事件的时候，触发此函数
     */
    resize() {
      /**
       * 1.获取当前浏览器可视宽度
       * 2.获取当前浏览器的滚动条的宽度
       * 3.将差值设置为width值
       */
      let widthAll = window.innerWidth
      let scrollWidth = getScrollWidth()
      this.width = `${widthAll - scrollWidth}px`
    }
  },
  components: {
    MLogo,
    GHeader,
    GFooter,
    GMenu,
    GContainer
  }
}
</script>

<style lang="scss">
.app{
  position: absolute;
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: $menuWidth auto;
  grid-template-rows: $headerHeight auto $footerheight;
  grid-template-areas: "logo header"
                       "menu container"
                       "footer footer";
  grid-gap: 8px 6px;
}
.app__logo{
  grid-area: logo;
}
.app__header{
  grid-area: header;
}
.app__menu{
  grid-area: menu;
}
.app__container{
  grid-area: container;
}
.app__footer{
  grid-area: footer;
}
</style>
