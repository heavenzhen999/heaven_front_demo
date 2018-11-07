/*
 * @Author: chen zhen
 * @Date: 2018-11-07 15:53:52
 * @Last Modified by: chen zhen
 * @Last Modified time: 2018-11-07 15:54:26
 * @Description: vue 配置文件
 */
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/assets/styles/variables.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
