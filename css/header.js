import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#121212',
        height: 80,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
