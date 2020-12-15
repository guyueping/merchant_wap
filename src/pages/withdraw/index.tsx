import React from 'react'
import { View } from '@tarojs/components'
import styles from './index.module.styl'
import bgImg from '@/images/bg.png'
import Header from '@/components/header'

const Withdraw = () => {
  
  return  (
    <View className={styles.withdraw_page_box}>
      <View className={styles.top_box}>
        <Header title='账户资金' />
        <View className='flex_center_center_column'>
          <View className={styles.can_text}>可提现金额</View>
          <View className={styles.amount_txt}>¥18,540.00</View>
          <View className={styles.froze_txt}>已冻结¥100.00</View>
        </View>
      </View>
    </View>
  )
}
export default Withdraw