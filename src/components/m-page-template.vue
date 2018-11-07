/*
 * @Author: chen zhen
 * @Date: 2018-11-07 16:07:58
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:33:39
 * @Description: 一个用来嵌套 下方一个地图，上方两个门帘的模版
 */
<template>
  <div class="page-template">
    <m-map class="page-template__map" @map-loaded="maploaded"></m-map>
    <div class="page-template__sidebar page-template__sidebar--left">
      <slot name="sidebar-left"></slot>
    </div>
    <div class="page-template__sidebar page-template__sidebar--right">
      <slot name="sidebar-right"></slot>
    </div>
  </div>
</template>

<script>
import MMap from '@/components/m-map'

export default {
  methods: {
    /**
     * 地图加载完成钩子
     */
    maploaded(...arg) {
      this.$emit('map-loaded', ...arg)
    }
  },
  components: {
    MMap
  }
}
</script>

<style lang="scss">
.page-template,
.page-template__map{
  position: relative;
  height: 100%;
  width: 100%;
}
.page-template__sidebar{
  position: absolute;
  top: 0;
  height: 100%;
  width: $sidebar-width;
  background: $sidebar-bg-color;
}
.page-template__sidebar--left{
  left: 0;
}
.page-template__sidebar--right{
  right: 0;
}
</style>
