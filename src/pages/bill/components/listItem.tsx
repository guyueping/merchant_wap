import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import ImgCmp from '@/components/ypImg'
import styles from './index.module.styl'

const ListItem = (props) => {
	const { item1 } = props
	const [fold, setFold] = useState(true)

	const handleClick = () => {
		setFold(!fold)
	}

  return (
    <View className={`${styles.list_item_box} ${styles.listItemCard}`}>
			<View className={`flex_center_between_row ${styles.itemUp}`}>
				<View className={styles.itemUpLeft}>{`${item1.statusText}`}</View>
				<View className={styles.itemUpRight}>{`￥${item1.price}`}</View>
			</View>
			<View className={styles.itemMiddle}>
				{/* <View style={{width: 70, height: 70}}><ImgCmp width={70} height={70}/></View> */}
				<View className={styles.itemMiddleDes}>
					<View >{item1.name}</View>
					<View className='flex_center_between_row'>
						<Text >实付金额:<Text style={{color: '#333'}}>{`￥${item1.price}`}</Text></Text>
						<Text>扣点:<Text style={{color: '#333'}}>10%</Text></Text>
						<Text>核销数量:<Text style={{color: '#333'}}>{item1.amount}</Text></Text>
					</View>
				</View>
			</View>

			{
				fold ?
					<View className={`${styles.itemDown} flex_center_between_row`}>				
						<View>{`支付时间：2020-12-23 12:12:00`}</View>
						<View onClick={() => handleClick()} style={{color: '#4f5af7'}} >
							<Text>展开 </Text>
							<View className='at-icon at-icon-chevron-down'></View>
						</View>
					</View> :
					<View className={`${styles.itemDown}`}>				
						<View>支付时间：2020-12-23 12:12:00</View>
						<View>结算时间：2020-12-23 12:12:00</View>
						<View>订单编号：21243254354655</View>
						<View className='flex_center_between_row'>
							<View>商品编码：1234445523</View>
							<View onClick={() => handleClick()} style={{color: '#4f5af7'}} >
								<Text>收起 </Text>
								<View className='at-icon at-icon-chevron-up'></View>
							</View>
						</View>
					</View>
			}		
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
      {item.children.length && item.children.map(item1 => <ListItem item1={item1}/>)}
    </View>
  )
}

export default ListItemWrap