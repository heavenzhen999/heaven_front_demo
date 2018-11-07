module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  globals: {
    Cesium: true,
    _: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 方法前空格移除
    'space-before-function-paren': ["error", "never"]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
