// const path = require('path')
import path from 'path'

const config = {
  projectName: 'taroRedux',
  date: '2020-12-7',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    outputRoot: process.env.TARO_ENV === 'h5' ? 'dist_h5' : 'dist' // 如果是h5,打包后文件放在dist_h5
    // webpackChain (chain) {
    //   console.log('chain>>>', chain.output.store.get('path'))
    //   // chain.plugin('analyzer')
    //   // .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
    // }
  }
}
//   TARO_ENV: 'weapp'

const envAry = ['dev', 'test', 'sit', 'pre']
module.exports = function (merge) {
  console.log('process.env.NODE_ENV>>', process.env.NODE_ENV)
  console.log('process.env.TARO_ENV>>>', process.env.TARO_ENV)
  const currentNodeEnv = process.env.NODE_ENV
  if (envAry.includes(currentNodeEnv)) {
    return merge({}, config, require(`./${currentNodeEnv}`))
  }
  // if(process.env.NODE_ENV === 'development') {
  //   return merge({}, config, require('./dev'))
  // }
  return merge({}, config, require('./prod'))
}

