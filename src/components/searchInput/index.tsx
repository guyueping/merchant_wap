import React, { useEffect, useState, useRef } from 'react'
import { View, Text, Input } from '@tarojs/components'
import './index.styl'

type SearchType = 'number' | 'text' | 'idcard' | 'digit'
interface SearchInputProps{
  children?: React.ReactNode;
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
		type = 'text', 
		placeholder = '',
		placeholderStyle = 'color:#ccc;font-size:13px'
	} = props
	const [inputValue, setInputValue] = useState(defaultValue)
	const [showClearIcon, setShowClearIcon] = useState(false)
	const inputRef = useRef<any>()

	const handleChange = (e) => {
		setInputValue(e.detail.value)
		props.onChange && props.onChange(e.detail.value)
		return e.detail.value
	}

	const onActionClick = () => {
		inputValue && props.onActionClick && props.onActionClick(inputValue)
	}

	const onConfirm = () => {
		inputValue && props.onConfirm && props.onConfirm(inputValue)
	}

	const clearInputValue = () => {
		console.log('clickkk')
		// inputRef.current && inputRef.current.value = ''
		if(inputRef.current) {
			inputRef.current.value = ''
			setInputValue('')
		}
	}

	useEffect(() => {
		if(inputValue) {
			!showClearIcon &&	setShowClearIcon(true)
		} else {
			showClearIcon && setShowClearIcon(false)
		}	
	}, [inputValue])
	
  return (
		<View className='flex_center_between_row searchInputWrapper'>
			<View className={`searchInput flex_center_start_row ${showClearIcon && 'borderColor'}`}>
				<View className='at-icon at-icon-search searchIconColor'></View>
				<Input
					name='value'
					// clear
					ref={inputRef}
					placeholder={placeholder}
					type={type}
					onInput	={handleChange}
					onConfirm={onConfirm}
					placeholderStyle={placeholderStyle}
					style={{width: '80%'}}
				/>
				{
					showClearIcon ? 
						<View onClick={clearInputValue}	className='at-icon at-icon-close-circle clearButton' style={{color: '#ccc'}}></View> : null		
				}
			</View>
			{
				showClearIcon ? 
					<Text className='searchButton' onClick={clearInputValue} style={{color: '#4f5af7'}}>取消</Text> : 
					<Text className='searchButton' onClick={onActionClick}>搜索</Text> 
			}
			
		</View>
    
  )
}

export default SearchInput


