import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Picker, ScrollView } from '@tarojs/components'
import BirdLoading from '@/components/birdLoading'
import LoadMore from '@/components/loadMore'
import styles from './index.module.styl'

interface I_Scroll {
  onScrollToUpper?: (e) => void;
  onScrollToLower?: (e) => void;
  onScroll?: (e) => void;
  showLoadMore?: boolean;
  children?: any;
}
const List = (props: I_Scroll) => {

  return  (
    <ScrollView 
      className={styles.list_box}
      refresherThreshold={0}
      scrollY 
      scrollWithAnimation 
      onScrollToUpper={props.onScrollToUpper}
      onScrollToLower={props.onScrollToLower}
      onScroll={props.onScroll}
      refresherEnabled
      refresherBackground='#F1F2F6'
      refresherDefaultStyle='none'
      // refresherTriggered={refresherTriggered}
      // onDragEnd={() => {console.log('onDragEnd')}}
      // onTransitionEnd={() => {console.log('onTransitionEnd')}}
      // onDragStart={() => {console.log('onDragStart')}}
      // onRefresherRestore={() => {console.log('onRefresherRestore')}}
      // onDragging={() => {console.log('onDragging')}}
      // onLongPress={() => {console.log('onLongPress')}}
      // onRefresherPulling={onRefresherPulling}
    >
      <View className={styles.mainpagecontainer}>
        <BirdLoading />
      </View>
      {props.children}
      <LoadMore showLoading={props.showLoadMore} />
    </ScrollView>
  )
}
export default List
