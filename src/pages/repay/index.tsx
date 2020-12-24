import React, { useState, useRef, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.styl'
// import Header from '@/components/header'
import { AtButton } from 'taro-ui'
import logo from '@/images/icon_avatar.png'
import MnLayout from '@/components/mnLayout'
import { recharge } from '@/api/api'
// // import Toast from '@/components/toast'
// import Modal from '@/components/modal'

const Repay = () => {
  const inputRef = useRef<any>()
  const prevInput = useRef('')
  const [data, setData] = useState({
    waitSettledAmount: 0.00, // 待结算金额
    settledAdvanceAmount: 108.00,	// 欠款结算金额 ：平台垫付金账户金额
    withdrawableAmount: 508.68,  // 可提现金额
    frozedAmount: 0.00,  // 冻结金额
    availableAmount: 0.00 // 可用余额
  })


  useEffect(() => {
    // queryData()
  }, [])

  // const queryData = async () => {
  //   // Taro.showModal()
  //   Taro.showLoading({title: '数据加载中...', mask: true })
  //   try {
  //     const res = await req.post(queryAccountBalance)
  //     console.log('res>>', res)
  //     // setData()
  //   } catch(err) {
  //     console.log(err)
  //   } finally {
  //     Taro.hideLoading()
  //   }
  // }

  const handleInput = (e) => {
    if(!e.detail.value || reg.test(e.detail.value)) {
      inputRef.current.value = e.detail.value || ''
      prevInput.current = e.detail.value || ''
    } else {
      inputRef.current.value = prevInput.current || ''
    }
  }

  const handleInputBlur = () => {
    if(!!inputRef.current.value) {
      let val = `${inputRef.current.value}`
      const dotIndex = val.indexOf('.')
      if(dotIndex > -1 && dotIndex ===  val.length - 1 ) {
        val = val.substring(0,dotIndex)
      }
      // if(val * 1 < 10) {
      //   val = 10
      // } else if (val * 1 > data.withdrawableAmount) {
      //   val = data.withdrawableAmount
      // }
      inputRef.current.value = val
    }
  }

  const handleRepay = () => {
    const val = inputRef.current.value
    if(!val) {
      Taro.showToast({
        title: '请输入还款金额',
        icon: 'none',
        duration: 2000
      }) 
      return false
    }

    if(val * 1 > data.withdrawableAmount) {
      Taro.showToast({
        title: `需还款金额为${data.settledAdvanceAmount}`,
        icon: 'none',
        duration: 2000
      }) 
      inputRef.current.value = data.settledAdvanceAmount
      return false
    }
    doRepay()
  }

  const doRepay = async () => {
    Taro.showLoading({title: '还款处理中...', mask: true })
    try {
      const res = await req.post(recharge, {amount: inputRef.current.value * 1, payType: 0})
      console.log('res>>', res)
      // setData()
    } catch(err) {
      console.log(err)
    } finally {
      Taro.hideLoading()
    }
  }
  
  return  (
    <MnLayout title='垫付还款' hideArrow={false}>
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
            <Input 
              ref={inputRef}
              type='number' 
              placeholder='请输入金额' 
              className='amountInput' 
              placeholderStyle='color:rgba(0, 0, 0, 0.25)' 
              onInput={handleInput} 
              onBlur={handleInputBlur}
            />
          </View>
          <View className='amount_limit'>平台垫付资金<Text className='red'>-{data.settledAdvanceAmount}元</Text>，请及时归还</View>
        </View>
        <View className='repay_button' onClick={handleRepay}>确认还款</View>
        <View className='remind_box'>
          <View className='title'>温馨提示:</View>
          <View>1、平台不做服务费收费，具体收费参照所绑银行卡收费制度。</View>
          <View>2、平台提现到银行卡每日不限额。</View>
          <View>3、提现成功后，48小时内如未到账，人工无法加急，请您耐心等待，到账后可联系银行客服，核实当天入账明细及余额变动情况。</View>
        </View>
      </View>
    </MnLayout>
    )
}
  
export default Repay