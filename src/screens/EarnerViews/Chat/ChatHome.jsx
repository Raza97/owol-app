import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Chat from './Chat';
import EarnerBottomBar from '../EarnerBottomBar';
import { useTheme } from '../../../routes/ThemeContext';
import { Colors } from '../../../../constants/Colors';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
const ChatHome = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const [searchQuery, setSearchQuery] = useState('');
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const [chats, setChats] = useState([
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
        {
            name: 'Christie Denesik',
            message: 'Hello Michael, thank you for sharing your expertise with...',
            timestamp: '12:00',
            lastMessage: 'Homemade bread',
            profileImage: require('../../../../assets/images/Avatar.png'), // Replace with your image
        },
    ]);

    const filteredChats = chats.filter((chat) =>
        chat.name?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        chat.message?.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Chats</Text>

                {/* <View style={{ marginTop: 20 }}>
                                <View style={styles.progressIndicators}>
                                    {renderProgressIndicators()}
                                </View>
                                <Text style={{ fontSize: 12, color: '#83867C', textAlign: 'center', marginTop: 5 }}>Steps {onboardingSteps} of 4</Text>
                            </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            {Header()}
            <View style={styles.searchBar}>
                <MaterialIcons name="search" size={24} color={'#9B9C96'} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search conversations..."
                    placeholderTextColor={'#9B9C96'}
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
            </View>

            <FlatList
                data={filteredChats}
                showsVerticalScrollIndicator={false}
                // keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => <Chat chat={item} index={index} />}
                style={styles.chatList}
            />
            <TouchableOpacity
                style={styles.floatingButton}
            // onPress={() => handleNext()}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>
            <EarnerBottomBar where={'chat'} />
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:gg.basicContainer.backgroundColor,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#141514',
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
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: gg.textColor.color
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 18
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor:Colors.dark.btn,
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 }
    }
});

export default ChatHome;