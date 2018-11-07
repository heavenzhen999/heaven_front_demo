/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:09:04
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 14:55:02
 */

<template>
  <footer class="g-footer">
    <slot name="before"></slot>
    <div class="g-footer__content">
      开发团队： Potato团队
    </div>
    <slot name="after"></slot>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.g-footer__content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
