import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface TodoInputProps {
    addTask: (task: string) => void;
}

export function Input({ addTask }: TodoInputProps) {
    const [task, setTask] = useState('');

    function handleAddNewTask() {
        if (!task) {
            return;
        }

        addTask(task);
        setTask('');
    }

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
                returnKeyType="send"
                selectionColor="#666666"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddNewTask}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
                <Ionicons name="add-circle-outline" size={24} color="#FFFF" />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#F2F2F2',
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
    form: {
        width: "100%",
        paddingHorizontal: 24,
        marginTop: -38,
        flexDirection: 'row',
        marginBottom: 32
    },
});