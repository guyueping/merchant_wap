import React from 'react'
import { View } from '@tarojs/components'
import './index.styl'
import { AtModal } from 'taro-ui'


interface I_Modal{
  onCancel?: () => void;
  onConfirm?: () => void;
  show?: boolean;
  content?: string;
}

const Modal = (props: I_Modal) => {

  const handleCancel = () => {
    console.log('handleCancel')
    props.onCancel && props.onCancel()
  }

  const handleConfirm = () => {
    console.log('handleConfirm')
    props.onConfirm && props.onConfirm()
  }
  
  return (
    <View className='modal_component_box'>
      <AtModal 
        isOpened={props.show || false}
        // title='标题'
        cancelText='取消'
        confirmText='确认'
        // onClose={ this.handleClose }
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content={props.content}
      />
    </View>
    
  )
}

export default Modal