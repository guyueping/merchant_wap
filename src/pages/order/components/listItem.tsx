import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import styles from './index.module.styl'

const Item = (props) => {
	const { item1 } = props

	const gotoDetail = () => {
		console.log('cliick')
		Taro.navigateTo({
      url: "/pages/order/orderDetail/index?aa=123&bb=456"
    });
	}

  return (
    <View className={`${styles.list_item_box} ${styles.listItemCard}`}>
			<View className={`flex_center_between_row ${styles.itemUp}`}>
				<View className={styles.itemUpLeft}>{item1.orderId}</View>
				<View className={styles.itemUpRight}>{item1.statusText}</View>
			</View>
			<View className={styles.itemMiddle}>
				<View>
					<Text className={styles.greyColor}>商品数量：</Text>
					<Text  className={styles.rightMargin}>{`${item1.amount}份`}</Text>
					<Text className={styles.greyColor}>商品种类：</Text>
					<Text>{`${item1.kind}种`}</Text>
				</View>
				<View className='flex_center_between_row'>
					<View className={styles.greyColor}>{`自提点：${item1.place}`}</View>
					<View className={styles.price}>{`￥${item1.price}`}</View>
				</View>
			</View>
			<View onClick={() => gotoDetail()} className={`${styles.itemDown} flex_center_between_row`}>
				<View>查看详情</View>
				<View className='at-icon at-icon-chevron-right'></View>
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
					<Text>{`合计：${item.sum}份`}</Text>
      </View>
      {item.children.map(item1 => <Item item1={item1}/>)}
    </View>
  )
}

export default ListItemWrap