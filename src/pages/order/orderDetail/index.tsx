import React, { useState } from 'react'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import './index.styl'

const OrderDetail = (props) => {
	const router = useRouter() //{ path: '', params: { ... } }
	console.log(router, 'routterr')

	return (
		<View className='orderDetailPage'>
			<View className='receiveInfo'>
				<View className='cardWrapper'>
					<View>
						<View className='at-icon at-icon-map-pin blue'></View>
						<Text className='place'>重庆市碑林区上城街道30号若家自提点</Text>
					</View>
					<View className='receiveMan'>张三 1578839937774</View>
				</View>
			</View>
			<View className='cardWrapper'>
				OrderDetail
			</View>
		</View>
	)
}

export default OrderDetail