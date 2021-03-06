import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { navigateTo } from '@tarojs/taro'
// import { gridData } from './constants'
import iconSale from '@/images/icon_sale.png'
import iconAccount from '@/images/icon_account.png'
import iconTask from '@/images/icon_task.png'
// import iconOrder from '@/images/icon_order.png'
import iconTotal from '@/images/icon_total.png'
import iconBill from '@/images/icon_bill.png'
// import Modal from '@/components/modal'
import MnLayout from '@/components/mnLayout'
import req, { request } from '@/utils/mnRequest'
import { queryAccountBalance, queryMerchantSales } from '@/api/api'
import { getData } from '@/utils/ypStore'
import './index.styl'


const pageList = ['sale', 'account', 'task', 'afterSale', 'bill', 'order']

const IndexPage = () => {
  const [showToolTip, setShowToolTip] = useState(false)
  const [data, setData] = useState({
    waitSettledAmount: 0.00, // 待结算金额
    settledAdvanceAmount: 0.00,	// 欠款结算金额 ：平台垫付金账户金额
    withdrawableAmount: 0.00,  // 可提现金额
    frozedAmount: 0.00,  // 冻结金额
    availableAmount: 0.00, // 可用余额
    totalSales: 0.00 // 今日销售金额
  })
  const isLogin = getData('token')

  useEffect(() => {
    if (!isLogin) {
      Taro.showModal({
        title: '温馨提示',
        content: '未登录或登录已过期，请登录',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            Taro.navigateTo({ url: '/pages/login/index' })
          }
        }
      })
    } else {
      queryData()
      getMerchantSales()
    }
  }, [])

  const queryData = () => {
    request(queryAccountBalance, {}, '数据加载中...', ({success = false, result = {}}) => {
      if(success) {
        setData({...data, ...result})
      }
    })
  }

  const getMerchantSales = async () => {
    request(queryMerchantSales, {}, '', ({success = false, result = {}}) => {
      if(success) {
        setData({ ...data, totalSales: result.totalSales || 0 })
      }
    })
  }

  const handleWranClick = (e) => {
    e.stopPropagation()
    setShowToolTip(!showToolTip)
  }

  const handlePageClick = (e) => {
    e.preventDefault(); e.stopPropagation();
    showToolTip && setShowToolTip(false)
  }

  // useEffect(() => {
  // Taro.hideShareMenu()
  // console.log('process>>', process.env.NODE_ENV)
  // }, [])


  const handleGridEvent = (index: number) => {
    goTo(`/pages/${pageList[index]}/index`)
  }

  const goTo = (url: string) => {
    navigateTo({ url })
  }


  return (
    <MnLayout tabPath='/pages/index/index' title='谊品生鲜供应商' hideArrow navStyle={{ backgroundColor: '#4F5AF7', color: '#ffffff' }} statusBarStyle={{ backgroundColor: '#4F5AF7' }}>
      <View className='indexPage_box' onClick={handlePageClick}>
        <View className='top_box'></View>
        <View className='amount_box'>
          <View className='withdraw_box'>
            <View className='flex_center_start_row'>
              <View className='withdraw_amount'>{isLogin ? (data.withdrawableAmount * 1).toFixed(2) : '*****'}</View>
              <View className='withdraw_button flex_center_center_row' onClick={() => { handleGridEvent(1) }}>去提现</View>
            </View>
            <View className='widthdraw_text'>可提现金额(元)</View>
          </View>
          <View className='amount_container'>
            <View className='amount_wrap'>
              <View className='amount'>{isLogin ? (data.waitSettledAmount * 1).toFixed(2) : '*****'}</View>
              <View className='amount_name'>待结算金额(元)</View>
            </View>
            <View className='amount_wrap'>
              <View className='amount'>{isLogin ? (data.totalSales * 1).toFixed(2) : '*****'}</View>
              <View className='amount_name'>今日销售额(元)</View>
            </View>
          </View>
          {isLogin && data.frozedAmount > 0 && (
            <View className='warn_text_box flex_center_start_row' onClick={handleWranClick}>
              <View className='icon_box'>
                <View className={`toolTip ${showToolTip ? ' show_toolTip' : ''}`}>当提现失败或中途中止时，提现金额将会被冻结，30分钟后自动解冻。</View>
              </View>
              <Text>当前有冻结资金</Text>
              <Text className='red'>{(data.frozedAmount * 1).toFixed(2)}元</Text>
            </View>
          )}
        </View>
        <View className='map_box'>
          <View className='title'>常用工具</View>
          <View className='grid_box'>
            <View className='flex_center_between_row'>
              <View className='menu_box flex_center_center_column' onClick={() => { handleGridEvent(0) }}>
                <View className='icon_box' style={{ backgroundImage: `url(${iconSale})` }}></View>
                {isLogin && <View>实时销售</View>}
              </View>
              <View className='menu_box flex_center_center_column' onClick={() => { handleGridEvent(1) }} >
                <View className='icon_box' style={{ backgroundImage: `url(${iconAccount})` }}></View>
                {isLogin && <View>账户资金</View>}
              </View>
              <View className='menu_box flex_center_center_column' onClick={() => { handleGridEvent(2) }}>
                <View className='icon_box' style={{ backgroundImage: `url(${iconTask})` }}></View>
                {isLogin && <View>交付任务</View>}
              </View>
            </View>
            <View className='flex_center_between_row'>
              <View className='menu_box flex_center_center_column' onClick={() => { handleGridEvent(3) }}>
                <View className='icon_box' style={{ backgroundImage: `url(${iconTotal})` }}></View>
                {isLogin && <View>售后统计</View>}
              </View>
              <View className='menu_box flex_center_center_column' onClick={() => { handleGridEvent(4) }}>
                <View className='icon_box' style={{ backgroundImage: `url(${iconBill})` }}></View>
                {isLogin && <View>交易流水</View>}
              </View>
              <View className='menu_box flex_center_center_column'>
                <View className='icon_box'></View>
                {isLogin && <View>敬请期待</View>}
              </View>
            </View>
          </View>
        </View>
        {/* <Modal show={showModal} content='未登录或登录已过期，请登录' title='温馨提示' onClose={() => {setShowModal(false)}} /> */}
      </View>
    </MnLayout>
  )
}

export default IndexPage
