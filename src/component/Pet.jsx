import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'



const Pet = ({ item, setModal, parentEdit }) => {


    const { patient, phone, id } = item
    return (
        <View style={styles.petContainer}>
            <Text style={styles.petPatientName}>Patient: </Text>
            <Text style={styles.petPatient}>{patient}</Text>
            <View style={styles.petText}>
                <Text style={styles.petPhone}>Tel: {phone}</Text>
            </View>
            <View style={styles.petBtnContainer}>
                <Pressable
                 style={[styles.btn, styles.edit]}
                 onLongPress={()=> {
                    setModal(true)
                    parentEdit(id)
                }}
                 >
                    <Text style={styles.text}>Edit</Text>
                </Pressable>

                <Pressable style={[styles.btn, styles.delet]}>
                    <Text style={styles.text}>Delete</Text>
                </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    petContainer: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#35373a',
        borderBottomColor:'#456d80',
        borderBottomWidth:2,
    },
    petPatientName:{
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        marginTop:10,
        marginBottom:15,
    },
    petPatient: {
        fontSize: 25,
        fontWeight: '800',
        color: '#75c7ff',
        marginBottom: 10,
    },
    petPhone:{
        color: 'white',
        fontSize:15,
    },
    petBtnContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:10,
       
    },
    btn:{   
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:5,
        borderBottomColor:'#75c7ff',
        borderBottomWidth:1
    },
    text:{
        textTransform:'uppercase',
        fontSize: 15,
        fontWeight: '800',
        color: 'white',
    },
    edit:{  
        backgroundColor:'#759eff'
    },
    delet:{
        backgroundColor:'#314853'
    },
})
export default Pet