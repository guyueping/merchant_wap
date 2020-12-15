import React from 'react'
import { View } from '@tarojs/components'
import { AtFloatLayout } from 'taro-ui'
import './index.styl'

interface I_PopBottom{
  children?: any;
  onCancel?: () => void;
  onConfirm?: () => void;
  show?:boolean;
}

const PopBottom = (props: I_PopBottom) => {
  const handleCancel = () => {
    props.onCancel && props.onCancel()
  }

  const handleConfirm = () => {
    props.onConfirm && props.onConfirm()
  }

  return (
    <View className='pop_bottom_box'>
      <AtFloatLayout isOpened={props.show || false} onClose={handleCancel}>
        <View className='pop_bottom_button_box flex_center_between_row'>
          <View onClick={handleCancel} className='pop_bottom_button'>取消</View>
          <View onClick={handleConfirm} className='pop_bottom_button'>确定</View>
        </View>
        {props.children}
      </AtFloatLayout>
    </View>
  )
}

export default PopBottom


