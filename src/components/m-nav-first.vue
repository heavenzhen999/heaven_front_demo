/*
 * @Author: chen zhen
 * @Date: 2018-10-18 10:09:47
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 15:01:45
 * @Description: 一级导航对应的位置
 */

<template>
  <div class="m-nav-first">
    <div v-for="(item, index) of firstNav" :key="index" 
      :class="['m-nav-first__module', {'is-active':isActive(item)}]" 
       @click="pushRoute(item.path)">
      {{item.label}}
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      firstNav: []
    }
  },
  mounted() {
    // 初始化从router中获取一级导航页
    this.getFirstnav()
  },
  methods: {
    /**
     * 初始化获取router中的一级导航页
     */
    getFirstnav() {
      this.firstNav = this.$router.options.routes
        .filter(i => !_.isUndefined(i.props) && !_.isUndefined(i.props.label))
        .map(i => {
          return {
            path: i.path,
            name: i.name,
            label: i.props.label
          }
        })
    },
    /**
     * 跳转到对应的Route的效果
     * @param {String} routePath 路由路径
     */
    pushRoute(routePath) {
      this.$router.push(routePath)
    },
    isActive(item) {
        let matched = this.$route.matched || [{ 'path': '' }]
        return matched.filter(m => m.path === item.path).length > 0
    }
  }
}
</script>

<style lang="scss">
.m-nav-first{
  display: flex;
  justify-content: start;
  line-height: $top-header-height;
  color: $text-light-color;
  font-size: 1.3rem;
}
.m-nav-first__module{
  padding: 0 10px;
  cursor: pointer;
  &:hover,
  &.is-active {
    background: $color-primary-assist;
  }
}
</style>
