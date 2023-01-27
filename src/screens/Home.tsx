import React, { useState } from 'react';
import { Alert, StyleSheet, View, Image, TextInput } from 'react-native';

import logo from '../assets/Logo.png';

export function Home() {

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
        paddingHorizontal: 24,
        marginTop: -38
    },
    input: {
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#ffff',
        padding: 16,
        fontSize: 16
    }
})