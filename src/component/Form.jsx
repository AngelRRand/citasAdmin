import React, {useState} from 'react'
import { Modal, StyleSheet, Pressable, Text, SafeAreaView, View, TextInput, ScrollView } from 'react-native'

const Form = ({ modal, modalHandler }) => {

    const [input, setInput] = useState('')


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
                        />
                    </View>
                    <View style={styles.camp}>
                        <Text style={styles.label}>Owner name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Owner'
                            placeholderTextColor={'#656'}
                        />
                    </View>
                    <View style={styles.camp}>
                        <Text style={styles.label}>Owner email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#656'}
                        />
                    </View>

                    <View style={styles.camp}>
                        <Text style={styles.label}>Owner phone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Phone'
                            placeholderTextColor={'#656'}
                            keyboardType='number-pad'
                        />
                    </View>

                    <View style={styles.camp}>
                        <Text style={styles.label}>Symptom</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Symptom'
                            placeholderTextColor={'#666'}
                        />
                    </View>




                </ScrollView>
            </SafeAreaView>



        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#80d6ff',

    },
    modalHud: {
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    modalTitle: {
        marginLeft:10,
        marginTop: 15,
        fontSize: 40,
        color: 'white',
        flex: 1,
    },
    btnModal: {
        padding: 10,
        backgroundColor: '#375766',
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
        fontWeight: '600'
    },
    input: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 35,
    }
});

export default Form