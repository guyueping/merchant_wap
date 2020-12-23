import React from 'react'
import { View, Button, Image } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import popWarning from '@/images/pop_warning.png'
import './index.styl'


interface I_Modal{
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
  show?: boolean;
  content?: string | React.ReactNode;
  title?: string | React.ReactNode;
  confirmText?: string | React.ReactNode;
  cancelText?: string | React.ReactNode;
  closeText?: string | React.ReactNode;
  popWarning?: boolean;
  children?: React.ReactNode;
}

const Modal = (props: I_Modal) => {
  
  return (
    <View className='modal_component_box'>
      {props.children ? (
        <AtModal isOpened={props.show || false}>
          {props.children}
        </AtModal>
      ) : (
        <AtModal isOpened={props.show || false}>
          {props.title && <AtModalHeader>{props.title}</AtModalHeader>}
          {props.popWarning && <Image className='warning_title' src={popWarning} />}
          <AtModalContent>
            {props.content}
          </AtModalContent>
          <AtModalAction> 
            {props.onCancel && <Button onClick={props.onCancel}>{props.cancelText || '取消'}</Button>} 
            {props.onConfirm && <Button onClick={props.onConfirm}>{props.confirmText || '确定'}</Button>}
            {props.onClose && <Button onClick={props.onClose}>{props.closeText || '确定'}</Button>} 
          </AtModalAction>
        </AtModal>
      )}
    </View>    
  )
}

export default Modal