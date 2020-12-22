import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'
import Modal from '@/components/modal'
import req from '@/utils/mnRequest'
import { queryAccountBalance } from '@/api/api'
import MnLayout from '@/components/mnLayout'
// import Header from '@/components/header'
// import { AtButton } from 'taro-ui'
// // import Toast from '@/components/toast'
// import Modal from '@/components/modal'

const Account = () => {
  const [showToolTip, setShowToolTip] = useState(false)
  const [showModal, setShowModal] = useState(false)
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

  const queryData = async () => {
    // Taro.showModal()
    Taro.showLoading({ title: '数据加载中...', mask: true })
    try {
      const res = await req.post({ apiUrl: queryAccountBalance })
      console.log('res>>', res)
      // setData()
    } catch (err) {
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

  const handleWithdraw = () => {
    if (data.settledAdvanceAmount > 0) {
      setShowModal(true)
    } else {
      Taro.navigateTo({ url: '/pages/withdraw/index' })
    }
  }

  return (
    <MnLayout title='账户资金' hideArrow={false}>
      <View className='withdraw_page_box' onClick={handlePageClick}>
        {data.settledAdvanceAmount > 0 && (
          <View className='warn_text_box flex_center_start_row' onClick={handleWranClick}>
            <View className='icon_box'>
              <View className={`toolTip ${showToolTip ? ' show_toolTip' : ''}`}>垫付资金是当给用户退款时，如原订单资金已过结算周期，则平台会优先垫付资金完成退款，此处即为平台垫付金额。</View>
            </View>
            <Text>当前平台垫付资金欠款</Text>
            <Text className='red'>{data.settledAdvanceAmount}元</Text>
            <Text>，请及时还款后可正常提现</Text>
          </View>
        )}
        <View className='inner_box flex_center_start_column'>
          <View className='withdraw_title'>可提现金额</View>
          <View className='withdraw_amount'><Text className='withdraw_unit'>¥</Text>{data.withdrawableAmount}</View>
          <View className='record_button flex_center_center_row' onClick={() => { Taro.navigateTo({ url: '/pages/records/index' }) }}>查看资金记录</View>
          <View className={data.settledAdvanceAmount > 0 ? 'withdraw_button' : 'repay_button'} onClick={handleWithdraw}>提现</View>
          {data.settledAdvanceAmount > 0 && <View className='repay_button' onClick={() => { Taro.navigateTo({ url: '/pages/repay/index' }) }}>去还款</View>}
          <Modal
            show={showModal}
            content={<View>当前平台垫付资金<Text className='red'>-¥{data.settledAdvanceAmount}元</Text>请先处理欠款后可正常提现</View>}
            popWarning
            onCancel={() => { setShowModal(false) }}
            confirmText='立即处理'
            onConfirm={() => { setShowModal(false); Taro.navigateTo({ url: '/pages/repay/index' }); }}
          />
        </View>
      </View>
    </MnLayout>
  )
}

export default Account