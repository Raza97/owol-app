import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, ScrollView } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToastMessage from '../../../utlis/ToastMessage';
// import { useTheme } from "../../../utlis/hooks/useTheme";
// import { lightTheme, darkTheme } from "../theme";
// import ImagePlaceholder from '../../../assets/placeholders/imgPlaceholder.png';
import { useTheme } from '../../routes/ThemeContext';
import { Colors } from '../../../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import Typhography from '../../components/Typhography';


const { width, height } = Dimensions.get('window');

const OnboardingMenu = () => {
    // const {isDark, toggleTheme } = useTheme();
    const nav = useNavigation()
    const [onboardSelect, setOnboardSelect] = useState(null)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    // const stylesTheme = theme === 'light' ? lightStyles : darkStyles;
    const Styles = getStyles(theme);

    const handleClick = () => {
        if (onboardSelect === 'customer') {
            nav.navigate('customerapponboardstarter', {
                selection: 'customer',
            });
        } else if (onboardSelect === 'earner') {
            nav.navigate('earnerapponboardstarter', {
                selection: 'earner',
            });
        } else {
            ToastMessage('error', 'top', 'Please select a role to continue onboarding');
        }
    };

    const handleLoginClick = () => {
        if (onboardSelect === 'customer') {
            nav.navigate('login', {
                screen: 'customer',
            });
        } else if (onboardSelect === 'earner') {
            nav.navigate('login', {
                screen: 'earner',
            });
        } else {
            ToastMessage('error', 'top', 'Please select a role to login');
        }
    };

    const headingSection = () => {
        return (
            <View style={Styles.headingSection}>
                <Image source={require('../../../assets/images/OwOLLogo.png')} style={{ width: 70, height: 70 }} resizeMode='contain' />
                <Text style={[Styles.heading, { fontSize: 25 }]}>Welcome to OWoL</Text>
            </View>
        )
    }

    const roleSelection = () => {
        return (
            <View style={Styles.roleSelection}>
                <Typhography size={20} style={Styles.heading}>Choose your role to get started</Typhography>
                <Typhography size={14} style={{marginTop: 5}}>No worries, you can change it at any time</Typhography>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity activeOpacity={0.9} style={[[Styles.selectionBtns, { backgroundColor: theme === 'light' ? 'white' : '#131B0E' }], { borderWidth: onboardSelect === 'customer' ? 1 : 1, borderColor: onboardSelect === 'customer' ? theme == 'light' ? Colors.light.btn : Colors.dark.btn : theme === 'light' ? 'white' : '#131B0E' }]} onPress={() => setOnboardSelect('customer')}>
                        <View style={{ padding: 8, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Typhography size={18} style={Styles.heading}>Personal</Typhography>
                                {/* <Text style={[Styles.subText, { color: theme == 'light' ? '#13100D' : 'white', fontWeight: 'bold', marginBottom: 10 }]}>I want to</Text> */}
                                <View style={{ marginTop: 10 }}>
                                    {
                                        [
                                            { id: 1, text: 'Track my nutritions', icon: 'check', color: '#83867C' },
                                            { id: 2, text: 'Plan meals', icon: 'check', color: '#83867C' },
                                            { id: 3, text: 'Organise parties', icon: 'check', color: '#83867C' },
                                            { id: 4, text: 'Find and share recipes', icon: 'check', color: '#83867C' },
                                        ].map((item) => (
                                            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                                <MaterialIcons name={item.icon} color={item.color} size={15} />
                                                <Typhography size={14} style={{marginBottom: 5, fontWeight: '600', marginLeft: 5}}>{item.text}</Typhography>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                            <View>
                                {onboardSelect === 'customer' ?
                                    <MaterialIcons name={'check-circle'} color={Colors.dark.btn} size={30} />
                                    : <MaterialIcons name={'radio-button-unchecked'} color={theme === 'light' ? 'lightgray' : '#131B0E'} size={30} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={[[Styles.selectionBtns, { backgroundColor: theme === 'light' ? 'white' : '#131B0E' }], { borderWidth: onboardSelect === 'earner' ? 1 : 1, borderColor: onboardSelect === 'earner' ? theme == 'light' ? Colors.light.btn : Colors.dark.btn : theme === 'light' ? 'white' : '#131B0E' }]} onPress={() => setOnboardSelect('earner')}>
                        <View style={{ padding: 8, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <View>
                                <Typhography size={18} style={Styles.heading}>Earner</Typhography>
                                <View style={{ marginTop: 10 }}>    
                                    {
                                        [
                                        { id: 1, text: 'Manage bookings', icon: 'check', color: '#83867C' },
                                        { id: 2, text: 'Create content', icon: 'check', color: '#83867C' },
                                        { id: 3, text: 'Hold events', icon: 'check', color: '#83867C' },
                                        { id: 4, text: 'Promote your businees', icon: 'check', color: '#83867C' },
                                        ].map((item) => (
                                            <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                                                <MaterialIcons name={item.icon} color={item.color} size={15} />
                                                <Typhography size={14} style={{marginBottom: 5, fontWeight: '600', marginLeft: 5}}>{item.text}</Typhography>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                            <View>
                                {onboardSelect === 'earner' ?
                                    <MaterialIcons name={'check-circle'} color={Colors.dark.btn} size={30} />
                                    : <MaterialIcons name={'radio-button-unchecked'} color={theme === 'light' ? 'lightgray' : '#131B0E'} size={30} />
                                }
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, width: '100%', paddingHorizontal: 20 }}>
                    <Button title="Get Started" variant="primary" onPress={handleClick} />
                    <Button title="Log in" variant="secondary" onPress={handleLoginClick} />
                </View>
            </View >
        )
    }

    return (
        <SafeAreaView style={[Styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {headingSection()}
                {roleSelection()}
            </ScrollView>
        </SafeAreaView>
    );
}


const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
    },
    headingSection: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 
    },
    logo: {
        marginTop: 50,
        fontSize: 30,
        // fontWeight: 'bold',
        marginBottom: 10,
        color: "#A6A8A0"
    },
    heading: {
        // fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        // color: theme == 'light' ? "#13100D" : Colors.dark.text,
        // fontFamily: 'NunitoSans-Variable',
    },
    roleSelection: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subText: {
        marginTop: 10,
        color: theme == 'light' ? "#83867C" : Colors.dark.text,
        fontFamily: 'NunitoSans-Variable',
        fontWeight: '500',
    },
    selectionBtns: {
        // alignSelf: 'center',
        // borderColor: '#79B939',
        // borderWidth: 1,
        // backgroundColor: "white",
        padding: 10,
        margin: 10,
        width: width / 1.1,
        borderRadius: 30,
    },
    listItem: {
        color: "#363636",
        marginBottom: 5,
        fontFamily: 'NunitoSans-Variable',
    },
    image: {
        width: 100,
        height: 100,
    },
    btn: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 5
    },
    btnLogin: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 5,
        borderWidth: 1,
        marginTop: 10,
        borderColor: Colors.light.btn
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    btnLoginText: {
        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
        fontSize: 18,
        fontWeight: '500'
    }
})


export default OnboardingMenu;