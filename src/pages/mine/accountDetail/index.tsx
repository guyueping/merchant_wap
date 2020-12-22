import React, { useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui'
import './index.styl'


const AccountDetail = () => {
  
  return (
    <AtList className='account_detail_page_box'>
      <AtListItem title='销售商'  extraText='安徽省衍东贸易有限公司' />
      <AtListItem title='管理员' extraText='管理员名字' />
      <AtListItem title='手机号' extraText='18913243246' />
    </AtList>
  )
}

export default AccountDetail