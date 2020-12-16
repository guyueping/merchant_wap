import React from 'react'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './index.module.styl'

interface I_Header {
  title?: string;
  // bgColor?: string;
  // navUrl?: string;
  className?: string | undefined;
  style?: any;
}

const { statusBarHeight } = Taro.getSystemInfoSync()

const Header = (props: I_Header) => {

  const handleBack = () => {
    Taro.navigateBack()
    // console.log('props.navUrl>>', props.navUrl)
    // navigateTo({ url: props.navUrl })
  }
  return (
    <View className={`${styles.head_box} flex_center_center_row`} style={{...props.style, height: 36, paddingTop: statusBarHeight }}>
      <View className={styles.back_button} onClick={handleBack}>返回</View>
      <Text>{props.title || ''}</Text>
    </View>
  )
}

export default Header