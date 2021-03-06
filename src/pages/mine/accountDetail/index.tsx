import React, { useState } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtList, AtListItem } from 'taro-ui'
import MnLayout from '@/components/mnLayout'
import './index.styl'


const AccountDetail = () => {
  
  return (
    <MnLayout tabPath='/pages/mine/accountDetail/index' title='我的资料' hideArrow={false}>
      <AtList className='account_detail_page_box'>
        <AtListItem title='销售商'  extraText='安徽省衍东贸易有限公司' />
        <AtListItem title='管理员' extraText='管理员名字' />
        <AtListItem title='手机号' extraText='18913243246' />
      </AtList>
    </MnLayout>
  )
}

export default AccountDetail