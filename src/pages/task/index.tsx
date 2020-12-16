import React from 'react'
import { View } from '@tarojs/components'
import CommonList from '@/components/CommonList/index'
import { AtList, AtListItem } from "taro-ui"
import { pullDownReload } from '../../utils/index'
import { Picker } from '@tarojs/components'

const Task = () => {

  const onTouchEnd = (e) => {
    pullDownReload(e, ()=> console.log(222333))
  }

  const onDateChange = () => {

  }
  
  return (
    <View onTouchEnd={onTouchEnd}>
      <View>
        <Picker 
          mode='date' 
          fields='month'
          onChange={onDateChange}>
          <AtList>
            <AtListItem title='请选择日期' />
          </AtList>
        </Picker>
      </View>

      {/* <CommonList
        ListItem={AtListItem}
        queryDataUrl='mock.url'
        /> */}
    </View>
  )
}
export default Task