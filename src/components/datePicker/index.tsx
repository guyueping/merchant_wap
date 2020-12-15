import React, { useState } from 'react'
import { View, PickerView,  PickerViewColumn} from '@tarojs/components'
import styles from './index.module.styl'
import PopBottom from '@/components/popBottom'

const getDate = () => {
  const date = new Date()
  const years: Array<number> = []
  const months: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const currentYear = date.getFullYear()
  const currentMonth = date.getMonth() + 1
  for (let i = currentYear - 4; i <= currentYear; i++) {
    years.push(i)
  }
  return {years, months, year: currentYear, month: currentMonth}
}

interface I_DatePicker{
  children?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: (obj: any) => void;
  year?: number;
  month?: number;
}

const DatePicker = (props: I_DatePicker) => {
  const { years, months, year, month } = getDate()
  const [selectedYear, setSelectedYear] = useState(props.year || year)
  const [selectedMonth, setSelectedMonth] = useState(props.month || month)
  const [value, setValue] = useState([years.indexOf(props.year || year), months.indexOf(props.month || month)])
  const [show, setShow] = useState<boolean>(false)

  const onChange = (e) => {
    const val = e.detail.value
    setValue(val)
    setSelectedYear(years[val[0]])
    setSelectedMonth(months[val[1]])
  }

  const handleCancel = () => {
    setShow(false)
    props.onCancel && props.onCancel()
  }

  const handleConfirm = () => {
    setShow(false)
    props.onConfirm && props.onConfirm({ year: selectedYear, month: selectedMonth })
  }

  const showPop = () => {
    setShow(true)
  }
   

  return (
    <View>
      <View onClick={showPop}>{props.children}</View>
      <PopBottom show={show} onCancel={handleCancel} onConfirm={handleConfirm}>
        <PickerView 
          indicatorStyle='height: 50px;' 
          style='width: 100%; height: 200px; textAlign: center;lineHeight: 50px;' 
          value={value} 
          onChange={onChange}
        >
          <PickerViewColumn>
            {years.map(item => <View key={item}>{item}年</View>)}
          </PickerViewColumn>
          <PickerViewColumn>
            {months.map(item => <View key={item}>{item}月</View>)}
          </PickerViewColumn>
        </PickerView>
      </PopBottom>
    </View>
  )
}

export default DatePicker


