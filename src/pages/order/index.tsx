import React, { useState } from 'react'
import { View, Picker } from '@tarojs/components'
import { AtList, AtListItem, AtSearchBar } from "taro-ui"
import DatePicker from '@/components/datePicker'
import PopSelect from '@/components/popSelect'
import List, { ListLayout } from '@/components/list'
import { OrderStatus as typeAry, orderData } from './constant'
import ListItem from './components/listItem'
import './index.styl'

const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return {year, month}
}

const Order = () => {
  const {year, month} = getDate()
  const [data, setData] = useState(orderData)
  const [searchValue, setSearchValue] = useState<any>()
  const [typeSelectOpen, setTypeSelectOpen] = useState(false)
  const [dateSelectOpen, setDateSelectOpen] = useState(false)
  // const [selectedDate, setSelectedDate] = useState('2020年11月')
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [selectedType, setSelectedType] = useState(0)
  const [showLoading, setShowLoading] = useState(false)
  const [searchStatus, setSearchStatus] = useState(true)
 
  

  const onDateChange = (d) => {
    // setSelectedDate(e.detail.value)
    setSelectedYear(d.year)
    setSelectedMonth(d.month)
    
    setDateSelectOpen(false)
  }

  const dateCancel = () => {
    setDateSelectOpen(false)
  }

  const onChangeSearchValue = (v) => {
    console.log(v, 'change')
    setSearchValue(v)
  }

  const handleSearchValue = () => {

  }

  const handleDateClick = () => {
    setDateSelectOpen(!dateSelectOpen)
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

  return (
    <ListLayout className='orderPage'>
      <AtSearchBar
        showActionButton
        value={searchValue}
        onChange={onChangeSearchValue}
        onActionClick={handleSearchValue}
        placeholder='请输入手机号/订单编号'
      />

      {
        searchStatus ? 
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
          </View> : null
      }
      

      <List 
        onScrollToLower={onScrollToLower} 
        onRefresherRefresh={onRefresherRefresh}
        showLoadMore={showLoading}>
        {data.map((item: any) => <ListItem item={item} month={12} />)}
      </List>

    </ListLayout>
  )
}
export default Order
