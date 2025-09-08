import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import ChatMessage from './ChatMessage';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const Messenger = () => {
    const nav = useNavigation()
    const [inp, setInp] = useState('')
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const chatMessages = [
        {
            senderName: 'Francis Wuckert',
            message: 'Hi, Michael!! I have a question about upcoming class. Is it possible to swap out some of the ingredients because I am allergic to milk :) Thanks in advance!!',
            timestamp: '9:41',
            lastSeen: 'Last seen 1 hour ago',
        },
        // Add more chat messages here
    ];

    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color={ggStyles.textColor.color} />
                </TouchableOpacity>

                <View style={styles.messageHeader}>
                    <Image
                        source={require('../../../../assets/images/Avatar.png')} // Replace with actual image
                        style={styles.profileImage}
                    />
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.name}>Francis Bacon</Text>
                        <Text style={styles.lastSeen}>Last seen 1 hour ago</Text>
                    </View>
                </View>
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            {Header()}
            <FlatList
                data={chatMessages}
                keyExtractor={(item) => item.timestamp}
                renderItem={({ item }) => <ChatMessage message={item} />}
            />
            <TextInput
                style={{
                    padding: 10,
                    marginTop: -10,
                    marginBottom: 20,
                    // paddingVertical: 12,
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 16,
                    color: ggStyles.textColor.color,
                    // height: '100%',
                    borderWidth: 1,
                    borderColor: ggStyles.borderColor.borderColor
                }}
                placeholder="Message"
                placeholderTextColor={"#A6A8A0"}
                multiline
                numberOfLines={4}
                value={inp}
                onChangeText={setInp}
            />
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gg.basicContainer.backgroundColor,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 15,
        borderRadius: 8
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    chatList: {
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    greeting: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        marginBottom: 20,
        paddingBottom: 10,
        marginTop: 40,
        marginHorizontal: 18,
        borderBottomWidth: 1,
        borderBottomColor: gg.borderColor.borderColor
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#44463F',
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }
    },

    headerTextContainer: {
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold',
        color: gg.textColor.color
    },
    lastSeen: {
        color: '#888',
        fontSize: 12,
    },
    messageHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    }

});

export default Messenger;