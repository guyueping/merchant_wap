import React, { useEffect, useState } from 'react'
import { View, Input } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import Header from '@/components/header'
// import captcha from 'captcha'
import { AtButton } from 'taro-ui'
import bird_logo from '@/images/ysb_logo.png'
import ChangeEnv from '@/components/changeEnv'
import req from '@/utils/mnRequest'
import { login } from '@/api/api'
import { phone_reg, password_reg } from '@/utils/reg'
import { showMsg } from '@/utils/index'
import { getData, setData } from '@/utils/ypStore'
import './index.styl'


const Login = () => {
  const { path, params = {} } = useRouter()
  const { url } = params
  console.log('url====', url)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [errMsg, setErrMsg] = useState('')
  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')
  const [gData, setGData] = useState({})

  useEffect(() => {
    // getGeeTest()
  }, [])

  const getGeeTest = async () => {
    // Taro.request({
    //   url: 'https://www.geetest.com/demo/gt/register-slide?t=' + new Date().getTime(),
    //   method: 'GET',
    //   dataType: 'json',
    //   success: function (res) {
    //     console.log('res>>', res)
    //     setGData({ loadCaptcha: true, gt: res.data.gt, challenge: res.data.challenge, offline: !res.data.success })
    //   },
    //   fail: function () {
    //       console.log('error')
    //   }
    // })
    const {success, result = {}} = await req.post('usercenter.behavior.preProcess', {})
    if(success) {
      const { challenge, gt, newCaptcha, success: suc } = result
      const d = { loadCaptcha: true, gt, challenge, offline: !suc }
      console.log(d)
      setGData(d)
    }
  }


  const handleChange = (e, fieldName) => {
    errMsg && setErrMsg('')
    if(fieldName === 'phone') {
      setPhone(e.detail.value)
    } else if(fieldName === 'pwd') {
      setPwd(e.detail.value)
    }
  }

  const trim = (str: string) => { // 删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, '');
  }

  useEffect(() => {
    if(!!phone && !!pwd) {
      btnDisabled && setBtnDisabled(false)
    } else {
      !btnDisabled && setBtnDisabled(true)
    }
  }, [phone, pwd, btnDisabled])

  const handleLogin = async () => {
    const phoneVal = trim(phone)
    const pwdVal = trim(pwd)
    if(!phone_reg.re.test(phoneVal) || !password_reg.re.test(pwdVal)) {
      setErrMsg('账号或密码错误')
      return false
    }
    try{
      const { success = false, result = {} } = await req.post(login,  { mobile: phoneVal, password: pwdVal })
      if(success) {
        const {auditStatus, businessType, changeStatus, mobile, token} = result
        if(auditStatus === 7 && businessType === 1 && token) {
          setData('token', token)
          Taro.redirectTo({'url': (url ? `/${decodeURIComponent(url)}`: '/pages/index/index')})
        } else {
          showMsg('您还未开通谊商宝账号')
          // Taro.showToast({
          //   title: '您还未开通谊商宝账号',
          //   icon: 'none',
          //   duration: 2000
          // })
        }
      }
    } catch(err){

    } finally {

    }
  }

  
  return  (
    <View className='login_page_box'>
      <View className='top_box'>
        <Header noArrow title='登录'  style={{ marginLeft: '10%' }} />
      </View>
      <ChangeEnv className='change_env'>
        <image src={bird_logo} className='bird_logo' />
      </ChangeEnv>
      <View className='login_form_box'>
        <View className='field_box flex_center_start_row'>
          <View className='at-icon at-icon-user field_icon'></View>
          <Input type='number' placeholder='请输入账号' className='fieldInput' maxlength={11} placeholderStyle='color:rgba(0, 0, 0, 0.25)' onInput={(e) => {handleChange(e, 'phone')}} />
        </View>
        <View className='field_box flex_center_start_row'>
          <View className='at-icon at-icon-lock field_icon'></View>
          <Input type='password' password placeholder='请输入密码' className='fieldInput' maxlength={8} placeholderStyle='color:rgba(0, 0, 0, 0.25)' onInput={(e) => {handleChange(e, 'pwd')}} />
        </View>
        {errMsg && (
          <View className='error_msg'>
            <View className='at-icon at-icon-alert-circle err_icon'></View>
            <View>{errMsg}</View>
          </View>
        )}
        <AtButton className='login_button' disabled={btnDisabled} onClick={handleLogin}>登录</AtButton>
        <View className='link_button_box flex_center_center_row'>
          <View className='link_button' onClick={() => { Taro.navigateTo({url: `/pages/webView/index?url=${encodeURIComponent('https://pages.ypsx-internal.com/settleIn/index.html')}`})}}>申请入驻</View>
          <View className='divide'></View>
          <View className='link_button' onClick={() => { Taro.navigateTo({ url: '/pages/resetPwd/index?type=2' })}}>忘记密码</View>
        </View>
      </View>
      {/* <View style={{width: '100%', height: '200px', background: '#ff0000'}}>
      {gData.loadCaptcha && (
        <captcha
          id='captcha' 
          loadCaptcha={gData.loadCaptcha} 
          gt={gData.gt} 
          challenge={getData.challenge} 
          offline={getData.offline} 
          bindonSuccess={() => {console.log('bindonSuccess')}}
          bindonReady={() => {console.log('bindonReady')}} 
          bindonClose={() => {console.log('bindonClose')}} 
          bindonError={() => {console.log('bindonError')}}
        />
      )}
      </View> */}
    </View>
  )
}
export default Login

