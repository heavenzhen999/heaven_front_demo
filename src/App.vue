<template>
  <div class="app">
    <login v-if="!hasLogin" class="app__login"></login>
    <home v-if="hasLogin" class="app__main"></home>
  </div>
</template>

<script>
import Login from '@/views/login'
import Home from '@/views/home'

export default {
  data() {
    return {
      hasLogin: true // TODO 后续修改为在 store 上的状态属性
    }
  },
  computed: {},
  beforeCreate() {},
  created() {},
  mounted() {},
  methods: {
  },
  components: {
    Login,
    Home
  }
}
</script>

<style lang="scss">
</style>
