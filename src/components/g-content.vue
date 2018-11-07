/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:08:55
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 16:26:15
 */

<template>
  <div class="g-content">
    <!-- 暂不使用keepalive,具体查看性能的反馈 -->
    <router-view class="g-content_container"></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.g-content{
}
.g-content_container{
  position: relative;
  height: 100%;
  width: 100%;
}</style>
