import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal,
  View
} from 'react-native';
import { DetailPet } from './src/component/DetailPet';
import Form from './src/component/Form';
import Pet from './src/component/Pet';

export default function App() {

  const [modal, setModal] = useState(false)
  const [pets, setPets] = useState([])
  const [pet, setPet] = useState({})
  const [modalPet, setModalPet] = useState(false)


  const parentEdit = id => {
    const parentEdits = pets.filter(p => p.id === id)
    setPet(parentEdits[0])
  }


  const parentDelet = id => {
    Alert.alert(
      "Do you want to delete this patient?",
      "The patient is lost forever..",
      [
        { text: "Cancel" },
        {
          text: 'Yes, I want to delete', onPress: () => {
            const parentUpdate = pets.filter(p => p.id !== id)
            setPets(parentUpdate)
          }
        }
      ]
    )
  }



  const newAppointHandler = () => {
    setModal(true)
  }
  const modalHandler = () => {
    setModal(false)
  }
  console.log(modal)

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>The Appointment Manager {''}
        <Text style={styles.veterinary}>Veterinary</Text>
      </Text>

      <Pressable
        style={styles.btnNewApp}
        onPress={() => newAppointHandler()}
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
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Pet
                
                  item={item}
                  setModal={setModal}
                  parentEdit={parentEdit}
                  parentDelet={parentDelet}
                  setModalPet={setModalPet}
                  setPet={setPet}
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

      <Modal
        visible={modalPet}
        animationType='fade'
      >
        <DetailPet
          pet={pet}
          setModalPet={setModalPet}
        />

      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ecee'
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
  notPatiens: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#759eff'
  },
  truePatiens: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: '#759eff'
  },
  FlatListPets: {
    marginTop: 60,
    marginHorizontal: 30,
  }

});
