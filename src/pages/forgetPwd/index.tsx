import React from 'react'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Header from '@/components/header'
import { AtButton } from 'taro-ui'
import './index.styl'

const ForgetPwd = () => {
  
  return  (
    <View className='pwd_page_box'>
      <View className='pwd_form_box'>
        <View className='field_box flex_center_start_row'>
          <View className='fieldLabel'>手机号：</View>
          <Input type='text' placeholder='请输入手机号' className='fieldInput' maxlength={11} placeholderStyle='color:rgba(0, 0, 0, 0.25)' />
        </View>
        <View className='field_box flex_center_start_row'>
          <View className='fieldLabel'>短信验证码：</View>
          <Input type='text' placeholder='请输入验证码' className='fieldInput' placeholderStyle='color:rgba(0, 0, 0, 0.25)' maxlength={6} />
          <View className='verifyCode_btn'>获取验证码</View>
        </View>
      </View>
      <AtButton className='confirm_button'>下一步</AtButton>
    </View>
  )
}
export default ForgetPwd

