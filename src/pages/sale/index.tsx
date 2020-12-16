import React, { useState } from 'react'
import { View, Text, Image } from '@tarojs/components'
import List, { ListLayout } from '@/components/list'
import styles from './index.module.styl'
const SaleList = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [goodList, setGoodList] = useState([1, 2, 3, 4, 5])
  const onScrollToLower = () => {
    setShowLoading(true)
    const list = goodList
    setTimeout(() => {
      for (let i = 0; i <= 9; i++) {
        list.push(goodList.length + 1)
      }
      console.log(">>>", list.length)
      setGoodList(list)
      setShowLoading(false)
    }, 1000)

  }
  const listItem = (it) => {
    return (
      <View className={styles.list_item}>
        <Image className={styles.img}
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        />
        <View className={styles.right}>
          <View className={styles.head}>汉釜宫彩虹芝士夹心年糕（南瓜紫薯鹭明雪花培根  500g/袋</View>
          <View className={styles.bottom}>
            <Text>已售<Text className={styles.strong}>{it}</Text>份</Text>
            <Text>剩余：<Text className={`${styles.strong} ${styles.blue_font}`}>20</Text></Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <ListLayout className={styles.content}>
      <View className={styles.top}>
        <Text className={styles.left}>今日数据</Text>
        <View className={styles.right}>2020-12-01 16:09<View className={`at-icon at-icon-reload ${styles.icon_reload}`}></View></View>
      </View>
      <View className={styles.cardbox}>
        <View className={styles.item}>
          <Text className={styles.title}>今日营业额</Text>
          <View className={styles.numbox}><Text className={styles.icon}>¥</Text><Text className={styles.num}>198.00</Text></View>
        </View>
        <View className={styles.item}>
          <Text className={styles.title}>已售份数</Text>
          <View className={styles.numbox}><Text className={styles.num}>198</Text></View>
        </View>
      </View>
      <List onScrollToLower={onScrollToLower} showLoadMore={showLoading}>
        <View className={styles.list}>
          {goodList.map(item => listItem(item))}
        </View>
      </List>

    </ListLayout>
  )
}
export default SaleList