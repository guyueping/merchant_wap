import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.styl'
import bgImg from '@/images/bg.png'
import Header from '@/components/header'
import { AtIcon, AtToast } from 'taro-ui'

const Withdraw = () => {
  
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
      <AtToast isOpened text='由于密码错误次数已达到上限导致资金冻结，请稍后尝试提现' duration={5000} />
    </View>
  )
}
export default Withdraw