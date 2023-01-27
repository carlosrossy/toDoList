import React, { useState } from 'react';
import { Alert, StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
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

            <View style={styles.accountants}>
                <View style={styles.Counter}>
                    <Text style={styles.maids}>Criadas</Text>
                    <View style={styles.CounterBackground}>
                        <Text style={styles.tasksCounter}>0</Text>
                    </View>
                </View>
                <View style={styles.Counter}>
                    <Text style={styles.completed}>Concluídas</Text>
                    <View style={styles.CounterBackground}>
                        <Text style={styles.tasksCounter}>0</Text>
                    </View>
                </View>
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
        marginBottom: 32
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
    },
    accountants: {
        width: "100%",
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    maids: {
        fontSize: 14,
        color: '#4EA8DE'
    },
    completed: {
        fontSize: 14,
        color: '#8284FA'
    },
    tasksCounter: {
        fontSize: 12,
        color: '#ffff'
    },
    Counter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    CounterBackground: {
        marginLeft: 10,
        width: 25,
        height: 20,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    }
})