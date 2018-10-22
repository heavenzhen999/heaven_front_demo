/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:08:45
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 16:14:24
 */

<template>
  <div class="g-menu">
    <!-- 三个按钮 -->
    <page-change></page-change>
    <!-- 多个子菜单 -->
    <menu-ul></menu-ul>
  </div>
</template>

<script>
import PageChange from '@/components/m-page-change'
import MenuUl from '@/components/m-menu-ul'

export default {
  computed: {},
  components: {
    PageChange,
    MenuUl
  }
}
</script>

<style lang="scss">
.g-menu{}
</style>
