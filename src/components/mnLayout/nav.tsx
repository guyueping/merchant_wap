
import React, { useState, useEffect } from 'react'
// import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { goTo, backTo } from '@/utils/mnRoute'
import { IPb } from './interface'
import RouteImg from './route1.png'
import RouteImg2 from './route2.png'
import './nav.less'

const MnNav = (IProps: IPb) => {
    const { hideArrow, path, arrowType } = IProps
    const jumpFunc = () => {


        if (path) {
            goTo(path, IProps.gotoType || 3) // reLaunch 关闭所有页面，打开到应用内的某个页面
        } else {
            backTo()
        }
    }
    return (
        <View className='mnNav_box' style={{ backgroundColor: '#fff', ...IProps.navStyle }}>
            {hideArrow && !path ? null : <View className='leftPart' onClick={jumpFunc}>
                <Image className='routeImg' src={arrowType === 1 ? RouteImg : RouteImg2}></Image>
                <Text className='backTitle fos'>{IProps.backTitle || ''}</Text>
            </View>}
            {hideArrow && !path ? <View className='midPart2'>
                <Text className='title fos'>{IProps.title || ''}</Text>
            </View> : <View className='midPart'>
                    <Text className='title fos'>{IProps.title || ''}</Text>
                </View>
            }

        </View >
    )
}
export default MnNav
