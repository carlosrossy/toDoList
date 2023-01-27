import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Clipboard from '../../assets/Clipboard.png';
export interface Task {
    id: number;
    title: string;
    done: boolean;
}

interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function Task({ tasks, toggleTaskDone, removeTask }: TasksListProps) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return (
                    <View style={styles.container}>
                        <TouchableOpacity
                            onPress={() => toggleTaskDone(item.id)}
                        >
                            <View style={item.done ? styles.taskMarkerDone : styles.taskMarker}>
                                {item.done && (
                                    <MaterialIcons name="done" size={12} color="#ffff" />
                                )}
                            </View>
                        </TouchableOpacity>

                        <Text style={item.done ? styles.taskTextDone : styles.taskText}>{item.title}</Text>

                        <TouchableOpacity onPress={() => removeTask(item.id)}>
                            <Feather name="trash-2" size={20} color="#808080" />
                        </TouchableOpacity>

                    </View>
                )
            }}
            ListEmptyComponent={
                <View style={styles.containerEmpty}>
                    <Image source={Clipboard} />
                    <Text style={styles.TitleEmpty}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.subTitleEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            }
        />
    )
}   