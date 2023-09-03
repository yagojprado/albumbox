// App.js
import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/header';
import Main from './components/main';
export default function App() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
            <Header title="AlbumBox"/>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 20 }}>
                   <Main/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
