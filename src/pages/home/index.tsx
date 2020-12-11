import React, {useState, useEffect} from 'react'
import { View, Text, Button, ScrollView } from '@tarojs/components'
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

  const onScrollToUpper = () => {}

  const onScroll = (e) => {
    console.log(e.detail)
  }

  return (
    <ScrollView 
      className='indexPage_box'
      scrollY
      scrollWithAnimation
      scrollTop={0}
      lowerThreshold={20}
      upperThreshold={20}
      onScrollToUpper={onScrollToUpper} 
      onScroll={onScroll}
    >
      <View className='topBox flex_center_center_column'>
        <Text className='withdraw_text'>可提现金额</Text>
        <Text className='withdraw_amount'>¥18,540.00</Text>
        <Button className='detail_button'>查看详情</Button>
        <View className='amountbox flex_center_center_row'>
          <View className='sum_box flex_center_center_column'>
            <Text className='sum_money'>¥384.88</Text>
            <Text className='sum_text'>带结算金额</Text>
          </View>
          <View className='sum_box flex_center_center_column'>
            <Text className='sum_money'>¥384.88</Text>
            <Text className='sum_text'>今日营业额</Text>
          </View>
        </View>
      </View>
      <AtGrid data={gridData} onClick={handleGridEvent} />
    </ScrollView>
  )
}

export default IndexPage