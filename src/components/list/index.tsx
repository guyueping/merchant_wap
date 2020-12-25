import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import BirdLoading from '@/components/birdLoading'
import LoadMore from '@/components/loadMore'
import { StatusEmpty } from '@/components/status'
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


const List = (props: I_Scroll) => {
  const [refresherTriggered, setRefresherTriggered] = useState(false)

  const onRefresherRefresh = (e) => {
    new Promise((resolve, reject) => {
      setRefresherTriggered(true)
      props.onRefresherRefresh && props.onRefresherRefresh(e)
      resolve()
    }).then(() => {
      setRefresherTriggered(false)
    })
  }


  return  (
    <ScrollView
      className={`${styles.list_box} ${props.className}`}
      style={props.style}
      refresherThreshold={0}
      scrollY 
      scrollWithAnimation 
      onScrollToUpper={props.onScrollToUpper}
      onScrollToLower={props.onScrollToLower}
      onScroll={props.onScroll}
      refresherEnabled
      refresherBackground='#F8F8F8'
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
      {props.children ? props.children : <StatusEmpty moreInfo='暂无记录' style={{ paddingTop: 60 }} />}
      <LoadMore showLoading={props.showLoadMore} />
    </ScrollView>
  )
}
export default List
