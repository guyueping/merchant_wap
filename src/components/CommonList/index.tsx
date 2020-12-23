import React, { useState, useEffect, useRef, useCallback, forwardRef, useImperativeHandle } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import BirdLoading from '@/components/birdLoading'
import LoadMore from '@/components/loadMore'
import ypRequest from '@/utils/ypRequest'
import { StatusSearch } from '@/components/status'
import { orderData } from './mockData'
import styles from './index.module.styl'
interface I_Scroll {
  onScrollToUpper?: (e) => void;
  onScrollToLower?: (e) => void;
  onScroll?: (e) => void;
  onRefresherRefresh?: (e) => void;
  showLoadMore?: boolean;
  children?: React.ReactNode;
  style?: string | React.CSSProperties | undefined;
	className?: string | undefined;
	ListItem: any;   //列表项
	queryDataUrl: string;  //请求url
	searchParams?: any; // 列表搜索的参数
	formatResult?: (arg: any) => any // 格式化返回数据
}
interface I_List_Layout{
  style?: string | React.CSSProperties | undefined;
  className?: string | undefined;
  children?: React.ReactNode;
}
export const ListLayout = (props: I_List_Layout) => {

  return (
    <View className={`${styles.list_layout_box} ${props.className}`} style={props.style}>
      {props.children}
    </View>
  )
}


const CommonList = (props: I_Scroll, ref: any) => {
	const { ListItem, queryDataUrl, formatResult, } = props
	const [refresherTriggered, setRefresherTriggered] = useState(false)
	const [data, setData] = useState(orderData) //列表数据 orderData
  const [showLoadMore, setShowLoadMore] = useState(false) //底部loading
  const [showNoData, setShowNoData] = useState(false) //没有更多数据
	const [listParams, setListParams] = useState({
		size: 30,
		page: 1,
		...props.searchParams ?? {}
	})

	const debounceRef = useRef<any>()

	useEffect(() => {
		setListParams({...listParams, ...props.searchParams})
	}, [props.searchParams])

	useEffect(() => {
		sendRequest()
	}, [listParams])

	const sendRequest = useCallback((params?: any) => {
		try {
			if (!queryDataUrl) {
				return
			}
			clearTimeout(debounceRef.current );
			debounceRef.current = setTimeout(async () => {
				setShowLoadMore(true)
				// const res: any = await ypRequest(queryDataUrl, { ...listParams, ...params ?? {} })
				// const { success } = res.result
				// if (success) {
				// 	if (formatResult instanceof Function) {
				// 		// 处理后端返回数据
				// 		res.result = formatResult(res.result)
				// 	}



				// }
				setShowLoadMore(false)
			}, 200)

		} catch (error) {
			console.log(error, 'errr===')
		}
	}, [queryDataUrl, listParams])

	const onScrollToLower = () => {
		// sendRequest()
		
    setShowLoadMore(true)
    setTimeout(() => {
      setData(data.concat(data))
			setShowLoadMore(false)
			
    }, 1000)
	}
	
	const onRefresherRefresh = (e) => {
    new Promise((resolve, reject) => {
      setRefresherTriggered(true)
      props.onRefresherRefresh && props.onRefresherRefresh(e)
      resolve()
    }).then(() => {
      setRefresherTriggered(false)
    })
	}
	
	  /**
   * 通过该 hook 定义父组件 ref 拿到子组件的实例的内容
   * 父组件使用 reflashList 来调用子组件 sendRequest 这个方法
   */
  useImperativeHandle(
    ref,
    () => ({
			reflashList: (params?: any) =>
        sendRequest(params),
    }),
    [listParams, sendRequest]
  )

  return  (
    <ScrollView
      className={`${styles.list_box} ${props.className}`}
      style={props.style}
      refresherThreshold={0}
      scrollY 
      scrollWithAnimation 
      onScrollToUpper={props.onScrollToUpper}
      onScrollToLower={onScrollToLower}
      onScroll={props.onScroll}
      refresherEnabled
      refresherBackground='#F1F2F6'
      refresherDefaultStyle='none'
      refresherEnabled={true}
      refresherTriggered={refresherTriggered}
      onRefresherRefresh={onRefresherRefresh}
      // refresherThreshold={45}
      // onDragEnd={() => {console.log('onDragEnd')}}
      // onTransitionEnd={() => {console.log('onTransitionEnd')}}
      // onDragStart={() => {console.log('onDragStart')}}
      // onRefresherRestore={() => {console.log('onRefresherRestore')}}
      // onDragging={() => {console.log('onDragging')}}
      // onLongPress={() => {console.log('onLongPress')}}
      // onRefresherPulling={() => { console.log('onRefresherPulling')}}
      // onRefresherRestore={(e) => { onRefresherRestore(e)}}
    >
      <View className={styles.mainpagecontainer}>
        <BirdLoading />
      </View>
			{
				data && data.length > 0 ?
					data.map((item: any) => <ListItem item={item}/>) :
					<StatusSearch moreInfo='抱歉，未找到与搜索相匹配内容' style={{ mrginBottom: 20, backgroundColor: '#FBFBFB', height: '100%' }} />
			}
      <LoadMore showLoading={showLoadMore} showNoData={showNoData}/>
    </ScrollView>
  )
}
export default forwardRef(CommonList)
