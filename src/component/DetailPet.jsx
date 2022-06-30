import React from 'react'
import {  StyleSheet, Pressable, Text, SafeAreaView, View } from 'react-native'
export const DetailPet = ({ pet, setModalPet }) => {


    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={styles.title}
            >Info parent: {''}
                <Text style={styles.patient}>{pet.patient}</Text>
            </Text>


            <View>
                <Pressable
                    style={styles.btnClose}
                    onLongPress={() => setModalPet(false)}
                >
                    <Text style={styles.btnText}>Close</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    title: {
        paddingTop: 30,
        color: '#759eff',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '600',
    },
    patient: {
        fontWeight: '900',
        color: '#75c7ff'
    },
    btnClose: {
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
})