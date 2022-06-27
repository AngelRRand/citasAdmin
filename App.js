import React, { Fragment } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {






  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The Appointment Manager {''}
        <Text style={styles.veterinary}>Veterinary</Text>
      </Text>

      <Button
        title='New'
        onPress={ ()=>console.log('Presionaste el botom') }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf798',
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
  }

});
