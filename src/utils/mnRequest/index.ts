import Taro from '@tarojs/taro'
import { getData } from '@/utils/ypStore'
import { showMsg, getCurrentPageUrl } from '@/utils/index'

export type Type = 'web' | 'electron' | 'react-native' | 'miniapp' // type 决定 数据的储存方式
export interface iParams {
  apiUrl: string
  version?: string
  dataVal?: object
  restData?: object
}
function S4() {
  // tslint:disable-next-line:no-bitwise
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function guid() {
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}
function createParams(params: iParams) {
  let token = ''
  const localToken = getData('token') || ''
  if (localToken) {
    token = localToken
  } else {
    token = getData('token') || ''
  }
  let requestParams = {
    api: params.apiUrl,
    version: params.version || '1.0',
    timestamp: new Date().getTime(),
    token,
    nonce: guid(),
    params: {
      ...params.dataVal,
    },
    ...params.restData,
  }
  return requestParams
}
function getBaseUrl(apiName: string): string {
  let env = getData('env') || 'prod'
  let baseURL = 'https://apigw.ypshengxian.com/request'
  if (env && env !== 'prod') {
    baseURL = `https://apigw-${env}.ypshengxian.com/request`
  }
  return baseURL + '?apiName=' + apiName
}
export default class MnRequest {
  constructor(public type: Type = 'miniapp') {}
  init() {
    // console.log(this.type)
  }
  static async post(
    apiName: string,
    dataVal: object = {},
    restData: object = {},
  ) {
    const paramsObj = createParams({ apiUrl: apiName, dataVal, restData })
    let result: any = {}
    try {
      result = await new Promise((resolve) => {
        Taro.request({
          method: 'POST',
          url: getBaseUrl(apiName as string),
          header: {
            'Content-Type': 'application/json;charset=UTF-8',
            'app-id': 'ypsj',
            'app-platform': 'wxApp'
          },
          dataType: 'json',
          data: paramsObj,
          success: function (val) {
            const data = val.data
            // console.log(val.data)
            if (data.success) {
              // 网关
              if (data.result && data.result.success) {
                // 业务
                if (data.result.hasOwnProperty('result')) {
                  resolve({
                    success: true,
                    result: data.result.result,
                    code: 200,
                    message: '请求成功',
                  })
                } else {
                  resolve({
                    success: true,
                    result: { ...data.result },
                    code: 200,
                    message: '请求成功',
                  })
                }
              } else {
                resolve({
                  success: false,
                  result: {},
                  code: data.result.code || data.result.error.code,
                  message: data.result.message || data.result.error.message,
                })
              }
            } else {
              resolve({
                success: false,
                code: data.error.code || data.code,
                message: data.error.message || data.message,
                result: {},
              })
            }
          },
        })
      })
    } catch (error) {
      result = { success: false, result: {}, code: -1001, message: '系统异常' }
    }
    if (!result.success) {
      if (result.code === -60007 || result.code === -30104 || result.code === -32001 || result.code === -32002 || result.code === -32003) {
        Taro.showModal({
          title: '温馨提示',
          content: '未登录或登录已过期，请登录',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              Taro.navigateTo({url: `/pages/login/index?url=${encodeURIComponent(getCurrentPageUrl())}`})
            }
          }
        })
        // setTimeout(() => {
        //   Taro.navigateTo({url: `/pages/login/index?url=${encodeURIComponent(getCurrentPageUrl())}`})
        // }, 2000)
      }
      Taro.showToast({
        title: result.message,
        icon: 'none',
        duration: 2000,
      })
    }
    return result
  }
}

export const request = async (url, params = {}, loadingMsg = '', cb) => {
  loadingMsg && Taro.showLoading({ title:loadingMsg, mask: true })
  try {
    const res = await MnRequest.post(url, params)
    cb && cb(res)
  } catch (err) {
    console.log(err)
  } finally {
    loadingMsg && Taro.hideLoading()
  }
}
