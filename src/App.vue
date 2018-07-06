<template>
  <div class="app">
    <!-- 当登录完毕之后关闭渲染登录页，开始渲染主页 -->
    <g-login v-if="false"></g-login>
    <g-container v-if="true"></g-container>
  </div>
</template>

<script>
import GLogin from '@/components/g-login'
import GContainer from '@/components/g-container'

export default {
  computed: {},
  created() {},
  mounted() {},
  components: {
    GLogin,
    GContainer
  }
}
</script>

<style lang="scss">
.app{
  height: 100%;
  width: 100%;
  background-color:  $backgroundColor;
}
</style>
