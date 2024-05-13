import { FlatList, StyleSheet, Text, View, LayoutAnimation, UIManager, } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/header'
// import NewTask from './components/newTask'
import TaskItem from '../components/item'
import NewTaskInput from '../components/newTaskInput'


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

  const _updateTodo = (newTodo) => {
    setTasks((currentTasks) => [...currentTasks, newTodo])
  }

  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        contentContainerStyle={styles.todoList}
        data={tasks}
        renderItem={_renderItem}
        keyExtractor={(item, index) => 'todo' + index}
      />
      <NewTaskInput updateTodo={(newTodo) => _updateTodo(newTodo)} />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  todoList: {
    flex: 1,  alignItems: 'center', backgroundColor: '#fff'
  }
})