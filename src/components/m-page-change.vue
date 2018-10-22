/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:18:54
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 16:49:33
 * @Description: 模块选择按钮
 */

<template>
  <div class="m-page-change">
    <!-- <el-radio-group v-model="moduleType">
      <el-radio-button label="HOME">主页</el-radio-button>
      <el-radio-button label="EXAMPLE">实例</el-radio-button>
      <el-radio-button label="TOOL">工具</el-radio-button>
    </el-radio-group> -->
    <div class="m-page-change__container">
      <div :class="moduleType === 'main' ? 'm-page-change__button--active' : 'm-page-change__button'" @click="choose('main')">
        <div class="m-page-change__button-t">主页</div>
      </div>
      <div :class="moduleType === 'example' ? 'm-page-change__button--active' : 'm-page-change__button'" @click="choose('example')">
        <div class="m-page-change__button-t">实例</div>
      </div>
      <div :class="moduleType === 'tool' ? 'm-page-change__button--active' : 'm-page-change__button'" @click="choose('tool')">
        <div class="m-page-change__button-t">工具</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { CHANGE_MODULE_TYPE } from '@/store/mutation-types'

export default {
  computed: {
    ...mapGetters([
      'moduleType'
    ])
  },
  methods: {
    /**
     * 选择大模块
     * @param {String} moduleType
     */
    choose(moduleType) {
      this.$store.commit(CHANGE_MODULE_TYPE, moduleType)
    }
  }
}
</script>

<style lang="scss">
$pageChangeHeight: 50px;
.m-page-change{}
.m-page-change__container{
  display: flex;
  height: $pageChangeHeight;
}
.m-page-change__button{
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  // 添加按钮的背景效果
}
.m-page-change__button--active{
  @extend .m-page-change__button;
  @include getActiveBG();
}
</style>
