import React from 'react'
import { Modal, StyleSheet, Pressable, Text, SafeAreaView, View, TextInput, ScrollView } from 'react-native'
const Error = ({error, setError}) => {



    return (
        <Modal
            visible={error}
            animationType='slide'
        >
            <SafeAreaView style={styles.modalErrorCont}>
                <View style={styles.modalErrorText}>
                    <Text style={styles.Error}>You must fill all the empty spaces to be able to request an appointment</Text>
                    <Pressable 
                    style={styles.modalErrorBtn}
                    onPress={()=> setError(false)}
                    >
                        <Text style={styles.modalErrorBtnT}>back</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalErrorCont:{
        flex: 1,
        backgroundColor:'#f06868',
        justifyContent: 'center',
        
    },
    modalErrorText:{
        padding: 15,
        justifyContent:'center',
    },
    Error:{
        fontSize:25,
        textAlign: 'center',
        color: 'white',
    },
    modalErrorBtn:{
        marginHorizontal:20,
        marginTop:20,
        backgroundColor: '#80d6ff',
        padding: 15,
        textAlign: 'center',
    },
    modalErrorBtnT:{
        color: 'white',
        fontSize:35,
    }
})
export default Error