import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'
// import Header from '@/components/header'
import { AtButton } from 'taro-ui'
// // import Toast from '@/components/toast'
// import Modal from '@/components/modal'

const Account = () => {
  const [showToolTip, setShowToolTip] = useState(false)

  const handleWranClick = (e) => {
    e.stopPropagation()
    setShowToolTip(!showToolTip)
  }

  const handlePageClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    showToolTip && setShowToolTip(false)
  }

  return  (
    <View className='withdraw_page_box flex_center_start_column' onClick={handlePageClick}>
      <View className='warn_text_box flex_center_start_row' onClick={handleWranClick}>
        <View className='icon_box'>
          <View className={`toolTip ${showToolTip ? ' show_toolTip': ''}`}>垫付资金是当给用户退款时，如原订单资金已过结算周期，则平台会优先垫付资金完成退款，此处即为平台垫付金额。</View>
        </View>
        <Text>当前平台垫付资金欠款</Text>
        <Text className='red'>100.00元</Text>
        <Text>，请及时还款后可正常提现</Text>
      </View>
      <View className='withdraw_title'>可提现金额</View>
      <View className='withdraw_amount'><Text className='withdraw_unit'>¥</Text>508.68</View>
      <View className='record_button flex_center_center_row' onClick={() => {Taro.navigateTo({url: '/pages/records/index'})}}>查看资金记录</View>
      <View className='withdraw_button' onClick={() => {Taro.navigateTo({url: '/pages/withdraw/index'})}}>提现</View>
      <View className='repay_button' onClick={() => {Taro.navigateTo({url: '/pages/repay/index'})}}>去还款</View>
    </View>

  )
  }
  
export default Account