import React from 'react'
import { View, Input, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import './index.styl'

const Withdraw = () => {
  return (
    <View className='withdraw_page_box'>
      <View className='card_box'>
        <View className='card_head'>
          <View>到账银行</View>
          <View className='card_info'>
            <View className='card_num'>招商银行 储存卡（3899）</View>
            <View className='time'>2小时内到账</View>
          </View>
        </View>
        <View className='card-body'>
          <View className='amount_label'>提现金额</View>
          <View className='amount flex_center_start_row'>
            <Text>¥</Text>
            <Input type='text' placeholder='请输入金额' className='amountInput' placeholderStyle='color:rgba(0, 0, 0, 0.25)' />
          </View>
          <View className='amount_limit'>最低提现金额10.00，当前可提现金额100.00元<Text className='all_withdraw'>全部提现</Text></View>
        </View>
      </View>
      <AtButton className='withdraw_button'>提现</AtButton>
      <View className='remind_box'>
        <View className='title'>温馨提示:</View>
        <View>1、平台不做服务费收费，具体收费参照所绑银行卡收费制度。</View>
        <View>2、平台提现到银行卡每日不限额。</View>
        <View>3、提现成功后，48小时内如未到账，人工无法加急，请您耐心等待，到账后可联系银行客服，核实当天入账明细及余额变动情况。</View>
      </View>
    </View>
  )
}

export default Withdraw