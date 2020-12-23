import React from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import MnLayout from '@/components/mnLayout'
import banner from '@/images/settle_banner.png'
import styles from './index.module.styl'


const Settle = () => {

  const handleCall = (phoneNumber: string) => {
    Taro.makePhoneCall({ phoneNumber })
  }

  return (
    <MnLayout title='申请入驻' hideArrow={false}>
      <View className={styles.settle_page_box}>
        <Image src={banner} className={styles.banner} mode='widthFix' />
        <View className={styles.divide}></View>
        <View className={styles.title}>谊品生鲜入驻咨询电话</View>
        <View className={styles.mobile_box}>
          <View className={styles.item}>
            <View>酒水乳饮休闲：</View>
            <View className={`${styles.mobile} flex_center_start_row`}>吴群<Text className={styles.phoneNumber} onClick={() => {handleCall('15255127123')}}>152-5512-7123</Text></View>
          </View>
          <View className={styles.item}>
            <View>日用百货：</View>
            <View className={`${styles.mobile} flex_center_start_row`}>吴洋<Text className={styles.phoneNumber} onClick={() => {handleCall('15279022219')}}>152-7902-2219</Text></View>
          </View>
          <View className={styles.item}>
            <View>低温速冻：</View>
            <View className={`${styles.mobile} flex_center_start_row`}>吴强<Text className={styles.phoneNumber} onClick={() => {handleCall('17855392699')}}>178-5539-2699</Text></View>
          </View>
          <View className={styles.item}>
            <View>粮油副食冲调：</View>
            <View className={`${styles.mobile} flex_center_start_row`}>刘浩<Text className={styles.phoneNumber} onClick={() => {handleCall('15255142966')}}>152-5514-2966</Text></View>
          </View>
        </View>
      </View>
    </MnLayout>
  )
}

export default Settle