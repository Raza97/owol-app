import React, { useEffect, useState } from 'react';
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
import { useTheme } from '../../../../routes/ThemeContext';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
import { Colors } from '../../../../../constants/Colors';

const DietaryPreferences = () => {
    const nav = useNavigation()
    const [isCustomer, setIsCustomer] = useState(false);
    const [settings, setSettings] = useState(false)
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    useEffect(() => {
        console.log('isSheetVisible', isSheetVisible);

    }, [isSheetVisible])


    const popup1 = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Has an OwOL account</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => setIsSheetVisible(false)}>
                        <MaterialIcons name="chevron-right" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Replenish the pantry</Text>
                    <TouchableOpacity onPress={() => setIsSheetVisible(false)} style={styles.addButton}>
                        <MaterialIcons name="chevron-right" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    settings ? setSettings(false) : nav.goBack()
                }}>
                    <MaterialIcons name="chevron-left" size={30} color="grey" />
                </TouchableOpacity>
                {!settings ?
                    <Text style={styles.sectionTitle}>Taste Profiling</Text>
                    : <Text style={{ color: 'transparent' }}>ss</Text>
                }
                {/* <View style={styles.progressIndicators}>
                            {renderProgressIndicators()}
                        </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    const profile = () => {
        return (
            <ScrollView style={{}}>
                <View style={styles.profileContainer}>
                    <View style={styles.settingsContainer}>
                        <TouchableOpacity onPress={() => setSettings(true)} style={styles.settingItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../../../assets/images/Avatar.png')} style={styles.profileImage} resizeMode='contain' />
                                <View style={styles.columnContainer}>
                                    <Text style={styles.textOfMainCell}>Son Mike</Text>
                                    <View style={styles.rowContainer}>
                                        {/* <Image source={require('../../../../../assets/images/profile.png')} style={styles.profileImage1} /> */}
                                        <Text style={styles.textofCell}>Family</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowContainerCircular}>
                                <View style={styles.circle}>
                                    <Text style={styles.text}>+3</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSettings(true)} style={styles.settingItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../../../assets/images/Avatar.png')} style={styles.profileImage} resizeMode='contain' />
                                <View style={styles.columnContainer}>
                                    <Text style={styles.textOfMainCell}>Son Mike</Text>
                                    <View style={styles.rowContainer}>
                                        {/* <Image source={require('../../../../../assets/images/profile.png')} style={styles.profileImage1} /> */}
                                        <Text style={styles.textofCell}>Family</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowContainerCircular}>
                                <View style={styles.circle}>
                                    <Text style={styles.text}>+3</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSettings(true)} style={styles.settingItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../../../assets/images/Avatar.png')} style={styles.profileImage} resizeMode='contain' />
                                <View style={styles.columnContainer}>
                                    <Text style={styles.textOfMainCell}>Son Mike</Text>
                                    <View style={styles.rowContainer}>
                                        {/* <Image source={require('../../../../../assets/images/profile.png')} style={styles.profileImage1} /> */}
                                        <Text style={styles.textofCell}>Family</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowContainerCircular}>
                                <View style={styles.circle}>
                                    <Text style={styles.text}>+3</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSettings(true)} style={styles.settingItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../../../assets/images/Avatar.png')} style={styles.profileImage} resizeMode='contain' />
                                <View style={styles.columnContainer}>
                                    <Text style={styles.textOfMainCell}>Son Mike</Text>
                                    <View style={styles.rowContainer}>
                                        {/* <Image source={require('../../../../../assets/images/profile.png')} style={styles.profileImage1} /> */}
                                        <Text style={styles.textofCell}>Family</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowContainerCircular}>
                                <View style={styles.circle}>
                                    <Text style={styles.text}>+3</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSettings(true)} style={styles.settingItem}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../../../assets/images/Avatar.png')} style={styles.profileImage} resizeMode='contain' />
                                <View style={styles.columnContainer}>
                                    <Text style={styles.textOfMainCell}>Son Mike</Text>
                                    <View style={styles.rowContainer}>
                                        {/* <Image source={require('../../../../../assets/images/profile.png')} style={styles.profileImage1} /> */}
                                        <Text style={styles.textofCell}>Family</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.rowContainerCircular}>
                                <View style={styles.circle}>
                                    <Text style={styles.text}>+3</Text>
                                </View>
                                <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setIsSheetVisible(true)} style={[styles.rowContainer, { alignItems: 'center', marginTop: 15 }]}>
                            <View style={{ backgroundColor: Colors.dark.btn, padding: 2, borderRadius: 16, alignItems: 'center', marginRight: 10 }}>
                                <MaterialIcons name="add" size={15} color={'white'} />
                            </View>
                            <Text style={styles.textOfMainCell}>Add Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }

    const profileDetails = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={[styles.settingItem, { backgroundColor: 'transparent', borderWidth: 0 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../../../assets/images/Avatar.png')} style={styles.profileImage} resizeMode='contain' />
                        <View style={styles.columnContainer}>
                            <Text style={styles.textOfMainCell}>Son Mike</Text>
                            <Text style={styles.textofCell}>@Mike_10</Text>
                            <View style={[styles.rowContainer, { marginTop: 9 }]}>
                                {/* <Image source={require('../../../../../assets/images/profile.png')} style={styles.profileImage1} /> */}
                                <Text style={styles.textofCell}>Family</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: Colors.dark.btn, padding: 10, borderRadius: 30, }}>
                            <Text style={{ fontSize: 13, color: 'white' }}>Profile</Text>
                        </TouchableOpacity>
                        <MaterialIcons name="edit" size={24} style={{ marginTop: 10 }} color={'grey'} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color, }}>Allergies</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <MaterialIcons name={'add'} color={Colors.dark.btn} size={28} />
                    </View>
                </View>

                <View style={{
                    width: '100%',
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: ggStyles.borderColor.borderColor,
                    borderWidth: 1,
                    borderRadius: 16,
                    marginTop: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../../../assets/images/milk.jpg')} resizeMode='cover' style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }} />
                        <Text style={[{
                            fontSize: 17,
                            textAlignVertical: "center",
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: 12,
                            color: ggStyles.textColor.color
                        }]}>Dairy-free</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete-outline" size={25} color={'grey'} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: ggStyles.borderColor.borderColor,
                    borderWidth: 1,
                    borderRadius: 16,
                    marginTop: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../../../assets/images/milk.jpg')} resizeMode='cover' style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }} />
                        <Text style={[{
                            fontSize: 17,
                            textAlignVertical: "center",
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: 12,
                            color: ggStyles.textColor.color
                        }]}>Seafood-free</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete-outline" size={25} color={'#83867C'} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color, }}>Products to avoid</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <MaterialIcons name={'add'} color={Colors.dark.btn} size={28} />
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: ggStyles.borderColor.borderColor,
                    borderWidth: 1,
                    borderRadius: 16,
                    marginTop: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../../../assets/images/milk.jpg')} resizeMode='cover' style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }} />
                        <Text style={[{
                            fontSize: 17,
                            textAlignVertical: "center",
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: 12,
                            color: ggStyles.textColor.color
                        }]}>Dairy-free</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete-outline" size={25} color={'grey'} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color, }}>Products to avoid</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <MaterialIcons name={'add'} color={Colors.dark.btn} size={28} />
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: ggStyles.borderColor.borderColor,
                    borderWidth: 1,
                    borderRadius: 16,
                    marginTop: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../../../assets/images/milk.jpg')} resizeMode='cover' style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }} />
                        <Text style={[{
                            fontSize: 17,
                            textAlignVertical: "center",
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: 12,
                            color: ggStyles.textColor.color
                        }]}>Dairy-free</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete-outline" size={25} color={'grey'} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color, }}>Favorite Cuisines</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <MaterialIcons name={'add'} color={Colors.dark.btn} size={28} />
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: ggStyles.borderColor.borderColor,
                    borderWidth: 1,
                    borderRadius: 16,
                    marginTop: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../../../assets/images/milk.jpg')} resizeMode='cover' style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }} />
                        <Text style={[{
                            fontSize: 17,
                            textAlignVertical: "center",
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: 12,
                            color: ggStyles.textColor.color
                        }]}>Indian</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete-outline" size={25} color={'grey'} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    padding: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderColor: ggStyles.borderColor.borderColor,
                    borderWidth: 1,
                    borderRadius: 16,
                    marginTop: 10
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../../../../assets/images/milk.jpg')} resizeMode='cover' style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30
                        }} />
                        <Text style={[{
                            fontSize: 17,
                            textAlignVertical: "center",
                            fontSize: 15,
                            fontWeight: '600',
                            marginLeft: 12,
                            color: ggStyles.textColor.color
                        }]}>American</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="delete-outline" size={25} color={'grey'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {header()}
            {!settings && profile()}
            {settings && profileDetails()}

            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {popup1()}
            </BottomSlider>
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
        marginTop: 10
    },

    greeting: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    sectionTitle: {
        marginTop: 10,
        fontSize: 18,
        color: gg.textColor.color,
        fontWeight: 'bold',
        marginBottom: 10,
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
        justifyContent: 'space-between'
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
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: gg.borderColor.borderColor,
        borderWidth: 1,
        padding: 5,
        borderRadius: 16
    },
    settingText: {
        flex: 1,
        color: 'black',
        fontWeight: '600',
        fontSize: 13
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
        borderRadius: 25, // Makes it circular
        backgroundColor: gg.subTextBg.backgroundColor, // Customize circle color
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    text: {
        color: gg.subTextColor.color,
        fontSize: 10,
        fontWeight: 'bold',
    },

    columnContainer: {
        // flexDirection: 'column',  // Ensures "Son Mike" is on top
        // alignItems: 'center',  // Centers everything horizontally
        padding: 10,  // Optional padding
    },
    rowContainer: {
        // backgroundColor: '#EFF0ED',  // Adds background color
        flexDirection: 'row',  // Ensures Image and "Family" are in one row
        alignItems: 'center',  // Aligns them vertically
        marginTop: 5,  // Adds spacing below "Son Mike"
    },
    profileImage1: {
        width: 15,  // Adjust size as needed
        height: 15,
        marginRight: 5,  // Space between image and text
    },
    textofCell: {
        fontSize: 13,
        color: '#83867C',
    },
    textOfMainCell: {
        fontSize: 16,
        color: gg.textColor.color,
        fontWeight: 'bold',
    },

    rowContainerCircular: {
        flexDirection: 'row', // Align elements in a row
        // alignItems: 'center', // Center items vertically
        // justifyContent: 'space-between', // Align everything to the right
    },

    textofCellAddCell: {
        fontSize: 16,
        color: '#83867C',
    },
    optionsList: {
        marginTop: 10
    },
    optionContainer: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        // borderBottomWidth: 1,
        padding: 5,
        // borderBottomColor: '#E8EAE3'
    },
    optionText: {
        fontSize: 16,
        color: gg.textColor.color,
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: Colors.dark.btn,
        borderRadius: 30
    },

})
export default DietaryPreferences;