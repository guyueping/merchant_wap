import React from 'react'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Header from '@/components/header'
import { AtButton } from 'taro-ui'
import './index.styl'
// Taro.setNavigationBarTitle({title: '124234324'})

const ResetPwd = () => {

  return  (
    <View className='pwd_page_box'>
      <View className='pwd_form_box'>
        <View className='field_box flex_center_start_row'>
          <View className='fieldLabel'>短信验证码：</View>
          <Input type='text' placeholder='请输入验证码' className='fieldInput' placeholderStyle='color:rgba(0, 0, 0, 0.25)' maxlength={6} />
          <View className='verifyCode_btn'>获取验证码</View>
        </View>
        <View className='field_box flex_center_start_row'>
          <View className='fieldLabel'>新密码：</View>
          <Input type='text' placeholder='请输入新密码' className='fieldInput' maxlength={8} placeholderStyle='color:rgba(0, 0, 0, 0.25)' />
        </View>
        <View className='field_box flex_center_start_row'>
          <View className='fieldLabel'>确认新密码：</View>
          <Input type='text' placeholder='请再次输入新密码' className='fieldInput' placeholderStyle='color:rgba(0, 0, 0, 0.25)' maxlength={8} />
        </View>
      </View>
      <View className='error_msg'>
        <View className='at-icon at-icon-alert-circle err_icon'>
        </View>密码输入不一致，请重试</View>
      <AtButton className='confirm_button' onClick={() => {Taro.redirectTo({url: '/pages/login/index'})}}>确定</AtButton>
    </View>
  )
}
export default ResetPwd

