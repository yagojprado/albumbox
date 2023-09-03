import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PlaylistCardStyles } from '../css/PlaylistCard';
import {Linking} from "react-native";

export default function PlaylistCard({ title, releaseDate, artistName, imageURL, rating, userReview, link }) {
    const imageURI = Image.resolveAssetSource(imageURL).uri; // Converte a imagem em uma URI

    const renderRatingStars = (rating) => {
        const starIcons = '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
        return (
            <Text style={PlaylistCardStyles.rating}>{starIcons}</Text>
        );
    };

    return (
        <TouchableOpacity
            onPress={() => {
                Linking.openURL(link); // Abre o link quando o card é pressionado
            }}
        >
            <View style={PlaylistCardStyles.container}>
                <Image
                    source={{ uri: imageURI }}
                    style={PlaylistCardStyles.image}
                />
                <Text style={PlaylistCardStyles.title}>{title}, {artistName}</Text>
                <Text style={PlaylistCardStyles.releaseDate}>{releaseDate}</Text>
                <View style={PlaylistCardStyles.ratingContainer}>
                    <View style={PlaylistCardStyles.ratingStarsContainer}>
                        {renderRatingStars(rating)}
                    </View>
                </View>
                <Text style={PlaylistCardStyles.userReview}>{userReview}</Text>
            </View>
        </TouchableOpacity>
    );
}
