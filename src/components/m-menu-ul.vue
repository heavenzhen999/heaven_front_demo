/*
 * @Author: chen zhen
 * @Date: 2018-08-09 16:13:36
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 16:13:36s
 * @Description 一个用来显示当前菜单的项
 */

<template>
  <div class="m-menu-ul">
    <ul class="m-menu-ul__container m-menu-ul__ul">
      <li class="m-menu-ul__li" v-for="(item, index) of textMenuInfo" :key="index">
        <div class="m-menu-ul__li-t">{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textMenuInfo: [
        { name: '测试1', value: 1 },
        { name: '测试2', value: 2 },
        { name: '测试3', value: 3 },
        { name: '测试4', value: 4 },
        { name: '测试5', value: 5 },
        { name: '测试6', value: 6 },
        { name: '测试7', value: 7 },
        { name: '测试8', value: 8 },
        { name: '测试9', value: 9 },
        { name: '测试10', value: 10 },
        { name: '测试11', value: 11 },
        { name: '测试12', value: 12 },
        { name: '测试13', value: 13 }
      ]
    }
  }
}
</script>

<style lang="scss">
.m-menu-ul{}
.m-menu-ul__ul{
}
.m-menu-ul__li{
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
