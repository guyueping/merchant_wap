import React, { useState, useEffect, useRef } from 'react'
import { View, Input, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtInput, AtForm } from 'taro-ui'
import Modal from '@/components/modal'
import req from '@/utils/mnRequest'
import { queryAccountBalance } from '@/api/api'
import './index.styl'

const Withdraw = () => {
  const [showToolTip, setShowToolTip] = useState(false)
  const [showModal ,setShowModal] = useState(false)
  const inputRef = useRef()
  const [data, setData] = useState({
    waitSettledAmount: 0.00, // 待结算金额
    settledAdvanceAmount: 108.00,	// 欠款结算金额 ：平台垫付金账户金额
    withdrawableAmount: 508.68,  // 可提现金额
    frozedAmount: 0.00,  // 冻结金额
    availableAmount: 0.00 // 可用余额
  })

  const [amount, setAmount] = useState(0)


  useEffect(() => {
    // queryData()
  }, [])

  const queryData = async () => {
    // Taro.showModal()
    Taro.showLoading({title: '数据加载中...', mask: true })
    try {
      const res = await req.post({ apiUrl: queryAccountBalance })
      console.log('res>>', res)
      // setData()
    } catch(err) {
      console.log(err)
    } finally {
      Taro.hideLoading()
    }
  }

  const handleWranClick = (e) => {
    e.stopPropagation()
    setShowToolTip(!showToolTip)
  }

  const handlePageClick = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    showToolTip && setShowToolTip(false)
  }
  const handleAmountInput = (e) => {
    console.log('e>>', e)
    // console.log('e.detail>>', e.detail)
    // const val = e.detail.value
    // let {value, cursor, keyCode} = e.detail
    // if(!(cursor === 1 && keyCode === 48) && (keyCode >= 48 && keyCode <= 57 || keyCode === 190)) {
    //   return value
    //   // setAmount( value )
    //   // console.log(value)
    //   // if(value !== '.') {

    //   // }
    // }
    // console.log(inputRef.current.value === '124234')
    inputRef.current.value = '124234'
    return '124234'
  }

  return (
    <View className='withdraw_page_box' onClick={handlePageClick}>
      {data.settledAdvanceAmount > 0 && (
        <View className='warn_text_box flex_center_start_row' onClick={handleWranClick}>
          <View className='icon_box'>
            <View className={`toolTip ${showToolTip ? ' show_toolTip': ''}`}>垫付资金是当给用户退款时，如原订单资金已过结算周期，则平台会优先垫付资金完成退款，此处即为平台垫付金额。</View>
          </View>
          <Text>当前平台垫付资金欠款</Text>
          <Text className='red'>{data.settledAdvanceAmount}元</Text>
          <Text>，请及时还款后可正常提现</Text>
        </View>
      )}
      <View className='withdraw_page_container'>
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
              <Input 
                ref={inputRef}
                type='digit' 
                placeholder='请输入金额' 
                className='amountInput' 
                placeholderStyle='color:rgba(0, 0, 0, 0.25)' 
                onInput={handleAmountInput} 
                // value={amount || ''}
              />
            </View>
            <View className='amount_limit'>最低提现金额10.00，当前可提现金额{data.withdrawableAmount}元<Text className='all_withdraw'>全部提现</Text></View>
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
      <Modal 
        show={showModal} 
        content={<View>当前平台垫付资金<Text className='red'>-¥100.00元</Text>请先处理欠款后可正常提现</View>} 
        popWarning={true} 
        onCancel={() => {setShowModal(false)}} 
        confirmText='立即处理'
        onConfirm={() => {setShowModal(false); Taro.navigateTo({url: '/pages/repay/index'}); }}
      />
    </View>
  )
}

export default Withdraw