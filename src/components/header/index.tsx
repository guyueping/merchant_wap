import React from 'react'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import styles from './index.module.styl'

interface I_Header {
  title?: string;
  bgColor?: string;
  navUrl?: string;
  className?: any;
  style?: any;
}

const Header = (props: I_Header) => {
  const handleBack = () => {
    Taro.navigateTo({ url: props.navUrl })
  }
  return (
    <View className={styles.head_box} style={{backgroundColor: props.bgColor || '#4D66FF', ...props.style}}>
      <View className={styles.back_button} onClick={handleBack}>返回</View>
      <Text>{props.title || ''}</Text>
    </View>
  )
}

export default Header