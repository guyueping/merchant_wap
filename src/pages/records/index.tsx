import React, { useState, useEffect } from 'react'
import Taro, { useShareAppMessage } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import List, { ListLayout } from '@/components/list'
import DatePicker from '@/components/datePicker'
import PopSelect from '@/components/popSelect'
import MnLayout from '@/components/mnLayout'
import Tags from '@/components/tag'
import req from '@/utils/mnRequest'
import { queryBalanceTradeList } from '@/api/api'
import ListItem from './listItem/index'
import './index.styl'
import { getDate, typeAry, statusAry, status, I_TradeRecords } from './constants'
import mockData from './mockData'

// import styles from './index.modules.styl'

const ary = [12]
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

  const [reqData, setReqData] = useState({
    balanceTradeType: 0, // 交易类型：0 全部，1 充值， 2 提现
    tradeStatus: 0, // 交易状态：0 全部，1 处理中， 2 成功，3 失败
    // tradeTimeFrom: // 开始时间 Timestamp
    // tradeTimeTo: // 结束时间 Timestamp newData(2020,12,0) 23:59:59
    page: 1,
    size: 30
  })

  useEffect(() => {
    queryData()
  }, [reqData])

  const queryData = async () => {
    // Taro.showModal()
    Taro.showLoading({ title: '数据加载中...', mask: true })
    try {
      const {success = false, result = {}} = await req.post(queryBalanceTradeList,reqData)
      const {isEnd, list = [], page, size, total, summary = {}} = result

      // console.log('res>>', res)
      // setData()
    } catch (err) {
      console.log(err)
    } finally {
      Taro.hideLoading()
    }
  }


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
      {mockData.map((each, index: number) => <ListItem data={each} key={index} />)}
    </View>
  )
}