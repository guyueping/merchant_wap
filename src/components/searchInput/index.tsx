import React, { useEffect, useState } from 'react'
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
	placeholder?: string;
	placeholderStyle? : string;
}

const SearchInput = (props: SearchInputProps) => {
	const { 
		defaultValue, 
		showActionButton = true, 
		type = 'text', 
		placeholder = ''
	} = props
	const [inputValue, setInputValue] = useState(defaultValue)
	const [showClearIcon, setShowClearIcon] = useState(false)

	const handleChange = (v) => {
		console.log(v,'changeeee')
		setInputValue(v)
		props.onChange && props.onChange(v)
	}

	const onActionClick = () => {
		inputValue && props.onActionClick && props.onActionClick(inputValue)
	}

	const onConfirm = () => {
		inputValue && props.onConfirm && props.onConfirm(inputValue)
	}

	const clearInputValue = () => {
		console.log('clickkk')
		setInputValue('')
	}

	// useEffect(() => {
	// 	if(inputValue) {
	// 		setShowClearIcon(true)
	// 	} else {
	// 		setShowClearIcon(false)
	// 	}
		
	// }, [inputValue])
	
  return (
		<View className='flex_center_between_row searchInputWrapper'>
			<View className='searchInput'>
				<View className='at-icon at-icon-search searchIconColor'></View>
				<AtInput
					name='value'
					// clear
					placeholder={placeholder}
					type={type}
					value={inputValue}
					onChange={handleChange}
					onConfirm={onConfirm}
					border={false}
					style={{width: '100%'}}
				/>
				{
					showClearIcon ? 
						<View onClick={clearInputValue}	className='at-icon at-icon-close-circle' style={{color: '#ccc'}}></View> : null		
				}
			</View>
			{
				showActionButton ? <Text className='searchButton' onClick={onActionClick}>搜索</Text> : null
			}
			
		</View>
    
  )
}

export default SearchInput


