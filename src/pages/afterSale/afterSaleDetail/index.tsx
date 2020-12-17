import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import ImgCmp from '@/components/ypImg'
import './index.styl'

const AfterSaleDetail = (props) => {
	const router = useRouter() //{ path: '', params: { ... } }
	console.log(router, 'routterr')

	return (
		<View className='afterSaleDetail'>
			<View className='flex_center_between_row orderInfo bgcStyle'>
				<Text className='orderInfoId'>{`订单号：23456666665`}</Text>
				<Text className='orderInfoStatus'>审核中</Text>
			</View>

			<View className='bgcStyle'>
				<View className='title'>商品信息</View>
				<View className={`flex_center_between_row goodInfo`}>
					<View style={{width: 60, height: 60}}><ImgCmp width={60} height={60}/></View>
					<View className='goodInfoDes flex_center_between__column'>
						<View >商品名称商品名称商品名称商品名称商</View>
						<View className='flex_center_between_row'>
							<Text className='oval'>{`规格500g  |  数量 `}<Text style={{color: '#ff4400'}}>x23</Text></Text>
							<Text >退款金额：<Text style={{color: '#ff4400', fontWeight: 400}}>￥7653</Text></Text>
						</View>
					</View>
				</View>
				<View className='goodInfoFooter'>商品ID：63774467758888</View>
			</View>

			<View className='bgcStyle basicInfo'>
				<View className='title'>基本信息</View>
				<View>售后原因 商品质量问题</View>
				<View>退款编号 137645873539</View>
				<View>下单时间 2020-33-1 14:23:12</View>
				<View>售后申请时间 2020-33-1 14:23:12</View>
				<View>自提点信息 重启谊品生鲜xx店</View>
			</View>
		</View>
	)
}

export default AfterSaleDetail