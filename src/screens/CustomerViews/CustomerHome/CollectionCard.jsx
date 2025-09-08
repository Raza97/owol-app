import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';

const { width } = Dimensions.get('window');

const CollectionCard = ({ title, recipeCount, imageSource, callback }) => {
    const { theme } = useTheme();
    const nav = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                if (callback) {
                    nav.navigate(callback);
                }
            }}
            style={styles.cardWrapper}
        >
            <ImageBackground
                source={imageSource}
                style={styles.image}
                imageStyle={styles.imageBorder}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.85)']}
                    style={styles.overlay}
                >
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardSubtitle}>
                        Save expiring products and cook{'\n'}something delicious
                    </Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        width: width * 0.6,
        height: 320,
        marginRight: 16,
        borderRadius: 12,
        overflow: 'hidden',
        // borderWidth: 2,
        // borderColor: 'purple',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageBorder: {
        borderRadius: 10,
    },
    overlay: {
        height: '50%',
        justifyContent: 'flex-end',
        padding: 12,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 4,
    },
    cardSubtitle: {
        color: '#e0e0e0',
        fontSize: 13,
    },
});

export default CollectionCard;
