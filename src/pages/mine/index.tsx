import React, { useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import './index.styl'
import iconHelp from '@/images/icon_help.png'
import iconOpinion from '@/images/icon_opinion.png'
import iconAvatar from '@/images/icon_avatar.png'
import Modal from '@/components/modal'

const Mine = () => {
  const [showModal, setShowModal] = useState(false)
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
  
  return  (
    <View className='minePage_box'>
      <View className='topBox'></View>
      <AtList className='merchant_info_box'>
        <AtListItem
          title='安徽省衍东贸易有限公司'
          note='188****6596'
          arrow='right'
          thumb={iconAvatar}
        />
      </AtList>
      <AtList className='items_box'>
        <AtListItem
          title='帮助'
          arrow='right'
          thumb={iconHelp}
        />
        <AtListItem
          title='意见反馈'
          arrow='right'
          thumb={iconOpinion}
        />
      </AtList>
      <AtButton className='quit_button' onClick={handleQuit}>退出登录</AtButton>
      <Modal show={showModal} content='确定要退出系统吗' onCancel={handleCancel} onConfirm={handleConfirm} />
    </View>
  )
}
export default Mine

