import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { useTheme } from '../routes/ThemeContext';



const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BottomSlider = ({ children, visible, setIsSheetVisible }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const translateY = useRef(new Animated.Value(visible ? 0 : windowHeight)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: visible ? 0 : windowHeight,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <TouchableOpacity style={StyleSheet.absoluteFill} onPress={() => { setIsSheetVisible(false) }}
                pointerEvents={visible ? 'auto' : 'none'} />
            <Animated.View
                style={[
                    styles.modalContainer,
                    {
                        backgroundColor: theme === 'light' ? 'white' : Colors.dark.secondaryBackground,
                        transform: [{ translateY }],
                    },
                ]}
            >
                <TouchableOpacity hitSlop={5} onPress={() => { setIsSheetVisible(false) }}>
                    <View style={styles.draggerIcon} />

                </TouchableOpacity>
                {children}
            </Animated.View>
        </GestureHandlerRootView >
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        zIndex: 100,
        elevation: 4,
        position: 'absolute',
        bottom: 20,
        // left: 0,
        // right: 1000,
        alignSelf: 'center',
        width: windowWidth / 1.09,
        backgroundColor: 'white',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 10,
        borderRadius: 24
    },

    draggerIcon: {
        alignSelf: 'center',
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        marginRight: 5,

    },
});

export default BottomSlider;