import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import './index.styl'

const ListItem = () => {
  return (
    <View className='list_item_box'>
      <View className='item_up flex_center_between_row'>
        <View className='item_up_left'>垫付还款</View>
        <View className='item_up_right'>115.00</View>
      </View>
      <View className='item_down flex_center_between_row'>
        <View className='item_down_left'>11月20日 17:00</View>
        <View className='item_down_right'>已归还</View>
      </View>
    </View>
  )
}

export default ListItem