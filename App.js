import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList
} from 'react-native';
import { View } from 'react-native-web';
import Form from './src/component/Form';
import Pet from './src/component/Pet';

export default function App() {

  const [modal, setModal] = useState(false)
  const [pets, setPets] = useState([])
  const [pet, setPet] = useState({})


  
  const parentEdit = id => {
    const parentEdits = pets.filter(p => p.id === id)
    setPet(parentEdits[0])
  }

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

      {pets.length === 0 ?
        <Text style={styles.notPatiens}>There are no patients...</Text>
        :
        <View>
          <Text style={styles.truePatiens}>There are patients!</Text>
          <FlatList
          style={styles.FlatListPets}
            data={pets}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
              return(
                <Pet
                  item={item}
                  setModal={setModal}
                  parentEdit={parentEdit}
                />
              )
            }}
          />

        </View>
        }

      <Form
        modal={modal}
        modalHandler={modalHandler}
        pets={pets}
        setPets={setPets}
        pet={pet}
        setPet={setPet}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525558'
  },
  title: {
    paddingTop: 30,
    color: '#759eff',
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
  },
  veterinary: {
    fontWeight: '900',
    color: '#75c7ff'
  },
  btnNewApp: {
    backgroundColor: '#75c7ff',
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
  modals: {
    backgroundColor: 'red',
  },
  notPatiens:{
    marginTop:40,
    textAlign:'center',
    fontSize:24,
    fontWeight:'700',
    color: '#759eff'
  },
  truePatiens:{
    marginTop:40,
    textAlign:'center',
    fontSize:24,
    fontWeight:'700',
    color: '#759eff'
  },
  FlatListPets:{
    marginTop:60,
    marginHorizontal:30,
  }

});
