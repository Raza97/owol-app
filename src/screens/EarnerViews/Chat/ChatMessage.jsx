import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const ChatMessage = ({ message }) => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    return (
        <View style={styles.messageContainer}>
            <View style={styles.messageContent}>
                <View style={styles.messageMeta}>
                    <MaterialIcons name="school" size={18} color={ggStyles.textColor.color} />
                    <Text style={styles.metaText}>Class</Text>
                    <Text style={styles.metaText}>Sat, 12 Mar</Text>
                    <MaterialIcons name="circle" size={12} style={styles.onlineIndicator} />
                    <Text style={styles.metaText}>Online</Text>
                </View>
                <View style={styles.messageBodyContainer}>
                    <Text style={styles.messageText}>{message.message}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={styles.messageLabel}>Homemade bread</Text>
                    <Text style={styles.timestamp}>9:41</Text>
                </View>
            </View>
        </View>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    messageContainer: {
        marginBottom: 10,
    },
    messageHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    headerTextContainer: {
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold',
    },
    lastSeen: {
        color: '#888',
        fontSize: 12,
    },
    messageContent: {
        backgroundColor: gg.profileHeroBg.backgroundColor,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        padding: 15,
        marginTop: 5,
        marginHorizontal: 18
    },
    messageMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    metaText: {
        marginLeft: 5,
        fontSize: 12,
        color: '#888',
    },
    onlineIndicator: {
        color: 'green',
        marginLeft: 5,
    },
    messageBodyContainer: {
        marginBottom: 5,
        // justifyContent:'center'
    },
    messageText: {
        fontSize: 14,
        color: gg.textColor.color
    },
    messageLabel: {
        color: '#888',
        fontSize: 12,
    },
    timestamp: {
        alignSelf: 'flex-end',
        color: '#888',
        fontSize: 12,
    },
});

export default ChatMessage;