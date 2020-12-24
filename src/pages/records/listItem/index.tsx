import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { typeAry, statusAry } from '../constants'
import './index.styl'

const ListItem = (props) => {
  const { tradeType, tradeStatus, amount, tradeTime, bank, cardId } = props.data
  return (
    <View className='list_item_box'>
      <View className='item_up flex_center_between_row'>
        <View className='item_up_left'>{typeAry[tradeType]}</View>
        <View className='item_up_right'>{amount.toFixed(2)}</View>
      </View>
      <View className='item_down flex_center_between_row'>
        <View className='item_down_left'>{tradeTime}</View>
        <View className={`item_down_right${(tradeStatus === 1 || tradeStatus === 3) ? ' red' : ''}`}>{statusAry[tradeStatus]}</View>
      </View>
    </View>
  )
}

export default ListItem