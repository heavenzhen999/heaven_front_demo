/*
 * @Author: chen zhen
 * @Date: 2018-11-07 14:28:30
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:24:25
 * @Description: 楼宇经济
 */

<template>
  <div class="building-economy">
    <m-page-template @map-loaded="maploaded">
      <template slot="sidebar-left">
        楼宇经济
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
