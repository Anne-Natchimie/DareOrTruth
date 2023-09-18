import { StyleSheet, StatusBar } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        },
        item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 10,
        },
        title: {
        fontSize: 22,
    },
});