import React, {useState, useEffect} from 'react'
import { View, Button, Text } from '@tarojs/components'
import Taro, { navigateTo } from '@tarojs/taro'

import './index.styl'
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
      <Button onClick={linkPage}>按钮</Button>
    </View>
  )
}

export default IndexPage