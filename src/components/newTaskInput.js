import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Pressable, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { IMAGES } from '../images'
import { COLORS } from '../colors'

const NewTask = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [task, setTask] = useState('')

  const _showModal = () => {
console.log('123456789');
    setModalVisible(true)

  }
  const _createTask = () => {
    if (task.trim()) {
      console.log('Task', task);
      const newTask = {
        isDone: false,
        content: task
      }
      props.updateTodo(newTask)
    }
    _closeModal()
    setTask('')
  }

  const _closeModal = () => {
    setModalVisible(false)
  }
  return (
    <>
      <TouchableOpacity onPress={_showModal} style={styles.container}>
        <Image source={IMAGES.ic_newTask} style={styles.iconNewTask} />
      </TouchableOpacity>

      <View style={styles.wrapperModal}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}>
          <TouchableOpacity onPress={_closeModal} style={styles.wrapperContent}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.wrapHeaderModal}>
                  <Text style={styles.modalTitle}>Create task</Text>
                  <Image source={IMAGES.ic_document} style={styles.documentIcon} />
                </View>
                <TextInput
                  value={task}
                  onChangeText={setTask}
                  style={styles.textArea}
                  multiline={true}
                  numberOfLines={4} />
                <Pressable
                  style={styles.button}
                  onPress={_createTask}>
                  <Text style={styles.textStyle}>Done</Text>
                </Pressable>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
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
  },
  wrapperModal: {
    flex: 1,
  },
  wrapperContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    height: 320,
    justifyContent: 'space-between',
    paddingBottom: 50,
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    backgroundColor: COLORS.main,
    width: '100%'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    color: COLORS.main,
    fontSize: 20,
    marginRight: 7
  },
  textArea: {
    borderWidth: 0.5,
    width: '100%',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  wrapHeaderModal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  documentIcon: {
    width: 20,
    height: 20,
  }
})