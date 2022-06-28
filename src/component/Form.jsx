import React, { useState, useEffect } from 'react'
import { Modal, StyleSheet, Pressable, Text, SafeAreaView, View, TextInput, ScrollView } from 'react-native'
import Error from './Error'
const Form = ({ modal, modalHandler, pets, setPets, pet }) => {

    
    const [patient, setPatient] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [symptom, setSymptom] = useState('')


    const [error, setError] = useState(false)
    console.log(pet)

    useEffect(()=>{
        if(Object.keys(pet).length > 0){
            setId(pet.id)
            setPatient(pet.patient)
            setName(pet.name)
            setEmail(pet.email)
            setPhone(pet.phone)
            setSymptom(pet.symptom)
        } 
    }, [])

    const submitHandle =()=>{
        if([patient, name, email, phone, symptom].includes('')){
           setError(true)
           return
        }else{

            const newPet = {
                id: Date.now(),
                patient,
                name, 
                email,
                phone, 
                symptom
            }
            setPets([...pets, newPet])
            modalHandler()
            setPatient('')
            setName('')
            setEmail('')
            setPhone('')
            setSymptom('')
        }
    }

    return (
        <Modal
            animationType='slide'
            visible={modal}
            style={styles.modals}
        >
            <SafeAreaView style={styles.modalContainer}>
                <ScrollView>

                    <View style={styles.modalHud}>
                        <Text style={styles.modalTitle}>New date
                        </Text>
                        <Pressable
                            style={styles.btnModal}
                            onPress={modalHandler}
                        >
                            <Text style={styles.btonModalText}>X</Text>
                        </Pressable>

                    </View>

                    <View style={styles.camp}>
                        <Text style={styles.label}>Name of patient</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Name'
                            placeholderTextColor={'#656'}
                            value={patient}
                            onChangeText={setPatient}
                        />
                    </View>

                    <View style={styles.camp}>
                        <Text style={styles.label}>Owner name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Owner'
                            placeholderTextColor={'#656'}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.camp}>
                        <Text style={styles.label}>Owner email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#656'}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.camp}>
                        <Text style={styles.label}>Owner phone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Phone'
                            placeholderTextColor={'#656'}
                            keyboardType='number-pad'
                            value={phone}
                            onChangeText={setPhone}
                            maxLength={12}
                        />
                    </View>


                    <View style={styles.camp}>
                        <Text style={styles.label}>Symptom</Text>
                        <TextInput
                            style={[styles.input, styles.sym]}
                            placeholder='Symptom'
                            placeholderTextColor={'#656'}
                            value={symptom}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={setSymptom}
                        />
                    </View>

                    <Pressable
                        style={styles.btnCommit}
                        onPress={submitHandle}
                    >
                        <Text style={styles.btnTextCommit}>Date</Text>
                    </Pressable>

                <Error error={error} setError={setError}></Error>

                </ScrollView>
            </SafeAreaView>



        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#456d80',

    },
    modalHud: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    modalTitle: {
        marginLeft: 10,
        marginTop: 15,
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
        flex: 1,
    },
    btnModal: {
        padding: 10,
        width: 50,
    },
    btonModalText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: 'white'
    },
    camp: {
        marginTop: 30,
        marginHorizontal: 30,
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 35,
        borderRadius: 10,
        padding: 5
    },
    sym: {
        height: 100,
    },
    btnCommit:{
        backgroundColor:'#75c7ff',
        marginTop:20,
        marginHorizontal:30,
        marginBottom:10,
        padding: 15,

    },
    btnTextCommit:{
        textAlign:'center',
        color: 'white',
        textTransform:'uppercase',
        fontWeight:'800',
        fontSize:30
    }
});

export default Form