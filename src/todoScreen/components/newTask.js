import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Images } from '../images'

const NewTask = () => {
    const _createTask = () => {

    }
  return (
    <TouchableOpacity onPress={_createTask} style={styles.container}>
        <Image source={Images.ic_newTask} style={styles.iconNewTask} />
    </TouchableOpacity>
  )
}

export default NewTask

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 100,
        right: 25
    },
    iconNewTask: {
      width: 50,
      height: 50,
      borderRadius: 25
    }
})