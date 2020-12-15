import Taro from '@tarojs/taro'

export function getData(key: string, type = 1, cb?: Function) {
  if (type === 1) {
    let value
    try {
      value = Taro.getStorageSync(key)
    } catch (e) {
      console.log('getData', e)
    }
    if (value) {
      return value
    }
  } else {
    Taro.getStorage({
      key: key,
      success: function (res) {
        if (res.data) {
          cb && cb(res.data)
        }
      },
    })
  }
}
export function setData(key: string, value: unknown, type = 1) {
  if (type === 1) {
    try {
      Taro.setStorageSync(key, value)
    } catch (e) {
      console.log('setData', e)
    }
  } else {
    Taro.setStorage({
      key: key,
      data: value,
    })
  }
}
export function removeData(key: string, type = 1) {
  if (type === 1) {
    try {
      Taro.removeStorageSync(key)
    } catch (e) {
      console.log('removeData', e)
    }
  } else {
    Taro.removeStorage({
      key: key,
      success: function (res) {
        console.log(res)
      },
    })
  }
}
