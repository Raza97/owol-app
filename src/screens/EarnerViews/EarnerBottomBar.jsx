import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';


const EarnerBottomBar = ({ where }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const styles = getStyles(theme)
    console.log(where)
    const nav = useNavigation()
    return (
        <View style={[styles.container, { backgroundColor: theme === 'light' ? 'white' : Colors.dark.background }]}>
            <TouchableOpacity onPress={() => nav.navigate('cookbookhome')} style={styles.iconContainer}>
                <MaterialIcons name="menu-book" size={24} color={where === 'cookbook' ? (theme === 'light' ? Colors.light.btn : Colors.dark.btn) : theme === 'light' ? Colors.light.text : Colors.dark.text} />
                <Text style={[styles.iconLabel, { color: where === 'cookbook' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Cookbook</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('contenthome')} style={styles.iconContainer}>
                <MaterialIcons name="add" size={24} color={where === 'content' ? (theme === 'light' ? Colors.light.btn : Colors.dark.btn) : theme === 'light' ? Colors.light.text : Colors.dark.text} />
                <Text style={[styles.iconLabel, { color: where === 'content' ? (theme === 'light' ?Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Content</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('calendarhome')} style={styles.iconContainer}>
                <MaterialIcons name="calendar-today" size={24} color={where === 'calendar' ? (theme === 'light' ? Colors.light.btn : Colors.dark.btn) : theme === 'light' ? Colors.light.text : Colors.dark.text} />
                <Text style={[styles.iconLabel, { color: where === 'calendar' ? (theme === 'light' ? Colors.light.selectedText: Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('chathome')} style={styles.iconContainer} >
                <MaterialIcons name="chat" size={24} color={where === 'chat' ? (theme === 'light' ? Colors.light.btn : Colors.dark.btn) : theme === 'light' ? Colors.light.text : Colors.dark.text} />
                <Text style={[styles.iconLabel, { color: where === 'chat' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text}]}>Chats</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => nav.navigate('profilehome')} style={styles.iconContainer}>
                <MaterialIcons name="person" size={24} color={where === 'profile' ? (theme === 'light' ? Colors.light.btn : Colors.dark.btn) : theme === 'light' ? Colors.light.text : Colors.dark.text} />
                <Text style={[styles.iconLabel, { color: where === 'profile' ? (theme === 'light' ? Colors.light.selectedText : Colors.dark.selectedText) : theme === 'light' ? Colors.light.text : Colors.dark.text }]}>Profile</Text>
            </TouchableOpacity>
        </View >
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
        color: '#79B939'
    },
});

export default EarnerBottomBar;