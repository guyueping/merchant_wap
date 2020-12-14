import React, { useState, useEffect } from 'react'
import Taro, { useShareAppMessage, usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import './index.styl'
import ListItem from './listItem/index'
import List from '@/components/list'
// import styles from './index.modules.styl'

const typeAry = ['全部', '提现', '垫付还款']
const ary = [12]
const RecordList = () => {
  const [dateSelectOpen, setDateSelectOpen] = useState(false)
  const [typeSelectOpen, setTypeSelectOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState('2020年11月')
  const [selectedType, setSelectedType] = useState(0)
  const [currentMonth, setCurrentMonth] = useState(12)
  const [showLoading, setShowLoading] = useState(false)


  useShareAppMessage(res => {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  })

  // usePullDownRefresh(() => {
  //   console.log('onPullDownRefresh')
  // })
  
  // useReachBottom(() => {
  //   console.log('onPullDownRefresh')
  // })

  const handleDateClick = () => {
    setDateSelectOpen(!dateSelectOpen)
  }

  const handleTypeClick = () => {
    setTypeSelectOpen(!typeSelectOpen)
  }

  const onDateChange = e => {
    setSelectedDate(e.detail.value)
    setDateSelectOpen(false)
  }

  const dateCancel = () => {
    setDateSelectOpen(false)
  }

  const onTypeChange = e => {
    setSelectedType(e.detail.value * 1 || 0)
    setTypeSelectOpen(false)
  }

  const typeCancel = () => {
    setTypeSelectOpen(false)
  }

  const onScrollToLower = () => {
    if(currentMonth !== 1) {
      setShowLoading(true)
      setTimeout(() => {
        setCurrentMonth(currentMonth - 1)
        ary.push(currentMonth - 1)
        setShowLoading(false)
      }, 1000)
    }
  }


  return  (
    <View className='recordPage_box'>
      <View className='condition_box flex_center_center_row'>
        <View className={`selection flex_center_center_row${dateSelectOpen ? ' selection_open' : ''}`} onClick={handleDateClick}>
          <Picker mode='date' onChange={onDateChange} onCancel={dateCancel}>
            {selectedDate}
          </Picker> 
        </View>
        <View className={`selection flex_center_center_row${typeSelectOpen ? ' selection_open' : ''}`} onClick={handleTypeClick}>
          <Picker mode='selector' range={typeAry} onChange={onTypeChange} onCancel={typeCancel}>
            {typeAry[selectedType]}
          </Picker> 
        </View>
      </View>
      <List onScrollToLower={onScrollToLower} showLoadMore={showLoading}>
        {ary.map(() => <ListItemWrap month={currentMonth} />)}
      </List>
    </View>
  )
}
export default RecordList

const ListItemWrap = (props:any) => {
  return (
    <View>
      <View className='summarybox'>
        <View><Text className='month_text'>{props.month}</Text>月</View>
        <View className='small_text'>提现¥500.00，充值215.00</View>
      </View>
      {Array(20).fill(0).map(each => <ListItem />)}
    </View>
  )
}