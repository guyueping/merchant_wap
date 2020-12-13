import React from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtList, AtListItem } from 'taro-ui'
import './index.styl'
import iconHelp from '@/images/icon_help.png'
import iconOpinion from '@/images/icon_opinion.png'
import iconAvatar from '@/images/icon_avatar.png'

const Mine = () => {
  
  return  (
    <View className='minePage_box'>
      <View className='topBox'></View>
      <AtList className='merchant_info_box'>
        <AtListItem
          title='安徽省衍东贸易有限公司'
          note='188****6596'
          arrow='right'
          thumb={iconAvatar}
        />
      </AtList>
      <AtList className='items_box'>
        <AtListItem
          title='帮助'
          arrow='right'
          thumb={iconHelp}
        />
        <AtListItem
          title='意见反馈'
          arrow='right'
          thumb={iconOpinion}
        />
      </AtList>
      <AtButton className='quit_button'>退出登录</AtButton>
    </View>
  )
}
export default Mine

