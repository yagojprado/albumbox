import { StyleSheet } from 'react-native';

export const PlaylistCardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        borderRadius: 8,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
    },
    releaseDate: {
        fontSize: 14,
        color: 'white',
        paddingLeft: 10,
    },
    artistName: {
        fontSize: 14,
        color: 'white',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    ratingStarsContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
    rating: {
        fontSize: 16,
        color: 'gold',
    },
    userReview: {
        fontSize: 16,
        color: 'white',
        padding: 10,
    },
});
