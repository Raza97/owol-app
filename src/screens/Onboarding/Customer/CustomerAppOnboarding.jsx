import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
import Button from '../../../components/Button';
import Typhography from '../../../components/Typhography';

const tabs = [
    { id: 1, heading: 'Manage your Pantry', image: require('../../../../assets/images/apponboard2.png'), story: 'Create grocery lists on the app and it keeps track of what you already have and what you need to replenish. If you have things about to expire, it alerts you to the need to purchase more' },
    { id: 2, heading: 'Manage your nutritions', image: require('../../../../assets/images/customeronboard2.png'), story: 'Take pictures of the food you’re consuming or allow the app manage your meal plan and stay on top of your calorie consumption, nutritional intake, and allow it make suggestions to you' },
    { id: 3, heading: 'Learn new things about foods', image: require('../../../../assets/images/customeronboard3.png'), story: 'Take non-boring classes and quizzes on various food topics, read fun facts, and follow what other people write about food' },
    { id: 4, heading: 'Host parties', image: require('../../../../assets/images/customeronboard4.png'), story: 'Describe some key meals or themes you want to achieve and get recommendations for a menu to compile including wine pairings, dessert pairings, etc' }
];
const CustomerAppOnboarding = () => {
    const nav = useNavigation()
    const { roleId, roleTitle } = useRoute().params || {};
    const [onboardingSteps, setOnboardingSteps] = useState(1);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)


    useEffect(() => {
        if (onboardingSteps > 4) {
            nav.navigate('signup', { 
                screen: 'customer',
                roleId: roleId,
                roleTitle: roleTitle
            })
            setOnboardingSteps(4)
        }
    }, [onboardingSteps, roleId, roleTitle])

    const handleNext = () => {
        setOnboardingSteps((prev) => {
            return prev + 1
        });
    };

    const handleBack = () => {
        if (onboardingSteps === 1) {
            nav.goBack()
        }
        else {
            setOnboardingSteps((prev) => {
                if (prev > 1) {
                    return prev - 1
                }
                return prev
            });
        }
    }

    const renderProgressIndicators = () => {
        const indicators = [];
        for (let i = 1; i <= 4; i++) {
            indicators.push(
                <View
                    key={i}
                    style={i === onboardingSteps ? [styles.activeIndicator, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }] : styles.inactiveIndicator}
                />
            );
        }
        return indicators;
    };

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBack}>
                    <View style={{ alignItems: 'center', backgroundColor: theme == 'light' ? '#E6F4D3' : ggStyles.greenBg.backgroundColor, borderRadius: 30 }}>
                        <MaterialIcons name="chevron-left" size={30} color={Colors.dark.btn} />
                    </View>
                </TouchableOpacity >
                <Image source={require('../../../../assets/images/OwOLLogo.png')} style={{ width: 70, height: 70 }} resizeMode='contain' />
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    const Steps = () => {
        if (onboardingSteps > 4) {
            return null; // or navigate to the next screen
        }
        return (
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <View style={{ padding: 20, borderRadius: 16 }}>
                    <View style={styles.imageContainer}>
                        <Image source={tabs[onboardingSteps - 1].image} style={styles.image} />
                    </View>
                    <View style={{ alignContent: 'center', alignItems: 'center' }}>
                        <Typhography size={22} style={styles.heading}>{tabs[onboardingSteps - 1].heading}</Typhography>
                        <Typhography size={14} style={styles.text}>{tabs[onboardingSteps - 1].story}</Typhography>
                        <View style={styles.progressIndicators}>
                            {renderProgressIndicators()}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
            {header()}
            <View style={{ flex: 1, justifyContent: 'center', marginBottom: 5 }}>
                <Steps />
            </View>
            <View style={{ justifyContent: 'flex-end', width: '100%', marginBottom: 20, alignItems: 'center' }}>
                <Button title="Next" style={{width: width / 1.1}} onPress={handleNext} />
            </View>
        </SafeAreaView>
    )
}

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    backButtonContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    heading: {
        // fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        // color: gg.textColor.color
    },
    text: {
        // fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        alignContent: 'center',
        // color: "#83867C",
        width: width / 1.2,
        height: height / 11
    },
    imageContainer: {
        width: width, // or '100%'
        height: height * 0.48,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 25,
        padding: 0, // remove padding to avoid unexpected shrinkage
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // or 'cover' or 'contain'
    },
    button: {
        backgroundColor: '#13100D',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 5,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
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
        alignSelf: 'center'
        // marginLeft: 20,
    },
    activeIndicator: {
        width: 20,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        marginRight: 5,
    },
    inactiveIndicator: {
        width: 6,
        height: 5,
        borderRadius: 30,
        backgroundColor: gg.borderColor.borderColor,
        marginRight: 5,
    },
});

export default CustomerAppOnboarding;