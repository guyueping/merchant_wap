import React, { useState } from 'react'
import { View } from '@tarojs/components'
import List, { ListLayout } from '@/components/list'
import DatePicker from '@/components/datePicker'
import PopSelect from '@/components/popSelect'
import SearchInput from '@/components/searchInput'
import { AtSearchBar } from "taro-ui"
import ListItem from './components/listItem'
import MnLayout from '@/components/mnLayout'
import { OrderStatus as typeAry, orderData } from './constant' 
import './index.styl'

const getDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return {year, month}
}

const AfterSale = () => {
  const [searchValue, setSearchValue] = useState<any>()
  const [searchStatus, setSearchStatus] = useState(true) //是否显示下来选择
  const [dateSelectOpen, setDateSelectOpen] = useState(false)
  const [typeSelectOpen, setTypeSelectOpen] = useState(false)

  const {year, month} = getDate()
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [selectedType, setSelectedType] = useState(0)
  const [showLoading, setShowLoading] = useState(false)
  const [data, setData] = useState(orderData)

  const onChangeSearchValue = (v) => {
    console.log(v, 'change')
    setSearchValue(v)
  }

  const handleSearchValue = () => {

  }

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

  return  (
    <MnLayout title='售后统计' hideArrow={false}>
      <ListLayout className='afterSalePage'>
        <View style={{backgroundColor: '#fff',}}>
          <SearchInput
            placeholder='请输入订单号/商品名称'
            placeholderStyle='color:#ccc;font-size:13px'
            onChange={onChangeSearchValue}
            onConfirm={handleSearchValue}
            onActionClick={handleSearchValue}
          />
        </View>

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
    </MnLayout>
  )
}
export default AfterSale