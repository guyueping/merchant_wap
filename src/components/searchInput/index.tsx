import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { AtInput } from 'taro-ui'
import './index.styl'

type SearchType = 'text' | 'number' | 'password' | 'phone' | 'idcard' | 'digit'
interface SearchInputProps{
  children?: React.ReactNode;
  showActionButton?: boolean
	type?: SearchType;
	defaultValue?: string;
	onChange?: (arg: string) => void;
	onActionClick?: (arg: string) => void;
	onConfirm?: (arg: string) => void;
	placeholder?: string
}

const SearchInput = (props: SearchInputProps) => {
	const { 
		defaultValue, 
		showActionButton = true, 
		type = 'text', 
		placeholder = ''
	} = props
	console.log(type,'tttt')
	const [inputValue, setInputValue] = useState(defaultValue)

	const handleChange = (v) => {
		setInputValue(v)
		props.onChange && props.onChange(v)
	}

	const onActionClick = () => {
		inputValue && props.onActionClick && props.onActionClick(inputValue)
	}

	const onConfirm = () => {
		inputValue && props.onConfirm && props.onConfirm(inputValue)
	}
	
  return (
		<View className='flex_center_between_row searchInputWrapper'>
			<View className='searchInput'>
				<View className='at-icon at-icon-search searchIconColor'></View>
				<AtInput
					name='value'
					placeholder={placeholder}
					type={type}
					value={inputValue}
					onChange={handleChange}
					onConfirm={onConfirm}
					border={false}
				/>
			</View>
			{
				showActionButton ? <Text className='searchButton' onClick={onActionClick}>搜索</Text> : null
			}
			
		</View>
    
  )
}

export default SearchInput


