import React from 'react'
import { View } from '@tarojs/components'
import emptyImg from '@/images/status_empty.png'
import searchImg from '@/images/status_search.png'
import waitImg from '@/images/status_wait.png'
import warnImg from '@/images/status_warn.png'
import styles from './index.module.styl'

interface I_Status{
  imgUrl?: string;
  mainInfo?: string;
  moreInfo?: string;
  className?: string | undefined;
  style?: string | React.CSSProperties | undefined;
  isEmpty?: boolean;
}

const Status = (props: I_Status) => {
  return  (
    <View className={`${styles.status_box} flex_center_center_column ${props.className}`} style={props.style}>
      <image src={props.imgUrl} className={props.isEmpty ? styles.emptyIcon : styles.icon} />
      {props.mainInfo && (<View className={styles.mainInfo}>{props.mainInfo}</View>)}
      {props.moreInfo && (<View className={styles.moreInfo}>{props.moreInfo}</View>)}
    </View>
  )
}

export const StatusWait = (props: I_Status = {}) => <Status {...props} imgUrl={waitImg} />

export const StatusWarn = (props: I_Status = {}) => <Status {...props} imgUrl={warnImg} />

export const StatusSearch = (props: I_Status = {}) => <Status {...props} imgUrl={searchImg} />

export const StatusEmpty = (props: I_Status = {}) => <Status {...props} imgUrl={emptyImg} isEmpty={true} />

export default Status