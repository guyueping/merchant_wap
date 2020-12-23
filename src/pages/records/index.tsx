import React, { useState, useEffect } from 'react'
import Taro, { useShareAppMessage, usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import List, { ListLayout } from '@/components/list'
import DatePicker from '@/components/datePicker'
import PopSelect from '@/components/popSelect'
import MnLayout from '@/components/mnLayout'
import Tags from '@/components/tag'
import ListItem from './listItem/index'
import './index.styl'
// import styles from './index.modules.styl'
const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return {year, month}
}
const typeAry = ['全部', '提现', '垫付还款']
const ary = [12]
const status = [{label: '全部', value: 0}, {label: '处理中', value: 1}, {label: '交易成功', value: 2}, {label: '交易失败', value: 3}]
const Records = () => {
  const {year, month} = getDate()

  const [dateSelectOpen, setDateSelectOpen] = useState(false)
  const [typeSelectOpen, setTypeSelectOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)
  // const [selectedDate, setSelectedDate] = useState(`${year}年${month}月`)
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

  const onDateConfirm = d => {
    setSelectedYear(d.year)
    setSelectedMonth(d.month)
    // setSelectedDate(`${d.year}年${d.month}月`)
    setDateSelectOpen(false)
  }

  const dateCancel = () => {
    setDateSelectOpen(false)
  }

  const onTypeSelect = (selectIndex: number, item: string) => {
    setSelectedType(selectIndex || 0)
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

  const onStatusChange = (value) => {
    console.log('value:', value)
  }


  return  (
    <MnLayout title='资金记录' hideArrow={false}>
      <ListLayout className='accountPage_box'>
        <View className='condition_box flex_center_center_row'>
          <View className={`selection flex_center_center_row${dateSelectOpen ? ' selection_open' : ''}`} onClick={handleDateClick}>
            <DatePicker onConfirm={onDateConfirm} onCancel={dateCancel}>
              {selectedYear}年{selectedMonth}月
            </DatePicker>
          </View>
          <View className={`selection flex_center_center_row${typeSelectOpen ? ' selection_open' : ''}`} onClick={handleTypeClick}>
            <PopSelect options={typeAry} onCancel={typeCancel} onSelect={onTypeSelect}>
              {typeAry[selectedType]}
            </PopSelect>
          </View>
        </View>
        <Tags 
          className='tag_box'
          onChange={onStatusChange}
          options={status}
        />
        <List onScrollToLower={onScrollToLower} showLoadMore={showLoading}>
          {ary.map(() => <ListItemWrap month={currentMonth} />)}
        </List>
      </ListLayout>
    </MnLayout>
  )
}
export default Records

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