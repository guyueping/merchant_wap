
import React, { useState, } from 'react'
import { View, Text, Image } from '@tarojs/components'
// import Taro, { navigateTo } from '@tarojs/taro'
import ImgBg from './ypdft.jpg'
// import './index.less'
type ImgMode = "scaleToFill" | "aspectFit" | "aspectFill" | "widthFix" | "heightFix" | "top" | "bottom" | "center" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"
interface IProps {
    mode?: ImgMode
    src: string
    width?: string
    height?: string
    webp?: Boolean
    lazyLoad?: Boolean
    showMenuByLongpress?: Boolean
    onErrorPropsFunc?: Function
    errorMsg?: string
}
const ImgCmp = (IProps: IProps) => {
    const [loaded, setLoaded] = useState(false)
    const [errMsg, setErrMsg] = useState('');
    const bindloadFunc = (e) => {
        setLoaded(true)
    }
    const onErrorFunc = (e) => {
        if (IProps.onErrorPropsFunc || IProps.errorMsg) {
            IProps.onErrorPropsFunc && IProps.onErrorPropsFunc();
            setErrMsg(IProps.errorMsg || '加载失败')
        } else {
            setErrMsg('图片加载失败')
        }
        setLoaded(true)
    }
    const styleData = (): string | React.CSSProperties | undefined => {
        const obj = {} as any;
        if (IProps.width) {
            obj.width = IProps.width
        }
        if (IProps.height) {
            obj.height = IProps.height
        }
        return obj;
    }
    return (
        <View className='imgCmp_box' style={styleData()} data-tag={IProps.mode}>
            {errMsg ? <Text>{errMsg}</Text> : (IProps.errorMsg || null)}
            {loaded ? null : <Image style='display:block;width: 100%;height: 100%;' src={ImgBg}></Image>}
            {IProps.src ? <Image mode={IProps.mode} onError={onErrorFunc} onLoad={bindloadFunc} style={loaded ? 'display:block;width: 100%;height: 100%;' : 'display:block;width: 0;height: 0'} src={IProps.src}></Image> : null}
        </View >
    )
}
export default ImgCmp
