import React from 'react'
import { View } from '@tarojs/components'
import Header from '@/components/header'
import './index.styl'

const Login = () => {
  
  return  (
    <View className='login_page_box'>
      <View className='top_box'>
        <Header noArrow={true} title='登录'  style={{ marginLeft: '10%' }} />
      </View>
    </View>
  )
}
export default Login

