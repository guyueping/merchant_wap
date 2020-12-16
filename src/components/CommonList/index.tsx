import React, {useState, useEffect, useCallback, useRef} from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import Taro, { navigateTo } from '@tarojs/taro'
import './index.styl'

interface CommonListProps {
	ListItem: any   //列表项
	queryDataUrl: string  //请求url
	searchParams?: any // 列表搜索的参数
}

const CommonList = (props: CommonListProps) => {
	const { ListItem, queryDataUrl } = props
	console.log( queryDataUrl,'urlll')
	const [listData, setListData] = useState(new Array(15).fill(2))
	const debounceRef = useRef<any>()

	const loadMore = useCallback(() => {
		try {
			clearTimeout(debounceRef.current );
			debounceRef.current = setTimeout(() => {
		
			}, 200)

		} catch (error) {
			console.log(error, 'errr===')
		}
	}, [])

	const scollToBottom = () => {
		console.log(788888)
		// Taro.showLoading ({
    //   title: '加载中...',
		// })
   
	}
	
	const onScrollToUpper = (e) => {
		console.log(e, 'uppppp')
	}

	return (
		<ScrollView 
			className='commonTable'
			onScrollToLower={scollToBottom}
			lowerThreshold={80}
			// onScrollToUpper={onScrollToUpper}
			scroll-y
			scrollWithAnimation
		>
			{
				listData.map(() => <AtListItem title='标题文字' note='描述信息' arrow='right' />)
			}
		</ScrollView>
	)
}

export default CommonList