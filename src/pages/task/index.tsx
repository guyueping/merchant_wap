import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { navigateTo } from '@tarojs/taro'
import List, { ListLayout } from '@/components/list'
import styles from './index.module.styl'

const Task = () => {

  const [datas, setDatas] = useState<Array<inner>>([])
  const [goodlist, setGoodList] = useState([])
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
    let l: any = [
      {
        time: '2020-12-30',
        num: 30,
      },
      {
        time: '2020-12-29',
        num: 30,
      },
      {
        time: '2020-12-27',
        num: 30,
      },
      {
        time: '2020-11-30',
        num: 30,
      }, {
        time: '2020-11-30',
        num: 30,
      },
      {
        time: '2020-11-30',
        num: 30,
      },
      {
        time: '2020-11-30',
        num: 30,
      },
      {
        time: '2020-11-30',
        num: 30,
      }, {
        time: '2020-11-30',
        num: 30,
      }, {
        time: '2020-11-30',
        num: 30,
      }
    ]
    setDatas(l)
  }, [])
  useEffect(() => {
    if (datas.length > 0) {
      console.log(">>>change")
      filterData(datas)
    }
  }, [datas])
  const filterData = (datas) => {
    console.log(">>><<<<<datas", datas)
    const months: any = []
    datas.map((item: inner) => {
      const { time } = item
      const arr = time.split('-')
      const it = `${arr[0]}年${arr[1]}月`
      const x = months.findIndex(r => r.date === it)
      if (x < 0) {
        months.push({
          date: it,
          list: [
            item
          ]
        })
      } else {
        months[x].list.push(item)
      }
    })
    const l = months.sort((a: goodInner, b: goodInner) => {
      const A: any = a.date.split('年')[1].split('月')[0]
      const B: any = b.date.split('年')[1].split('月')[0]
      return (B - 0) - (A - 0)
    })
    setGoodList(l)
  }
  const onScrollToLower = () => {
    setLoading(true)
    setTimeout(() => {
      let l: Array<inner> = datas
      for (let i = 0; i <= 9; i++) {
        l.push({
          time: `2020-${i}-27`,
          num: 20,
        })
      }
      setDatas(l)
      filterData(l)
      setLoading(false)
    }, 1000)
  }
  const goDtail = () => {
    navigateTo({ url: '/pages/taskDetail/index' })
  }
  return (
    <ListLayout className={styles.content}>
      <View className={styles.mes}>
        <View className={`at-icon at-icon-volume-minus ${styles.vol}`}></View>
        <Text>每日晚22:00更新截单</Text>
      </View>
      <List onScrollToLower={onScrollToLower} showLoadMore={loading}>
        {
          goodlist.map((item: goodInner) =>
            <View className={styles.item}>
              <View className={styles.head}>{item.date}</View>
              {item.list.map((it: inner) =>
                <View className={styles.info} onClick={goDtail}>
                  <Text className={styles.left}>{it.time}</Text>
                  <View className={styles.right}>
                    <Text>已售份数</Text>
                    <Text className={styles.num}>{it.num}</Text>
                    <View className={`at-icon at-icon-chevron-right ${styles.icon}`}></View>
                  </View>
                </View>
              )}
            </View>
          )
        }
      </List>

      {/* <Picker
          mode='date'
          fields='month'
          onChange={onDateChange}>
          <AtList>
            <AtListItem title='请选择日期' />
          </AtList>
        </Picker> */}
    </ListLayout>
  )
}
export default Task