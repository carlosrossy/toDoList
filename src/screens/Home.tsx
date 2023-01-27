import React, { useState } from 'react';
import { Alert, StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import logo from '../assets/Logo.png';
import { Task } from '../components/Task';
import { Input } from '../components/Input';

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [counterTask, setCounterTask] = useState(0);

    function handleAddTask(newTaskTitle: string) {
        const taskWithSameTitle = tasks.find(task => task.title == newTaskTitle)

        if (taskWithSameTitle) {
            return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
        }

        const newTask = {
            id: new Date().getTime(),
            title: newTaskTitle,
            done: false
        }

        setTasks(oldTaks => [...oldTaks, newTask])
    }

    function handleToggleTaskDone(id: number) {
        const updatedTask = tasks.map(tasks => ({ ...tasks }))

        const foundItem = updatedTask.find(item => item.id === id)

        if (!foundItem) {
            return;
        }

        foundItem.done = !foundItem.done

        if (foundItem.done) {
            setCounterTask(counterTask + 1)
        } else {
            setCounterTask(counterTask - 1)
        }
        setTasks(updatedTask)
    }

    function handleRemoveTask(id: number) {
        Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [
            {
                style: 'cancel',
                text: 'não'
            },
            {
                style: 'destructive',
                text: 'sim',
                onPress: () => {
                    const updatedTask = tasks.filter(task => task.id != id)

                    setTasks(updatedTask)
                    setCounterTask(counterTask - 1)
                }
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
            </View>

            <Input addTask={handleAddTask} />

            <View style={styles.accountants}>
                <View style={styles.Counter}>
                    <Text style={styles.maids}>Criadas</Text>
                    <View style={styles.CounterBackground}>
                        <Text style={styles.tasksCounter}>{tasks.length}</Text>
                    </View>
                </View>
                <View style={styles.Counter}>
                    <Text style={styles.completed}>Concluídas</Text>
                    <View style={styles.CounterBackground}>
                        <Text style={styles.tasksCounter}>{counterTask}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bar} />

            <View style={styles.containerTask}>
                <Task
                    tasks={tasks}
                    toggleTaskDone={handleToggleTaskDone}
                    removeTask={handleRemoveTask}
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
        width: "100%",
        paddingHorizontal: 24,
        marginTop: -38,
        flexDirection: 'row',
        marginBottom: 32
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
    },
    bar: {
        width: "89%",
        marginTop: 24,
        marginLeft: 24,
        marginRight: 24,
        height: 1,
        backgroundColor: '#333333'
    },
    containerTask: {
        width: "100%",
        paddingHorizontal: 24,
    }
})