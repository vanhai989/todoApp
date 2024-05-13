import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IMAGES } from '../images'

const TaskItem = ({item, index}) => {
  console.log('item', item);
    const isDoneTask = item.isDone ? IMAGES.ic_cheked :IMAGES.ic_uncheck
  return (
    <View key={index} style={styles.container}>
      <Image source={isDoneTask} style={styles.iconCheckTask} />
      <Text style={styles.content}>{item.content}</Text>
  </View>
  )
}

export default TaskItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCheckTask: {
        width: 20, height: 20, borderRadius: 10,
        marginRight: 20
    },
    content: {
      color: '#000'
    },
})