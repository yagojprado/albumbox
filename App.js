import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function App() {
    const [contentTextPressed, setContentTextPressed] = useState(false);

    const handleContentTextPress = () => {
        setContentTextPressed(!contentTextPressed);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>AlbumBox</Text>
            </View>
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.contentTouchable}
                    onPress={handleContentTextPress}
                    activeOpacity={0.7}
                >
                    <Text
                        style={[
                            styles.contentText,
                            contentTextPressed && styles.contentTextPressed,
                        ]}
                    >
                        Ainda em Desenvolvimento.
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        backgroundColor: 'white',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentTouchable: {
        alignItems: 'center',
    },
    contentText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    contentTextPressed: {
        color: 'red',
    },
});