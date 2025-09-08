import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, Switch } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import useCustomerStyles from "../../../../../constants/GlobalCustomerStyles";
import { useTheme } from "../../../../routes/ThemeContext";
import { Colors } from "../../../../../constants/Colors";
const { width, height } = Dimensions.get('window');

const AboutOwol = () => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color={ggStyles.textColor.color} />
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>About OWoL</Text>
                {/* <View style={styles.progressIndicators}>
                    {renderProgressIndicators()}
                </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {header()}
            <View style={{ marginHorizontal: 18, }}>
                <View style={{ height: '70%', }}>
                    <Image
                        source={require('../../../../../assets/images/OwOLLogo.png')}
                        style={{ alignSelf: 'center' }}
                    />
                    <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, lineHeight: 23, marginTop: 20, textAlign: 'center' }}>
                        OWoL is an invitation to live a life where every meal is a masterpiece, every snack an experience, and every diet a pathway to well-being. This is our promise, our dream, our quest - to make OWoL the food-hub of your life, where you manage less and savor more. Welcome to the future of food – welcome to OWoL!
                    </Text>
                </View>
                <View style={styles.settingsContainer}>
                    <TouchableOpacity  style={styles.settingItem}>
                        <Text style={styles.settingText}>Terms of use</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.settingItem}>
                        <Text style={styles.settingText}>Privacy Policy</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>Enjoy the app? Rate us</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const getStyles = (theme, gg) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: gg.basicContainer.backgroundColor,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: gg.textColor.color
        // marginBottom: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: "#000000"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        marginTop: 40,
        marginHorizontal: 20
    },
    progressIndicators: {
        flexDirection: 'row',
        // marginLeft: 20,
    },
    activeIndicator: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        marginRight: 5,
    },
    inactiveIndicator: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        marginRight: 5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeButton: {
        marginLeft: 10,
    },
    orText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    socialIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    socialButtonText: {
        color: 'black',
    },
    signupButton: {
        backgroundColor: '#007aff',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        marginTop: 20,
    },
    signupButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        textAlign: 'center',
    },
    loginLink: {
        color: 'blue', // Or your link color
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#13100D',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#E8EAE3",
        borderRadius: 8,
        padding: 5,
        color: 'black',
        width: width / 1.1,
    },
    label: {
        fontSize: 13,
        marginBottom: 5,
        fontWeight: '600',
        color: 'black',
    },
    cuisineItem: {
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#E8EAE3',
        borderRadius: 12,
        marginBottom: 10,
    },
    selectedCuisine: {
        borderColor: '#83867C',
    },
    cuisineText: {
        color: 'black',
        fontSize: 19,
    },
    subText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: "#83867C",
        width: width / 1.3
    },
    searchBar: {
        // borderWidth: 1,
        backgroundColor: '#EFF0ED',
        // borderColor: '#ccc',
        borderRadius: 12,
        padding: 10,
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '25%', // Adjust width for desired grid layout
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    imagePlaceholder: {
        width: 50,
        height: 50,
        tintColor: 'gray', // Optional: tint the image icon
    },
    ingredientText: {
        marginTop: 2,
        color: 'black',
        fontWeight: '600'
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 30,
    },
    editIconContainer: {
        position: 'absolute',
        // bottom: 0,
        // height:30,
        right: 120,
        backgroundColor: 'lightgrey', // Blue background
        padding: 5,
        borderRadius: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    characterCount: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
        textAlign: 'right',
    },
    addCertificatesButton: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 15,
    },
    certificateIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    addCertificatesText: {
        color: '#44463F',
    },
    daysView: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginTop: 15,
        // marginBottom: 10,
    },
    daysContainer: {
        flexDirection: 'row',
    },
    dayButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedDay: {
        backgroundColor: '#44463F',
        borderWidth: 2,
        borderColor: '#44463F',
    },
    dayText: {
        fontSize: 14,
        color: 'black'
    },
    selectedDayText: {
        color: 'white'
    },
    timeContainer: {
        marginTop: 20,
        borderRadius: 16,
        backgroundColor: '#e4e6e1',
        padding: 10,
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10
        padding: 6
    },
    dayLabel: {
        fontSize: 16,
        color: 'black',
        width: width / 2
    },
    timeText: {
        fontSize: 12,
        color: '#5C5D58',
    },
    editButton: {
        marginLeft: 10,
    },
    sameTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
    },
    sameTimeText: {
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#44463F',
        // width:100,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        // alignSelf:'center'
    },
    settingsContainer: {
        marginTop: 10,
        marginHorizontal: 18
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
});

export default AboutOwol;