import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import './index.styl'


interface I_PopBottom{
  children?: any;
  onCancel?: () => void;
  onSelect?: (num: number, item?: string) => void;
  options?: Array<string>;
}

const PopSelect = (props: I_PopBottom) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCancel = () => {
    props.onCancel && props.onCancel()
    setIsOpen(false)
  }

  const handleSelect = (index: number) => {
    props.onSelect && props.onSelect(index)
    setIsOpen(false)
  }

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <View className='pop_select_box'>
      <View onClick={handleClick}>{props.children}</View>
      <AtActionSheet isOpened={isOpen} cancelText='取消' onCancel={handleCancel}>
        {(props.options || []).map((item: string, index: number) => <AtActionSheetItem key={item} onClick={() => handleSelect(index, item)}>{item}</AtActionSheetItem>)}
      </AtActionSheet>
    </View>
  )
}

export default PopSelect


