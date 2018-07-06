'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK: true // 使用mock，同时还会影响到const-value内部接口的常量值
})
