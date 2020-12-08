module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  outputRoot: process.env.TARO_ENV === 'h5' ? 'dist_h5' : 'dist',
  mini: {},
  h5: {
  }
}
