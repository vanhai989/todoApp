import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../colors'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: COLORS.main,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 25
    }
})