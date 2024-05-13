import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { IMAGES } from '../images'
import { COLORS } from '../colors';

const windowWidth = Dimensions.get('window').width;

const TaskItem = (props) => {
  const { item, index } = props
  const isDoneTask = item.isDone ? IMAGES.ic_checked : IMAGES.ic_uncheck

  const _taskSelected = (task) => {
    props.updateTask(task)
  }

  const _deleteTask = (task) => {
    props.deleteTask(task)
  }

  return (
    <View key={index} style={styles.container}>
      <TouchableOpacity onPress={() => _taskSelected(item)} style={styles.wrapContent}>
        <Image source={isDoneTask} style={styles.iconCheckTask} />
        <Text style={item.isDone ? styles.contentDone : styles.content}>{item.content}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _deleteTask(item)}>
        <Image source={IMAGES.ic_close} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 50,
    minHeight: 50,
    borderRadius: 10,
    paddingVertical: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -0.3,
    },
    shadowOpacity: 0.13,
    shadowRadius: 1.5,
    elevation: 1.5,
  },
  iconCheckTask: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginHorizontal: 20
  },
  content: {
    color: '#000',
    textAlign: 'left',
    flex: 1,
    lineHeight: 22,
    fontSize: 17
  },
  contentDone: {
    color: COLORS.main,
    textDecorationLine: 'line-through',
    textAlign: 'left',
    flex: 1,
    lineHeight: 22,
    fontSize: 17
  },
  closeIcon: {
    width: 18,
    height: 18,
    marginHorizontal: 20,
    tintColor: COLORS.main
  },
  wrapContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})