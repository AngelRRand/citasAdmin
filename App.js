import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import Form from './src/component/Form';

export default function App() {

  const [modal, setModal] = useState(false)

  const newAppointHandler = () => {
    setModal(true)
  }
  const modalHandler = () => {
    setModal(false)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The Appointment Manager {''}
        <Text style={styles.veterinary}>Veterinary</Text>
      </Text>

      <Pressable
        style={styles.btnNewApp}
        onPress={newAppointHandler}
      >
        <Text style={styles.btnText}>new date </Text>
      </Pressable>


      <Form modal={modal} modalHandler={modalHandler}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#80d6ff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
  veterinary: {
    fontWeight: '900',
    color: '#f06868'
  },
  btnNewApp: {
    backgroundColor: '#f06868',
    padding: 15,
    marginTop: 20,
    marginHorizontal: 30,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  modals:{
    backgroundColor:'red',
  }

});
