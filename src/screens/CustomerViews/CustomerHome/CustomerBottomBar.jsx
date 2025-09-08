import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';

const CustomerBottomBar = ({ where }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const styles = getStyles(theme)

    console.log(where)
    const nav = useNavigation()
    return (
        <View style={[styles.container, { backgroundColor: theme === 'light' ? 'white' : Colors.dark.background }]}>
            <TouchableOpacity onPress={() => nav.navigate('customerhome')} style={styles.iconContainer}>
                {where === 'home' ?
                    <Image
                        source={require('../../../../assets/images/homeselect.png')}
                    /> :
                    <Image
                        source={require('../../../../assets/images/home.png')}
                    />
                }
                <Text style={[styles.iconLabel, { color: where === 'home' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('mealplanhome')} style={styles.iconContainer}>
                {where === 'mealplan' ?
                    <Image
                        source={require('../../../../assets/images/mealplanselect.png')}
                    /> :
                    <Image
                        source={require('../../../../assets/images/mealplan.png')}
                    />
                }
                <Text style={[styles.iconLabel, { color: where === 'mealplan' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Meal Plans</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('kitchenspacehome')} style={styles.iconContainer}>
                {
                    where === 'kitchenspace' ?
                        <Image
                            source={require('../../../../assets/images/kitchenselect.png')}
                        /> :
                        <Image
                            source={require('../../../../assets/images/kitchen.png')}
                        />
                }
                <Text style={[styles.iconLabel, { color: where === 'kitchenspace' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Kitchen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('discoverhome')} style={styles.iconContainer} >
                {where === 'discover' ?
                    <Image
                        source={require('../../../../assets/images/discoveryselect.png')}

                    />
                    :
                    <Image
                        source={require('../../../../assets/images/discovery.png')}

                    />
                }
                <Text style={[styles.iconLabel, { color: where === 'discover' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Discover</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('customercalendarhome')} style={styles.iconContainer}>
                {
                    where === 'calendar' ?
                        <Image
                            source={require('../../../../assets/images/calendarselect.png')}
                        /> :
                        <Image
                            source={require('../../../../assets/images/calendar.png')}
                        />
                }
                <Text style={[styles.iconLabel, { color: where === 'calendar' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Calendar</Text>
            </TouchableOpacity>
        </View>
    );
};

const getStyles = (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60, // Adjust height as needed
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: theme == 'light' ? '#EFF0ED' : '#32332E',
    },
    iconContainer: {
        alignItems: 'center',
    },
    activeiconContainer: {
        alignItems: 'center',
        backgroundColor: '#D2D4CD',
        borderRadius: 15,
        padding: 10
    },
    iconLabel: {
        fontSize: 12,
        marginTop: 5,
    },
    profileImage: {
        width: 25,
        height: 25
    }
});

export default CustomerBottomBar;