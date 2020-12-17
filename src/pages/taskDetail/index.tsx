import React, { useState, useEffect } from 'react'
import { View, Text, Image } from '@tarojs/components'
// import { Picker } from '@tarojs/components'
import List, { ListLayout } from '@/components/list'
import styles from './index.module.styl'
const Taskd = () => {
  const [goodList, setGoodList] = useState([])
  const [loading, setLoading] = useState(false)
  interface inner {
    time: string,
    num?: number
  }
  interface goodInner {
    date: string,
    list: []
  }
  useEffect(() => {
    const l: any = [1, 2, 3, 4]
    setGoodList(l)
  }, [])


  const onScrollToLower = () => {
    setLoading(true)
    const list: any = goodList
    setTimeout(() => {
      for (let i = 0; i <= 2; i++) {
        list.push(goodList.length + 1)
      }
      console.log(">>>", list.length)
      setGoodList(list)
      setLoading(false)
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
          </View>
        </View>
      </View>
    )
  }
  return (
    <ListLayout className={styles.content}>
      <View className={styles.mes}>
        <View className={`at-icon at-icon-volume-minus ${styles.vol}`}></View>
        <Text>每日晚22:00更新截单</Text>
      </View>
      <View className={styles.top_time}>
        <Text>截单时间：2020-11-28 22:00:00</Text>
        <Text>合计：226份</Text>
      </View>
      <List onScrollToLower={onScrollToLower} showLoadMore={loading}>
        {goodList.map(item => listItem(item))}
      </List>
    </ListLayout>
  )
}
export default Taskd