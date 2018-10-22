/*
 * @Author: chen zhen
 * @Date: 2018-06-17 11:09:04
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-08-09 16:06:18
 */

<template>
  <footer class="g-footer">
    <div class="g-footer__content">
      <div class="g-gooter__t" title="作者">陈震</div>
      <div class="g-gooter__t" title="邮箱">heavenzhen999@163.com</div>
      <div class="g-gooter__t" title="手机号">18722493286</div>
      <div class="g-gooter__t" title="QQ">QQ 610145650</div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.g-footer{}
.g-footer__content{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: $fontColor--l;
}
.g-gooter__t{
  margin: 0 2px;

}
</style>
