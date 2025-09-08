import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';

const RecipeCard = ({ title, rating, likes, imageSource }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={[styles.cardTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{title}</Text>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#ffcc00" />
                        <Text style={[styles.rating, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{rating}</Text>
                    </View>
                    <View style={styles.likesContainer}>
                        <Ionicons name="heart" size={16} color="#ff0000" />
                        <Text style={[styles.likesText, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{likes}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 150,
        marginRight: 10,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 5,
    },
    rating: {
        // marginLeft: 5,
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 5,
    },
    likesText: {
        // marginLeft: 5,
    },
});

export default RecipeCard;