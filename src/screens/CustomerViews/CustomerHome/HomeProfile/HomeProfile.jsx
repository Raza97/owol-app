import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { Image } from 'react-native';
import { Switch } from 'react-native';

import BottomSlider from '../../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomerHeader from './CustomerHeader';
// import CustomerBottomBar from './CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../../routes/ThemeContext';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
import { Colors } from '../../../../../constants/Colors';
import { useUser } from '../../../../contexts/UserContext';
import { StackActions } from '@react-navigation/native';
const HomeProfile = () => {

    const { theme, toggleTheme } = useTheme(); // Get theme state
    const stylesTheme = theme === 'light' ? lightStyles : darkStyles;
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const nav = useNavigation()
    const { clearUser, user } = useUser();
    const [isCustomer, setIsCustomer] = useState(false);

    // Handle logout
    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    style: 'destructive',
                    onPress: () => {
                        clearUser();
                        nav.dispatch(StackActions.replace('onboarding'));
                    },
                },
            ]
        );
    };

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color="grey" />
                </TouchableOpacity>
                <Text style={[styles.sectionTitle, { marginTop: 15 }]}>Profile</Text>
                {/* <View style={styles.progressIndicators}>
                               {renderProgressIndicators()}
                           </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    const profile = () => {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={{ backgroundColor: ggStyles.profileHeroBg.backgroundColor, padding: 20, borderRadius: 16 }}>
                        <View style={styles.profileheader}>
                            <Image
                                source={require('../../../../../assets/images/Avatar.png')}
                                style={styles.profileImage}
                            />
                            <View style={styles.headerTextContainer}>
                                <Text style={styles.name}>{user?.name || 'User'}</Text>
                                <Text style={styles.title}>Head Chef</Text>
                            </View>
                            <TouchableOpacity style={styles.editButton}>
                                <MaterialIcons name="edit" size={20} color={'grey'} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Personal Account</Text>
                        <View style={styles.switchContainer}>
                            <Text style={styles.switchText}>You can switch to Earner account</Text>
                            <Switch
                                value={isCustomer}
                                onValueChange={setIsCustomer}
                                trackColor={{ false: '#83867C', true: Colors.light.btn }}
                                thumbColor={isCustomer ? 'white' : 'white'} // Optional: Customize thumb color
                            />
                        </View>
                    </View>

                    <View style={styles.settingsContainer}>
                        <TouchableOpacity onPress={() => nav.navigate('dietarypreferences')} style={styles.settingItem}>
                            <Text style={styles.settingText}>Dietary Preferences </Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => nav.navigate('tasteprofile')} style={styles.settingItem}>
                            <Text style={styles.settingText}>Taste Profiling</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Account settings</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Appearance</Text>
                            <Text style={styles.settinginnerText}>{theme == 'light' ? 'light mode' : 'dark mode'}</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => nav.navigate('aboutowol')} style={styles.settingItem}>
                            <Text style={styles.settingText}>About OWOL</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Feedback & Support</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 25, marginHorizontal: 10 }}>
                        <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <MaterialIcons name='logout' color={'#ED3F2C'} size={18} />
                            <Text style={{ color: '#ED3F2C', fontSize: 15, marginLeft: 5 }}>Log out</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'grey', fontSize: 15, marginTop: 30 }}>Version 1.0</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {header()}
            {profile()}
        </SafeAreaView>
    )
}

// Define styles for light and dark themes
const lightStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    text: { color: '#000' },
});

const darkStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#000' },
    text: { color: '#fff' },
});

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gg.basicContainer.backgroundColor, // Light background color
    },
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
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: gg.textColor.color
    },
    //profilestyles
    profileContainer: {
        flex: 1,
        marginHorizontal: 18,
    },
    profileheader: {
        // backgroundColor: '#EFF0ED',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    headerTextContainer: {
        marginLeft: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: gg.textColor.color
    },
    title: {
        color: gg.subTextColor.color,
    },
    editButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: gg.textColor.color

    },
    bio: {
        marginBottom: 20,
    },
    section: {
        marginTop: 10,
        // marginBottom: 20,
        backgroundColor: gg.profileHeroBg.backgroundColor,
        borderRadius: 16,
        padding: 20
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    switchText: {
        marginRight: 10,
        color: gg.subTextColor.color
    },
    switchSubtext: {
        color: '#888',
        marginTop: 5,
    },
    earningsContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#EFF0ED',
        borderRadius: 16,
        padding: 20
    },
    earningsIcon: {
        // Add your icon here
    },
    earningsText: {
        fontSize: 25,
        // color:"#83867C",
        fontWeight: 'bold',
        marginLeft: 10,
    },
    earningsSubtext: {
        color: "#83867C",

        marginLeft: 5,
    },
    earningsLabel: {
        color: '#888',
        marginTop: 20,
    },
    settingsContainer: {
        marginTop: 10,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: gg.borderColor.borderColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16
    },
    settingText: {
        flex: 1,
        color: gg.textColor.color,
        fontWeight: '600',
        fontSize: 15
    },
    settinginnerText: {
        color: '#83867C',
        fontWeight: '600',
        fontSize: 16,
        paddingLeft: 80,
    },
})
export default HomeProfile;
