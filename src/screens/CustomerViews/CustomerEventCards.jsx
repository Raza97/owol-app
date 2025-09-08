import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomerEventCards = ({ title, description, imageSource }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme
    const styles = getStyles(theme)
    return (
        <View style={styles.card}>
            <Image source={imageSource} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{title}</Text>
                <Text style={[styles.lessonCount, { color: theme == 'light' ? '#44463F' : Colors.dark.text }]}>{description}</Text>
            </View>
            <View style={{ padding: 10, width: '10%' }}>
                <MaterialIcons name='add' color={Colors.light.btn} />
            </View>
        </View>
    );
};

const getStyles = (theme) => StyleSheet.create({
    card: {
        paddingBottom: 7,
        // backgroundColor:'aqua',
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: theme == 'light' ? 1 : 0,
        borderBottomColor: theme == 'light' && '#E8EAE3'
        // marginRight: 10,
    },
    cardImage: {
        width: '30%',
        height: '100%',
        borderRadius: 10,
    },
    cardContent: {
        width: '60%',
        padding: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    lessonCount: {
        marginTop: 3,
        fontSize: 12,
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

export default CustomerEventCards;