import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './index.module.styl'
import Header from '@/components/header'
import { AtButton } from 'taro-ui'
// import Toast from '@/components/toast'
import Modal from '@/components/modal'

const Account = () => {
  const [showModal, setShowModal] = useState(false)
  
  const handleCancel = () => {
    console.log('handleCancel')
    setShowModal(false)
  }

  const handleConfirm = () => {
    console.log('handleConfirm')
    setShowModal(false)
  }

  const handleWithdraw = () => {
    setShowModal(true)
  }

  return  (
    <View className={styles.withdraw_page_box}>
      <View className={styles.top_box}>
        <Header title='账户资金' />
        <View className='flex_center_center_column'>
          <View className={styles.can_text}>可提现金额</View>
          <View className={styles.amount_txt}>¥18,540.00</View>
          <View className={`${styles.froze_txt} flex_center_center_row`}>已冻结¥100.00</View>
        </View>
      </View>
      <View className={styles.button_box}>
        <AtButton className={styles.widthdraw_button} onClick={handleWithdraw}>提现</AtButton>
      </View>
      <View className={`${styles.button_box} flex_center_between_row`}>
        <AtButton className={styles.widthdraw_button}>提现</AtButton>
        <AtButton className={styles.widthdraw_button}>垫付还款</AtButton>
      </View>
      {/* <Toast showToast={true} content='阿双方的是非得失发生的范德萨发' /> */}
      <Modal show={showModal} content='请先补齐平台垫付资金，点击充值进行补齐' onCancel={handleCancel} onConfirm={handleConfirm}/>
      {/* <AtModal 
        isOpened
        // title='标题'
        cancelText='取消'
        confirmText='确认'
        // onClose={ this.handleClose }
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content='请先补齐平台垫付资金，点击充值进行补齐'
      /> */}
    </View>
  )
}
export default Account