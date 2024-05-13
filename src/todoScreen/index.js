import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './components/header'
import NewTask from './components/newTask'
import TaskItem from './components/item'

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      isDone: false,
      content: 'task 1'
    },
    {
      isDone: false,
      content: 'task 2'
    },
    {
      isDone: false,
      content: 'task 3'
    },
    {
      isDone: false,
      content: 'task 4'
    },
  ])

  const _renderItem = ({item, index}) => {
    return <TaskItem item={item} index={index} />
  }

  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}
        data={tasks}
        renderItem={_renderItem}
      
      />
      <NewTask />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})