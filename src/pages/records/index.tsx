import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import styles from './index.module.styl'

const tabList = [{ title: '全部' }, { title: '提现' }, { title: '垫付还款' }]

const List = () => {
  const [currentTab, setCurrentTab] = useState<number>(0)

  const handleClick = (tabIndex: number) => {
    currentTab !== tabIndex && setCurrentTab(tabIndex)
  }
  return  (
    <View className={styles.recordPage_box}>
      <AtTabs current={currentTab} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={currentTab} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={currentTab} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  )
}
export default List