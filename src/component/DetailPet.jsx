import React from 'react'
import { StyleSheet, Pressable, Text, SafeAreaView, View } from 'react-native'
export const DetailPet = ({ pet, setModalPet }) => {


    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text style={styles.title}
            >Pet information: {''}
                <Text style={styles.patient}>{pet.patient}</Text>
            </Text>

            <View style={styles.cardPet}>

                <View style={styles.info}>
                    <Text style={styles.titleCard}>Owner's name</Text>
                    <Text style={styles.infoCard}>{pet.name}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.titleCard}>Owner's phone</Text>
                    <Text style={styles.infoCard}>{pet.phone}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.titleCard}>Owner email</Text>
                    <Text style={styles.infoCard}>{pet.email}</Text>
                </View>

                <View style={styles.info}>
                    <Text style={styles.titleCard}>The symptoms of the pet are:</Text>
                    <Text style={styles.infoCard}>{pet.symptom}</Text>
                </View>

            </View>

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
        backgroundColor: '#e8ecee'
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
    cardPet: {
        backgroundColor: '#ffffff',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        height: 340,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    info:{
        height: 70,
    },
    titleCard:{
        paddingTop: 15,
        color: '#6281ca',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
    },
    infoCard: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '900',
        color: '#8fcaf1'
    },
})