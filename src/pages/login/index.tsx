import React, { useEffect, useState } from 'react'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Header from '@/components/header'
import { AtButton } from 'taro-ui'
import bird_logo from '@/images/ysb_logo.png'
import ChangeEnv from '@/components/changeEnv'
import { phone_reg, password_reg } from '@/utils/reg'
import './index.styl'


const Login = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [errMsg, setErrMsg] = useState('')
  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')

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

  const handleLogin = () => {
    const phoneVal = trim(phone)
    const pwdVal = trim(pwd)
    if(!phone_reg.re.test(phoneVal) || !password_reg.re.test(pwdVal)) {
      setErrMsg('账号或密码错误')
      return false
    }
    console.log(`phoneVal=${phoneVal}, pwdVal=${pwdVal}`)
    Taro.navigateTo({url: '/pages/index/index'})
  }
  
  return  (
    <View className='login_page_box'>
      <View className='top_box'>
        <Header noArrow={true} title='登录'  style={{ marginLeft: '10%' }} />
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
          <View className='link_button' onClick={() => { Taro.navigateTo({url: `/pages/webView/index?url=${encodeURIComponent('https://miniwap.ypsx-internal.com/settleIn/index.html')}`})}}>申请入驻</View>
          <View className='divide'></View>
          <View className='link_button' onClick={() => { Taro.navigateTo({ url: '/pages/resetPwd/index?type=2' })}}>忘记密码</View>
        </View>
      </View>
    </View>
  )
}
export default Login

