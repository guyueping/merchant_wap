import React, { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import iconHelp from '@/images/icon_help.png'
import iconForgetPwd from '@/images/icon_forget_pwd.png'
import iconPayPwd from '@/images/icon_pay_pwd.png'
import iconRegisterPwd from '@/images/icon_register_pwd.png'
import iconAvatar from '@/images/icon_avatar.png'
import Modal from '@/components/modal'
import MnLayout from '@/components/mnLayout'
import req from '@/utils/mnRequest'
import './index.styl'

const Mine = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // queryData()
  }, [])

  // const queryData = async () => {
  //   // Taro.showModal()
  //   Taro.showLoading({ title: '数据加载中...', mask: true })
  //   try {
  //     const res = await req.post(queryAccountBalance)
  //     console.log('res>>', res)
  //     // setData()
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     Taro.hideLoading()
  //   }
  // }

  const handleCancel = () => {
    console.log('handleCancel')
    setShowModal(false)
  }

  const handleConfirm = () => {
    console.log('handleConfirm')
    setShowModal(false)
    Taro.navigateTo({ url: '/pages/login/index' })
  }

  const handleQuit = () => {
    setShowModal(true)
  }

  return (

    <MnLayout tabPath='/pages/mine/index' title='我的' hideArrow navStyle={{ backgroundColor: '#4F5AF7', color: '#ffffff' }} statusBarStyle={{ backgroundColor: '#4F5AF7' }}>
      <View className='minePage_box'>
        <View className='topBox'></View>
        <AtList className='merchant_info_box'>
          <AtListItem
            title='安徽省衍东贸易有限公司'
            note='188****6596'
            arrow='right'
            thumb={iconAvatar}
            onClick={() => { Taro.navigateTo({ url: '/pages/mine/accountDetail/index' }) }}
          />
        </AtList>
        <AtList className='items_box'>
          <AtListItem
            title='帮助'
            arrow='right'
            thumb={iconHelp}
            onClick={() => { Taro.navigateTo({ url: `/pages/webView/index?url=${encodeURIComponent('https://universal-h5.ypshengxian.com/help/index.html')}` }) }}
          />
          <AtListItem
            title='修改登录密码'
            arrow='right'
            thumb={iconForgetPwd}
            onClick={() => { Taro.navigateTo({ url: '/pages/resetPwd/index?type=1&&account=18368108866' }) }}
          />
          <AtListItem
            title='修改支付密码'
            arrow='right'
            thumb={iconPayPwd}
            onClick={() => { Taro.navigateTo({ url: `/pages/webView/index?url=${encodeURIComponent('xxxxxx')}` }) }}
          />
          <AtListItem
            title='忘记支付密码'
            arrow='right'
            thumb={iconRegisterPwd}
            onClick={() => { Taro.navigateTo({ url: `/pages/webView/index?url=${encodeURIComponent('xxxxxx')}` }) }}
          />
        </AtList>
        <AtButton className='quit_button' onClick={handleQuit}>退出登录</AtButton>
        <Modal show={showModal} content='您确定要退出系统吗' title='温馨提示' onCancel={handleCancel} onConfirm={handleConfirm} />
      </View>
    </MnLayout >
  )
}
export default Mine

