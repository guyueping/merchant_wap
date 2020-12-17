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
  noArrow?: boolean;
}

const headerHeightStyles = { height: 44, paddingTop: Taro.$statusBarHeight }

const Header = (props: I_Header) => {

  const handleBack = () => {
    Taro.navigateBack()
    // console.log('props.navUrl>>', props.navUrl)
    // navigateTo({ url: props.navUrl })
  }
  return (
    <View>
      <View className={styles.head_box} style={{...props.style, ...headerHeightStyles }}>
        <View className={`${styles.head_container} flex_center_center_row`}>
          {!props.noArrow && (
            <View className={`${styles.back_button} flex_center_start_row`} onClick={handleBack}>返回</View>
          )}
          <Text>{props.title || ''}</Text>
        </View>
      </View>
      <View style={headerHeightStyles}></View>
    </View>
  )
}

export default Header


// export const HeaderShadow = () => <View style={headerHeightStyles}></View>