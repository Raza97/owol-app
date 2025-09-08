import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useTheme } from '../../../routes/ThemeContext';
import { Colors } from '../../../../constants/Colors';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const Chat = ({ chat, index }) => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    return (
        <TouchableOpacity onPress={() => nav.navigate('messenger')} key={index} style={styles.listItem}>
            <Image
                source={chat.profileImage}
                style={styles.profileImage}
            />
            <View style={styles.listItemContent}>
                <Text style={styles.name}>{chat.name}</Text>
                <Text style={styles.message}>{chat.message}</Text>
                {/* <Text style={styles.lastMessage}>{chat.lastMessage}</Text> */}
            </View>
            <View style={styles.timestampContainer}>
                <Text style={styles.timestamp}>{chat.timestamp}</Text>
                <View style={styles.lastMessageContainer}>
                    <Text style={{ backgroundColor: '#FFD003', borderRadius: 30, padding: 2, fontSize: 8, color: 'black', width: 15, textAlign: 'center', fontWeight: '600' }}>1</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    listItem: {
        marginHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: gg.borderColor.borderColor,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    listItemContent: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontWeight: 'bold',
        color: gg.textColor.color

    },
    message: {
        color: gg.subTextColor.color,
    },
    timestampContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timestamp: {
        color: '#888',
    },
    lastMessageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
    },
    lastMessage: {
        marginLeft: 3,
        color: '#888',
        backgroundColor: '#E8EAE3',
        color: '#83867C',
        marginTop: 5,
        textAlign: 'center',
        borderRadius: 8,
        padding: 3,

    },
});

export default Chat;