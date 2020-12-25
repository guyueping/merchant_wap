import React, { useState, useEffect } from 'react'
import { View, Text, Image } from '@tarojs/components'
import List, { ListLayout } from '@/components/list'
import req from '@/utils/mnRequest'
import { queryMerchantSalesDetail, queryMerchantSales } from '@/api/api'
import moment from 'moment'
import Taro from "@tarojs/taro";
import styles from './index.module.styl'
import MnLayout from '@/components/mnLayout'
import { delayAction, ellipsis } from '@/utils'
import { getWifiList } from '@tarojs/taro'
import { getDate } from '../records/constants'
interface detailItem {
  merchantId: string,
  merchantName: string
  merchantItemId: string,
  merchantItemSkuId: string,
  saleDate: string,
  specificationDesc: string,
  cover: string,
  skuQuantity: number,
  skuStock: number,
  sales: number
}
const SaleList = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [goodList, setGoodList] = useState<Array<detailItem>>([])
  const [pageSize, setPageSize] = useState(10)
  const [pageNumber, setPageNumber] = useState(1)
  const [isEnd, setisEnd] = useState(false)
  const [skuQuantity, setskuQuantity] = useState(0)
  const [totalSales, settotalSales] = useState(0)
  const [date, setDate] = useState(null)
  const [ifCanReload, setCanReload] = useState(true)
  useEffect(() => {
    // getList()
    // getSales()
    getInit()
  }, [])
  const getInit = () => {
    const now: any = moment().format('YYYY-MM-DD HH:mm')
    setDate(now)
    getList({ now, page: 1 })
    getSales()
  }
  const getSales = async () => {
    let { result } = await req.post(
      queryMerchantSales
    )
    if (result) {
      const { totalSales, skuQuantity } = result
      setskuQuantity(skuQuantity)
      settotalSales(totalSales)
    }
  }
  const getList = async ({ page = pageNumber, now = date }) => {
    setShowLoading(true)
    let { result } = await req.post(
      queryMerchantSalesDetail,
      {
        pageSize,
        pageNumber: page,
        saleDate: moment(now)
      }
    )
    if (result) {
      const { merchantSaleDetail = [], page, isEnd } = result
      const l = page === 1 ? merchantSaleDetail : goodList.concat(merchantSaleDetail)
      setGoodList(l)
      setPageNumber(page + 1)
      setShowLoading(false)
      setisEnd(isEnd)
    }
  }
  const onScrollToLower = () => {
    if (isEnd) {
      return
    }
    getList({})
  }
  const onRefresherRefresh = () => {
    delayAction(5, () => {
      getInit()
    })
  }

  const listItem = (it: detailItem) => {
    return (

      <View className={styles.list_item}>
        {/* <Image className={styles.img}
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        /> */}
        <View className={styles.right}>
          <View className={styles.head}>{ellipsis(`${it.merchantName}`, 34)} {it.specificationDesc}</View>
          <View className={styles.bottom}>
            <Text className={styles.price}>¥{it.sales}</Text>
            <Text>已售<Text className={styles.strong}>{it.skuQuantity}</Text>份</Text>
            <Text>剩余：<Text className={`${styles.strong} ${styles.blue_font}`}>{it.skuStock}</Text></Text>
          </View>
        </View>
      </View>

    )
  }
  return (
    <MnLayout arrowType={2} title='实时销售' hideArrow={false} navStyle={{ backgroundColor: '#4F5AF7', color: '#ffffff' }} statusBarStyle={{ backgroundColor: '#4F5AF7' }}>
      <ListLayout className={styles.content}>
        <View className={styles.top}>
          <Text className={styles.left}>{date}</Text>
          {/* <View className={styles.right}>{date}
            <View className={`at-icon at-icon-reload ${styles.icon_reload}`}></View>
          </View> */}
        </View>
        <View className={styles.cardbox}>
          <View className={styles.item}>
            <Text className={styles.title}>今日营业额</Text>
            <View className={styles.numbox}><Text className={styles.icon}>¥</Text><Text className={styles.num}>{totalSales}</Text></View>
          </View>
          <View className={styles.item}>
            <Text className={styles.title}>已售份数</Text>
            <View className={styles.numbox}><Text className={styles.num}>{skuQuantity}</Text></View>
          </View>
        </View>
        <List onScrollToLower={onScrollToLower} showLoadMore={showLoading} onRefresherRefresh={onRefresherRefresh} >
          <View className={styles.list}>
            {goodList.map(item => listItem(item))}
          </View>
        </List>

      </ListLayout>
    </MnLayout>
  )
}
export default SaleList