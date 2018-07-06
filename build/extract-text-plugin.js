/*
 * @Author: chen zhen 
 * @Date: 2018-04-21 13:49:45 
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-04-21 13:50:40
 * @Description 对 `ExtractTextPlugin` 插件进行分别设置
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractApp = new ExtractTextPlugin('static/css/[name].[contenthash].css')
const extractCommon = new ExtractTextPlugin('static/css/common.[contenthash].css')

module.exports = { extractApp, extractCommon }
