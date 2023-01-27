import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: '#262626',
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    taskText: {
        fontSize: 16,
        color: '#F2F2F2',
        width: "75%"
    },
    taskTextDone: {
        textDecorationLine: 'line-through',
        color: "#808080",
        fontSize: 16,
        width: "75%"
    },
    taskMarkerDone: {
        height: 24,
        width: 24,
        borderRadius: 24,
        backgroundColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskMarker: {
        height: 24,
        width: 24,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#4EA8DE',
        alignItems: 'center',
        justifyContent: 'center'
    },
});