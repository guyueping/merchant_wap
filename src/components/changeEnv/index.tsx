
import React, { useState } from 'react'
import { View, Picker } from '@tarojs/components'
import { getData, setData } from '@utils/ypStore'

interface IProps {
    children: React.ReactNode
}
const envList = ['prod', 'pre', 'sit', 'test', 'dev'];
const ChangeEnv = (IProps: IProps) => {
    const [value, setValue] = useState(() => {
        const envStr = getData('env') || 'prod';
        return envList.indexOf(envStr)
    })
    const [disabled, setDisabled] = useState(true)
    let [number, setNumber] = useState(0)
    const [selectorChecked, setSelectorChecked] = useState('prod')
    const onChange = (e) => {
        const val = e.detail.value
        const strVal = envList[parseInt(val)]
        setValue(val)
        setSelectorChecked(strVal)
        setData('env', strVal)
    }
    const numberChange = () => {
        number++;
        setNumber(number)
        if (number > 2) {
            setDisabled(false)
        }
    }
    return (
        <View className='changeEnv_box' onClick={numberChange}>
            <Picker disabled={disabled} value={value} mode='selector' range={envList} onChange={onChange}>
                {IProps.children}
            </Picker>
        </View >
    )
}
export default ChangeEnv
