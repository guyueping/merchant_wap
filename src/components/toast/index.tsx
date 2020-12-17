import React from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.styl'


interface I_Toast{
  showToast?: boolean;
  content?: string;
}

const Toast = (props: I_Toast) => {
  return (
    <View className={styles.toast_component_bg} style={{display: props.showToast ? 'block' : 'none'}}>
      <View className={styles.toast_component_box}>{props.content || ''}</View>
    </View>
    
  )
}

export default Toast