import { FlatList, StyleSheet, Text, View, LayoutAnimation, UIManager, } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/header'
// import NewTask from './components/newTask'
import TaskItem from '../components/item'
import NewTaskInput from '../components/newTaskInput'
import { COLORS } from '../colors'


const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      isDone: false,
      content: 'task 1'
    },
    {
      isDone: true,
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

  const _updateTask = (task) => {
    const updatedTasks = tasks.map(element => {
      if(element.content == task.content) {
        element.isDone = !task.isDone
      }
      return element
    });

    setTasks(updatedTasks)
    
  }

  const _deleteTask = (task) => {
    const newTasks = tasks.filter(item => item.content !== task.content);
    setTasks(newTasks)
  }

  const _renderItem = ({item, index}) => {
    return <TaskItem item={item} index={index} updateTask={_updateTask} deleteTask={_deleteTask} />
  }

  const _updateTodo = (newTodo) => {
        setTasks((currentTasks) => [...currentTasks, newTodo])
  }

  const renderListTodo = () => {
    return <FlatList
    contentContainerStyle={styles.todoList}
    data={tasks}
    renderItem={_renderItem}
    ItemSeparatorComponent={<View style={styles.itemSeparator} />}
    keyExtractor={(item, index) => 'todo' + index}
  />
  }

  return (
    <View style={styles.container}>
      <Header />
      {renderListTodo()}
      <NewTaskInput updateTodo={(newTodo) => _updateTodo(newTodo)} />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  todoList: {
    flex: 1,
    alignItems: 'center', 
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 20
  },
  itemSeparator: {
    height: 20
  }
})