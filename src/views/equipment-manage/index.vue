/*
 * @Author: chen zhen
 * @Date: 2018-11-07 14:29:38
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:24:43
 * @Description: 设备管理
 */

<template>
  <div class="building-economy">
    <m-page-template @map-loaded="maploaded">
      <template slot="sidebar-left">
        设备管理
      </template>
    </m-page-template>
  </div>
</template>

<script>
import MPageTemplate from '@/components/m-page-template'

export default {
  methods: {
    /**
     * 地图加载完成
     * TODO 填写对应的参数
     */
    maploaded() {}
  },
  components: {
    MPageTemplate
  }
}
</script>

<style lang="scss">
</style>
