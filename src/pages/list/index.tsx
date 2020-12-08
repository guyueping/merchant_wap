import { View, Text } from '@tarojs/components'
import { TodoStore, getFilteredTodos } from '../../store/list'
import useStore from '../../store/useStore'
import React from 'react'

const List = () => {
  const { visibilityFilter } = useStore(TodoStore)
  const todos = getFilteredTodos(visibilityFilter)
  console.log('todos>>>', todos)
  return (
    <View>
      {todos.length > 0 ? todos.map((todo, i) => {
        return (
        <View className='toggle' key={i}>
          <Text>
            {todo.text}
          </Text>
        </View>
        )
      }) : '暂无数据'}
    </View>
  )
}

export default List