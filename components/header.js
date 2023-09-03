import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../css/header';

export default function Header() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const updateGreeting = () => {
            const currentTime = new Date().getHours();
            let newGreeting;

            if (currentTime >= 5 && currentTime < 12) {
                newGreeting = 'Bom dia';
            } else if (currentTime >= 12 && currentTime < 18) {
                newGreeting = 'Boa tarde';
            } else {
                newGreeting = 'Boa noite';
            }

            setGreeting(newGreeting);
        };

        updateGreeting();

        const interval = setInterval(updateGreeting, 60000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.title}>AlbumBox</Text>
            <Text style={headerStyles.title}>{greeting}</Text>
        </View>
    );
}
