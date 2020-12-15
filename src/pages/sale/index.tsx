import React, { useState } from 'react'
import './index.styl'
import { View, Text, Image } from '@tarojs/components'
import List from '@/components/list'
const SaleList = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [goodList, setGoodList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 20])
  const onScrollToLower = () => {
    console.log(">>>><<<")
    setShowLoading(true)
    const list = goodList
    // setTimeout(() => {
    //   for (let i = 0; i <= 9; i++) {
    //     list.push(goodList.length + 1)
    //   }
    //   console.log(">>list", list)
    //   setGoodList(list)
    //   setShowLoading(false)
    // }, 1000)

  }
  const listItem = (it) => {
    return (
      <View className="list-item">
        {/* <Image className='img'
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        /> */}
        <View className="right">
          <View className="head">汉釜宫彩虹芝士夹心年糕（南瓜紫薯鹭明雪花培根  500g/袋</View>
          <View className="bottom">
            <Text>已售<Text className="strong">{it}</Text>份</Text>
            <Text>剩余：<Text className="strong blue-font">20</Text></Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View className={'content'}>
      <View className="top">
        <Text className="left">今日数据</Text>
        <View className="right">2020-12-01 16:09<View>??</View></View>
      </View>
      <View className={'cardbox'}>
        <View className="item">
          <Text className={'title'}>今日营业额</Text>
          <View className="numbox"><Text className="icon">¥</Text><Text className={'num'}>198.00</Text></View>
        </View>
        <View className="item">
          <Text className={'title'}>已售份数</Text>
          <View className="numbox"><Text className="num">198</Text></View>
        </View>
      </View>
      <List onScrollToLower={onScrollToLower} showLoadMore={showLoading} style={{flex: 1}}>
        {/* <View className={'list'}> */}
          {goodList.map(item => listItem(item))}
        {/* </View> */}
      </List>

    </View>
  )
}
export default SaleList