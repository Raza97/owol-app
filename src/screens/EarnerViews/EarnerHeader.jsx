import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';
import { useUser } from '../../contexts/UserContext';
const EarnerHeader = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const { user } = useUser();
    const nav = useNavigation()
    
    // Get user's first name or fallback to "User"
    const userName = user?.name ? user.name.split(' ')[0] : 'User';
    
    return (
        <View style={styles.header}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>

                <Image
                    source={require('../../../assets/images/Avatar.png')} // Replace with user's profile image
                    style={styles.profileImage}
                />
                <Text style={[styles.greeting, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Hi, {userName}!</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => nav.navigate('peopleview')}>
                    {/* <Image
                        source={require('../../../assets/images/profile.png')} // Replace with user's profile image
                        style={{ marginRight: 10, }}
                    /> */}
                    <MaterialIcons name="people-alt" size={24} color="gray" />
                </TouchableOpacity>
                <MaterialIcons name="notifications" size={24} color="gray" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
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
});

export default EarnerHeader;