import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import './index.styl'

type TagType = 'primary'
interface TagProps{
  children?: React.ReactNode;
  options: Array<{
    value: number | string
    label: string
	}>;
	type?: TagType;
	circle?: boolean;
	defaultValue?: string | number;
	onChange: (arg0: string | number) => void;
	className?: string | undefined;
  style?: any;
}

const Tag = (props: TagProps) => {
	const { defaultValue, options = [] } = props
	const [selected, setSelected] = useState(defaultValue ?? options[0]?.value)

	const handleSelect = ({name, active}) => {
		if(!active) {
			setSelected(name)
			props.onChange(name)
		}
	}
	
  return (
    <View className={`component_tags ${props.className}`} style={props.style} >
			{options?.map((option: any, index: number) => (
				<AtTag key={index} name={option.value} type={props.type ?? 'primary'} circle={props.circle ?? true} active={selected === option.value} onClick={handleSelect}>
					{option.label}
				</AtTag>
			))}
    </View>
  )
}

export default Tag


