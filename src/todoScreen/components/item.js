import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from '../images'

const TaskItem = ({item, index}) => {
    const isDoneTask = item.isDone ? Images.ic_cheked :Images.ic_uncheck
  return (
    <View key={index} style={styles.container}>
    <Image source={isDoneTask} style={styles.iconCheckTask} />
    <Text>{item.content}</Text>
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
        width: 15, height: 15, borderRadius: 7.5,
        marginRight: 20
    }
})