import axios from 'axios'
import { Params, AnyKey, OptionConfig, Result, ResponstResult } from '../types/'
// import Cookies from 'js-cookie'
import { guid } from './nonce'
// import { message, notification } from 'antd'
import ypEvent from '../utils/event'
import { getBaseUrl } from '../../index'
// import AppUtil from '@/utils/mixin'
import Taro, { showToast } from '@tarojs/taro'

let axiosObejct = axios.create({
  timeout: 5000,
  responseType: 'json',
  withCredentials: false,
  validateStatus: function(status) {
    return status >= 100 && status < 600
  }
})
axiosObejct.interceptors.request.use(config => {
  config.headers = Object.assign(config.headers ? config.headers : {}, {
    'app-id': 'ypsj',
    'app-platform': 'wap'
  })
  return config
})
axiosObejct.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error) // reject这个错误信息 让下流catch到 /
  }
)
function createParams(params: OptionConfig): OptionConfig {
  let requestParams = {
    api: params.apiUrl,
    version: params.version || '1.0',
    timestamp: new Date().getTime(),
    token: AppUtil.cookie.getCookie('sjtoken'), // 只设置当前domain的cookie, TODO: 后期更新为storage
    nonce: guid(),
    params: { ...params.data },
    ...params.restData
  }
  return requestParams
}
async function omsRequest<T = Result>(
  apiName: Params | string,
  data: object = {},
  restData: object = {}
): Promise<ResponstResult<T>> {
  let apiUrl = ''
  const isMockModule = apiName && apiName.includes('/mock/api')
  if (typeof apiName === 'string') {
    apiUrl = apiName
  } else {
    apiUrl = apiName.gateway as string
  }
  const objParams: OptionConfig = { apiUrl, data: { ...data }, restData }
  const params = createParams(objParams) // 封装接口请求参数
  let result: AnyKey = {}
  try {
    // reject
    let res: AnyKey = await new Promise(resolve => {
      axiosObejct({
        method: isMockModule ? 'POST' : 'POST',
        url: getBaseUrl(apiName),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
          // 'route-url': '172.16.5.246:8506'
        },
        data: params
      })
        .then(res => {
          const { data } = res
          if (data.success) {
            // 网关
            if (data.result.success) {
              // 业务
              if (data.result.hasOwnProperty('result')) {
                resolve({
                  success: true,
                  result: data.result.result,
                  code: 200,
                  message: '请求成功'
                })
              } else {
                resolve({
                  success: true,
                  result: { ...data.result },
                  code: 200,
                  message: '请求成功'
                })
              }
            } else {
              resolve({
                success: false,
                result: {},
                code: data.result.error.code || data.result.error.code,
                message: data.result.error.message || data.result.message
              })
            }
          } else {
            resolve({
              success: false,
              code: data.error.code || data.code,
              message: data.error.message || data.message,
              result: {}
            })
          }
        })
        .catch(error => {
          let message = '系统异常'
          let code = -1000
          if (error.message.includes('timeout')) {
            message = '接口请求超时，请重新操作'
            code = -9999
          }
          result = { success: false, code, message, result: {} }
          resolve(result)
        })
    })
    result = res
  } catch (error) {
    result = { success: false, result: {}, code: -1001, message: '系统异常' }
  }
  // console.log('result===', result)
  if (!result.success) {
    let msg  = result.message || ''
    if (result.code === -60007 || result.code === -30104 || result.code === -32001 || result.code === -32002 || result.code === -32003) {
      ypEvent.emit('auth_error', '登录失效')
      msg = ''
    } else if (result.code === -60009) {
      // window.location.replace(AppUtil.locationUrl())
      ypEvent.emit('shop_error', '请先完成入驻')
      msg = ''
    }
    msg && showToast({
      title: msg,
      icon: 'none',
      duration: 2000,
      fail: function(){}
    })
    
  }
  return result
}
export default omsRequest
