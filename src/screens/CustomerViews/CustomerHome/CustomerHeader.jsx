import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const CustomerHeader = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => nav.navigate('customerhomeprofile')} style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>

                <Image
                    source={require('../../../../assets/images/Avatar2.png')} // Replace with user's profile image
                    style={styles.profileImage}
                />
                <Text style={[styles.greeting, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Hi, Kate!</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* <TouchableOpacity onPress={() => nav.navigate('customerhomeprofile')}>
                    <Image
                        source={require('../../../../assets/images/profile.png')} // Replace with user's profile image
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity> */}
                <MaterialIcons name="settings" size={24} color="gray" style={{ marginRight: 10 }} />
                <MaterialIcons name="notifications" size={24} color="gray" />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 11,
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

export default CustomerHeader;