import Taro from "@tarojs/taro";
import moment from 'moment'
/**
 * @description 获取当前页url
 */
// Taro.getStorage({
//   key: 'sjtoken'
// })
// Taro.setStorage({ key: 'sjtoken', data: '123124' })
// Taro.getStorageSync('sjtoken')
// Taro.removeStorageSync('sjtoken')

export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}

export const pageToLogin = () => {
  let path = getCurrentPageUrl()
  if (!path.includes('login')) {
    Taro.navigateTo({
      url: "/pages/login/indx"
    });
  }
}

export const getEnv = () => {
  let env = process.env.NODE_ENV
  if (env === 'development') {
    return 'dev'
  } else if (env === 'testEnv') {
    return 'test'
  }
  return env
}

export const getBaseUrl = (apiName?: string) => {
  if (apiName && apiName.includes('/mock') && !apiName.includes('/mock/api')) {
    return 'http://yapi.ypsx-internal.com' + apiName
  }
  if (apiName && apiName.includes('/mock/api')) {
    return window.location.origin + apiName
  }
  let baseURL = 'https://apigw.ypshengxian.com/request'
  const env = getEnv()
  if (env && env !== 'production') {
    baseURL = `https://apigw-${env}.ypshengxian.com/request`
  }
  return baseURL
}

export const showMsg = (msg: string) => {
  console.log('showMsg:msg>>>', msg)
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: 2000,
    fail: function () { },
    complete: () => {
      Taro.hideToast()
    }
  })
}

export const moneyFormat = (num: number = 0) => {
  return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toFixed(2).replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
//拉下刷新
export const pullDownReload = (e: any, refresh: () => void) => {
  refresh instanceof Function && e.currentTarget.offsetTop > 45 && refresh()
}

export const getTimeStamp = (year, month, day, hour, minute, seconds, formatstr = '') => { // YYYY-MM-dd[T]hh:mm:ss[.999Z]   yyyy-MM-dd HH:mm:ss
  return moment(new Date(year, month, day, hour, minute, seconds)).format(formatstr)
}

export const getEndTimeStamp = (year, month, formatstr = '') => {
  return getTimeStamp(year, month, 0, 23, 59, 59, formatstr)
}

export const getStartTimeStamp = (year, month, formatstr = '') => {
  return getTimeStamp(year, month - 1, 1, 0, 0, 0, formatstr)
}

//连续刷新频繁提示
let ifCanReload = true
export const delayAction = (second: number = 5, fun) => {
  if (ifCanReload) {
    Taro.hideToast()
    fun()
    ifCanReload = false
    setTimeout(() => {
      ifCanReload = true
    }, second * 1000);
  } else {
    Taro.showToast({
      title: `请稍后再试`,
      icon: 'none',
      duration: 2000,
    })
  }
}