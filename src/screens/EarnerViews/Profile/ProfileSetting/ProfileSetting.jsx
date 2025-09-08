import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch,
    Dimensions
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
import { useTheme } from '../../../../routes/ThemeContext';
import { Colors } from '../../../../../constants/Colors';
const { width, height } = Dimensions.get('window');

const ProfileSetting = () => {
    const [num, setNum] = useState(1)
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const payoutList = [
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },
        { name: 'Homemade bread', amount: '+ $5' },

    ]


    const handleBack = () => {
        // setNum((prev) => {
        //     if (prev > 1) {
        //         return prev - 1
        //     }
        //     return prev
        // });
        nav.goBack()
    }

    const Header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <MaterialIcons name="chevron-left" size={30} color={ggStyles.textColor.color} />
                </TouchableOpacity>

                {num === 1 && <Text style={styles.sectionTitle}>Account Setting</Text>}
                {num === 2 && <Text style={styles.sectionTitle}>Payouts</Text>}
                {num === 3 && <Text style={styles.sectionTitle}>Payout Methods</Text>}
                {num === 4 && <Text style={styles.sectionTitle}>Payouts History</Text>}
                {num === 5 && <Text style={styles.sectionTitle}>Payouts History</Text>}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    const profileSetView = () => {
        return (
            <View style={styles.settingsContainer}>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Personal Information</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(2)} style={styles.settingItem}>
                    <Text style={styles.settingText}>Payouts</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Privacy</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Notifications</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
            </View>
        )
    }

    const paymentView = () => {
        return (
            <View style={styles.settingsContainer}>
                <TouchableOpacity onPress={() => setNum(3)} style={styles.settingItem}>
                    <Text style={styles.settingText}>Payout methods</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setNum(4)} style={styles.settingItem}>
                    <Text style={styles.settingText}>Payouts history</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Tax information</Text>
                    <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                </TouchableOpacity>
            </View>
        )
    }

    const payoutMethod = () => {
        return (
            <View style={styles.settingsContainer}>
                <Text style={{ height: '10%', color: ggStyles.textColor.color }}>Set up at list one payout method so we know where to send the money</Text>
                <View style={{ height: '70%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../../../../../assets/images/wallet.png')}
                    // style={ }
                    />
                    <Text style={{ color: '#83867C', fontSize: 13 }}>Add at least one payout method</Text>
                </View>
            </View>
        )
    }

    const payoutHistory = () => {
        return (
            <ScrollView style={styles.settingsContainer} showsVerticalScrollIndicator={false}>
                {theme == 'light' ?
                    < Image
                        source={require('../../../../../assets/images/charthistorywhite.png')}
                        resizeMode='contain'
                        style={{ marginTop: 30, width: '100%' }}
                    /> :
                    <Image
                        source={require('../../../../../assets/images/charthistoryblack.png')}
                        resizeMode='contain'
                        style={{ marginTop: 30, width: '100%' }}
                    />
                }
                <Text style={[styles.sectionTitle, { marginTop: 50 }]}>List of payouts</Text>
                {payoutList.map((item, index) => (
                    <View key={index} style={{
                        marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%',
                        alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: ggStyles.borderColor.borderColor
                    }}>
                        <Text style={{
                            color: ggStyles.textColor.color,
                            fontWeight: '500',
                            fontSize: 15
                        }}>{item.name}</Text>
                        <Text style={{
                            color: ggStyles.textColor.color,
                            fontWeight: '600',
                            fontSize: 15
                        }}>{item.amount}</Text>
                    </View>
                ))}
            </ScrollView>
        )
    }
    const setUpPayouts = () => {
        return (
            <View style={[styles.settingsContainer, { height: '79%' }]}>
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', borderRadius: 12, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 20 }}>
                    <Text style={{
                        color: ggStyles.textColor.color,
                        fontWeight: '500',
                        fontSize: 15
                    }} >Billing country</Text>
                    <Text style={{
                        color: ggStyles.textColor.color,
                        fontWeight: '400',
                        fontSize: 15
                    }} >USA</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 25 }}>
                    <Text style={styles.sectionTitle}>How would you like to get paid?</Text>
                    <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ borderRadius: 30, padding: 10, backgroundColor: ggStyles.borderColor.borderColor }}>
                                {
                                    theme == 'light' ?
                                        <Image
                                            source={require('../../../../../assets/images/bank.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../../assets/images/bankblack.png')}
                                        />
                                }
                            </View>
                            <Text style={{
                                marginLeft: 20,
                                color: ggStyles.textColor.color,
                                fontWeight: '500',
                                fontSize: 15
                            }}>Bank account</Text>
                        </View>
                        <MaterialIcons name="radio-button-checked" size={20} color={ggStyles.textColor.color} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ borderRadius: 30, padding: 10, backgroundColor: ggStyles.borderColor.borderColor }}>
                                <Image
                                    source={require('../../../../../assets/images/PayPal.png')}
                                />
                            </View>
                            <Text style={{
                                marginLeft: 20,
                                color: ggStyles.textColor.color,
                                fontWeight: '500',
                                fontSize: 15
                            }}>Paypal</Text>
                        </View>
                        <MaterialIcons name="radio-button-unchecked" size={20} color={ggStyles.textColor.color} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', padding: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ borderRadius: 30, padding: 10, backgroundColor: ggStyles.borderColor.borderColor }}>
                                <Image
                                    source={require('../../../../../assets/images/patreon.png')}
                                // style={ }
                                />
                            </View>
                            <Text style={{
                                marginLeft: 20,
                                color: ggStyles.textColor.color,
                                fontWeight: '500',
                                fontSize: 15
                            }}>Patreon</Text>
                        </View>
                        <MaterialIcons name="radio-button-unchecked" size={20} color={ggStyles.textColor.color} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {Header()}
            {num === 1 && profileSetView()}
            {num === 2 && paymentView()}
            {num === 3 && payoutMethod()}
            {num === 4 && payoutHistory()}
            {num === 5 && setUpPayouts()}
            {(num !== 2 && num !== 4) && < TouchableOpacity onPress={() => setNum(5)} style={styles.addButton} >
                <Text style={styles.buttonText}>Set up payouts</Text>
            </TouchableOpacity>}
        </SafeAreaView >
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
    addButton: {
        backgroundColor: Colors.dark.btn,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: gg.textColor.color
        // marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 18
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
    earningsText: {
        fontSize: 25,
        color: gg.textColor.color,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    earningsSubtext: {
        color: "#83867C",

        marginLeft: 5,
    },
    earningsLabel: {
        color: '#888',
        // marginTop: 15,
    }
})

export default ProfileSetting;