import Taro from '@tarojs/taro'
import { getCurrentPageUrl } from '@/utils/index'
/**
 * 
 * @param url 
 * @param type 
 * @param cb 
 * Taro.reLaunch({
  url: 'test?id=1'
})
 */
export function backTo(num: number = 1, cb?: Function) {
  Taro.navigateBack({
    delta: num,
  })
}
export function goTo(url: string, type = 1, cb?: Function) {
  if(`/${getCurrentPageUrl()}` === url) {
    return false
  }
  switch (type) {
    case 1:
      // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
      Taro.navigateTo({
        url,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          // acceptDataFromOpenedPage: function(data) {
          //   console.log(data)
          // },
          // someEvent: function(data) {
          //   console.log(data)
          // }
        },
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        },
      })
      break
    case 2:
      // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
      Taro.redirectTo({
        url,
      })
      break
    case 3:
      // 关闭所有页面，打开到应用内的某个页面
      Taro.reLaunch({
        url,
      })
      break
    default:
      Taro.navigateTo({
        url,
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          // acceptDataFromOpenedPage: function(data) {
          //   console.log(data)
          // },
          // someEvent: function(data) {
          //   console.log(data)
          // }
        },
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
        },
      })
  }
}
