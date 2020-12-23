import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import List, { ListLayout } from '@/components/list'
import DatePicker from '@/components/datePicker'
import PopSelect from '@/components/popSelect'
import Tag from '@/components/tag'
import { OrderStatus as typeAry, orderData, billStatusOptions } from './constant' 
import ListItem from './components/listItem'
import MnLayout from '@/components/mnLayout'
import './index.styl'

const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return {year, month}
}

const Bill = () => {
  const [dateSelectOpen, setDateSelectOpen] = useState(false)
  const [typeSelectOpen, setTypeSelectOpen] = useState(false)

  const {year, month} = getDate()
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [selectedType, setSelectedType] = useState(0)
  const [showLoading, setShowLoading] = useState(false)
  const [data, setData] = useState(orderData)

  const handleDateClick = () => {
    setDateSelectOpen(!dateSelectOpen)
  }

  const onDateChange = (d) => {
    // setSelectedDate(e.detail.value)
    setSelectedYear(d.year)
    setSelectedMonth(d.month)
    
    setDateSelectOpen(false)
  }

  const dateCancel = () => {
    setDateSelectOpen(false)
  }

  const handleTypeClick = () => {
    setTypeSelectOpen(!typeSelectOpen)
  }

  const onTypeChange = (selectIndex: number, item: string) => {
    setSelectedType(selectIndex ?? 0)
    setTypeSelectOpen(false)
    
  }

  const typeCancel = () => {
    setTypeSelectOpen(false)
  }

  const onScrollToLower = () => {
    setShowLoading(true)
    setTimeout(() => {
      setData(data.concat(data))
      setShowLoading(false)
    }, 1000);
    
  }

  const onRefresherRefresh = () => {
    console.log('reflessh')
  }

  const onBillStatusChange = (v) => {
    console.log(v,'vvvalue')
  }

  return (
    <MnLayout title='结账单' hideArrow={false}>
    <ListLayout className='bill'>
      <View className='condition_box flex_center_center_row'>
        <View className={`selection flex_center_center_row${dateSelectOpen ? ' selection_open' : ''}`} onClick={handleDateClick}>
          <DatePicker mode='date' onConfirm={onDateChange} onCancel={dateCancel}>
            {selectedYear}年{selectedMonth}月
          </DatePicker> 
        </View>
        <View className={`selection flex_center_center_row${typeSelectOpen ? ' selection_open' : ''}`} onClick={handleTypeClick}>
          <PopSelect options={typeAry} onSelect={onTypeChange} onCancel={typeCancel}>
            {typeAry[selectedType]}
          </PopSelect> 
        </View>
      </View>

      <View className='tagSection'>
        <Tag 
          onChange={onBillStatusChange}
          options={billStatusOptions}
        />
      </View>

      <List 
        onScrollToLower={onScrollToLower} 
        onRefresherRefresh={onRefresherRefresh}
        showLoadMore={showLoading}>
        {data.map((item: any) => <ListItem item={item} month={12} />)}
      </List>

    </ListLayout>
    </MnLayout>
  )
}
export default Bill