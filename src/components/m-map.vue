/*
 * @Author: chen zhen
 * @Date: 2018-11-07 16:29:14
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:49:37
 * @Description: cesium地图模块
 */
<template>
  <div class="map">
    <div ref="cesium" class="map__container" :style="{
      height: `${height}px`
    }"></div>
  </div>
</template>

<script>
import CesiumPlugins from '@/assets/plugins/cesium-plugins/CesiumPlugins'

export default {
  data() {
    return {
      cathayNebulaCesium: null,
      windowHeight: window.innerHeight,
      headerheight: document.getElementsByTagName('header')[0].offsetHeight
    }
  },
  computed: {
    height() {
      return this.windowHeight - this.headerheight
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    /**
     * 地图初始化
     */
    init() {
      // 初始化cesium
      this.cathayNebulaCesium = new CesiumPlugins({
        container: this.$refs['cesium'],
        baseLayer: 'TiandituLayerImgW',
        baseLayerPicker: true // 是否开启地图切换工具
      })
      this.cathayNebulaCesium.init()
    },
    /**
     * cesium的容器添加后会有大小的冲突，遂需要进行修改
     */
    resize() {
      this.windowHeight = window.innerHeight
      this.headerheight = document.getElementsByClassName('g-header')[0].offsetHeight
    }
  }
}
</script>

<style lang="scss">
.map,
.map__container{
  height: 100%;
  width: 100%;
}
</style>
