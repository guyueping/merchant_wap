import React, {useState, useEffect} from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { navigateTo } from '@tarojs/taro'
import { AtButton } from 'taro-ui'

const IndexPage = () => {
  const linkPage = () => {
    navigateTo({ url: '/pages/list/index' })
  }

  useEffect(() => {
    console.log('process>>', process.env.NODE_ENV)
  }, [])
  
  return (
    <View className='flex_center_center_column'>
      <Text>首页</Text>
      <AtButton onClick={linkPage} type='primary'>按钮文案</AtButton>
    </View>
  )
}

export default IndexPage