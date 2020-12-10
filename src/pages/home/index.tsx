import React, {useState, useEffect} from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro, { navigateTo } from '@tarojs/taro'
import { AtGrid } from 'taro-ui'
import './index.styl'
import { gridData } from './constants'

const pageList = ['sale', 'account', 'task', 'order', 'afterSale', 'bill']

const IndexPage = () => {

  //   useEffect(() => {
  //     // Taro.hideShareMenu()
  //     console.log('process>>', process.env.NODE_ENV)
  //   }, [])

  const handleGridEvent = (item: object, index: number) => {
    navigateTo({ url: `/pages/${pageList[index]}/index` })
  }

  return (
    <View className='indexPage_box'>
      <View className='topBox'>
      </View>
      <AtGrid data={gridData} onClick={handleGridEvent} />
    </View>
  )
}

export default IndexPage