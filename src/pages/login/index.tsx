import React from 'react'
import { View, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import Header from '@/components/header'
import { AtButton } from 'taro-ui'
import './index.styl'
import bird_logo from '@/images/icon_avatar.png'

const Login = () => {
  
  return  (
    <View className='login_page_box'>
      <View className='top_box'>
        <Header noArrow={true} title='登录'  style={{ marginLeft: '10%' }} />
      </View>
      <image src={bird_logo} className='bird_logo' />
      <View className='login_form_box'>
        <View className='field_box flex_center_start_row'>
          <View className='at-icon at-icon-user field_icon'></View>
          <Input type='text' placeholder='请输入账号' className='fieldInput' maxlength={11} placeholderStyle='color:rgba(0, 0, 0, 0.25)' />
        </View>
        <View className='field_box flex_center_start_row'>
          <View className='at-icon at-icon-lock field_icon'></View>
          <Input type='password' password placeholder='请输入密码' className='fieldInput' placeholderStyle='color:rgba(0, 0, 0, 0.25)' />
        </View>
        <AtButton className='login_button'>登录</AtButton>
        <View className='link_button_box flex_center_center_row'>
          <View className='link_button' onClick={() => { Taro.navigateTo({url: `/pages/webView/index?url=${encodeURIComponent('https://taro-docs.jd.com/taro/docs/components/open/web-view')}`})}}>申请入驻</View>
          <View className='divide'></View>
          <View className='link_button' onClick={() => { Taro.navigateTo({url: '/pages/forgetPwd/index'})}}>忘记密码</View>
        </View>
      </View>
    </View>
  )
}
export default Login

