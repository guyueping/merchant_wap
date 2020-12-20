import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.styl'
// import Header from '@/components/header'
import { AtButton } from 'taro-ui'
import logo from '@/images/icon_avatar.png'
// // import Toast from '@/components/toast'
// import Modal from '@/components/modal'

const Repay = () => {
  
  return  (
    <View className='repay_page_box'>
      <View className='topbox flex_center_start_row'>
        <image src={logo} className='logo' />
        <View>
          <View className='platform_txt'>谊品平台</View>
          <View className='small_txt'>请支付平台垫资欠款</View>
        </View>
      </View>
      <View className='repay_box'>
      <View className='amount_label'>还款金额</View>
        <View className='amount flex_center_start_row'>
          <Text>¥</Text>
          <Input type='text' placeholder='请输入金额' className='amountInput' placeholderStyle='color:rgba(0, 0, 0, 0.25)' />
        </View>
        <View className='amount_limit'>平台垫付资金<Text className='red'>-100.00元</Text>，请及时归还</View>
      </View>
      <View className='repay_button'>确认还款</View>
      <View className='remind_box'>
        <View className='title'>温馨提示:</View>
        <View>1、平台不做服务费收费，具体收费参照所绑银行卡收费制度。</View>
        <View>2、平台提现到银行卡每日不限额。</View>
        <View>3、提现成功后，48小时内如未到账，人工无法加急，请您耐心等待，到账后可联系银行客服，核实当天入账明细及余额变动情况。</View>
      </View>
    </View>
    )
}
  
export default Repay