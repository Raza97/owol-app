import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Image } from 'react-native';
import { Switch } from 'react-native';

import BottomSlider from '../../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomerHeader from './CustomerHeader';
// import CustomerBottomBar from './CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../../constants/Colors';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
import { useTheme } from '../../../../routes/ThemeContext';

const DietaryPreferences = () => {
    const nav = useNavigation()
    const [isCustomer, setIsCustomer] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color="grey" />
                </TouchableOpacity>
                <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Dietary Preferences</Text>
                {/* <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    const profile = () => {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.settingsContainer}>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Diet type </Text>
                            <Text style={styles.settinginnerText}>Mediterranean</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Allergies </Text>
                            <Text style={styles.settinginnerText}>Gluten-free</Text>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Favorite cuisines</Text>
                            <Text style={styles.settinginnerText}>Asian, Italian </Text>
                            <View style={styles.circle}>
                                <Text style={styles.text}>+3</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.settingItem}>
                            <Text style={styles.settingText}>Avoided ingredients</Text>
                            <Text style={styles.settinginnerText}>Pepper </Text>
                            <View style={styles.circle}>
                                <Text style={styles.text}>+3</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.switchViewStyle}>
                        <Text style={styles.switchTxt} >Show preferences on Profile page</Text>
                        <Switch
                            value={isEnabled}
                            onValueChange={(value) => setIsEnabled(value)}
                            trackColor={{ false: '#83867C', true: Colors.light.btn }}
                            thumbColor={isEnabled ? 'white' : 'white'} // Optional: Customize thumb color
                        />
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
    },
    title: {
        color: '#888',
    },
    editButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },

    bio: {
        marginBottom: 20,
    },
    section: {
        marginTop: 10,
        // marginBottom: 20,
        backgroundColor: '#EFF0ED',
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
        fontSize: 13,
    },
    settinginnerText: {
        color: '#83867C',
        fontWeight: '600',
        fontSize: 16,
        paddingLeft: 80,
    },
    circle: {
        padding: 5,
        width: 30,
        borderRadius: 25, // Half of width/height to make it circular
        backgroundColor: gg.subTextBg.backgroundColor, // Customize color
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: gg.subTextColor.color,
        fontSize: 10,
        fontWeight: 'bold',
    },
    switchTxt: {
        color: gg.subTextColor.color,
        fontSize: 15,
        fontWeight: '600',
    },
    switchViewStyle: {
        flexDirection: 'row',  // Align items in a row
        alignItems: 'center',  // Center vertically
        justifyContent: 'space-between', // Space between text and switch
        padding: 10,
    }
})
export default DietaryPreferences;