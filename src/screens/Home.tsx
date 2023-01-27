import React, { useState } from 'react';
import { Alert, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import logo from '../assets/Logo.png';

export function Home() {

    function handleTaskAdd() {
        console.log("Adicionou")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
            </View>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#808080'
                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                    <Ionicons name="add-circle-outline" size={24} color="#FFFF" />
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: "100%",
        paddingHorizontal: 24,
        marginTop: -38,
        flexDirection: 'row',
        // marginBottom: 42
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#ffff',
        padding: 16,
        fontSize: 16
    },
    button: {
        height: 56,
        width: 56,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    }
})