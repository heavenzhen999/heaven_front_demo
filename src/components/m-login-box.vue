/*
 * @Author: chen zhen
 * @Date: 2018-04-23 08:52:14
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-07-02 11:32:24
 * @Description 登陆模块表单部分
 */

<template>
  <div class="login-box">
    <div class="login-box__title">欢迎您</div>
    <el-input class="login-box__input" ref="username-input"
      placeholder="请输入用户名"
      v-model="username"
      clearable>
    </el-input>
    <el-input class="login-box__input"
      placeholder="请输入密码" type="password"
      v-model="password"
      clearable>
    </el-input>
    <!-- loginState的数值去查看const-value -->
    <el-button v-if="loginProcessState === 'DEFAULT'" class="login-box__button" type="primary"
      @click="login" :loading="loading">
      {{buttonText}}
    </el-button>
    <el-button v-if="loginProcessState === 'SUCCESS'" class="login-box__button" icon="el-icon-success" type="success">登陆成功</el-button>
    <el-button v-if="loginProcessState === 'UNSUCCESS'" class="login-box__button" icon="el-icon-error" type="danger">登陆失败，用户名或密码错误！</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: null, // 用户用户名
      password: null, // 用户密码
      loading: false // 显示处于登录的状态
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
.login-box{
  position: relative;
  width: 300px;
}
.login-box__title,
.login-box__input,
.login-box__button{
  margin: 16px 0;
}
.login-box__title{
  font-size: 20px;
  color: #fff;
  text-align: center;
}
.login-box__button{
  width: 100%;
}
</style>
