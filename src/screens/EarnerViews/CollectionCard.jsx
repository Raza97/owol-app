import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';
const CollectionCard = ({ title, recipeCount, imageSource }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme
    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{title}</Text>
                <Text style={[styles.recipeCount, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{recipeCount} recipes</Text>
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
        marginTop: 5,
    },
    rating: {
        marginLeft: 5,
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    likesText: {
        marginLeft: 5,
    },
});

export default CollectionCard;