import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import ImgCmp from '@/components/ypImg'
import styles from './index.module.styl'

const Item = (props) => {
	const { item1 } = props

	const gotoDetail = () => {
		console.log('cliick')
		Taro.navigateTo({
      url: "/pages/afterSale/afterSaleDetail/index?aa=123&bb=456"
    });
	}

  return (
    <View className={`${styles.list_item_box} ${styles.listItemCard}`}>
			<View className={`flex_center_between_row ${styles.itemUp}`}>
				<View className={styles.itemUpLeft}>{`退款编号：${item1.orderId}`}</View>
				<View className={styles.itemUpRight}>{item1.statusText}</View>
			</View>
			<View className={`flex_center_between_row ${styles.itemMiddle}`}>
				<View style={{width: 70, height: 70}}><ImgCmp width={70} height={70}/></View>
				<View className={styles.itemMiddleDes}>
					<View >{item1.name}</View>
					<View className='flex_center_between_row'>
						<Text>总计<Text style={{color: '#333'}}>{item1.amount}</Text>件</Text>
						<Text >退款金额：<Text style={{color: '#333', fontWeight: 'bold'}}>{`￥${item1.price}`}</Text></Text>
					</View>
				</View>
			</View>
			<View onClick={() => gotoDetail()} className={`${styles.itemDown} flex_center_between_row`}>
				<View>{`订单编号：${item1.orderId}`}</View>
				<View>
					<Text>查看详情</Text>
					<View className='at-icon at-icon-chevron-right'></View>
				</View>
			</View>	
    </View>
  )
}

const ListItemWrap = (props:any) => {
	const { item } = props

  return (
    <View className={styles.listItemWrapper}>
      <View className={`flex_center_between_row ${styles.listItemTite}`}>
					<Text className={styles.month_text}>{item.date}</Text>
      </View>
      {item.children.map(item1 => <Item item1={item1}/>)}
    </View>
  )
}

export default ListItemWrap