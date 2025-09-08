import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
import Typhography from '../../../components/Typhography';
import Button from '../../../components/Button';

const tabs = [
    { id: 1, heading: 'Keep your own Сookbook', image: require('../../../../assets/images/apponboard.png'), story: 'Add recipes and instructional videos, discuss with people' },
    { id: 2, heading: 'Manage bookings', image: require('../../../../assets/images/earneronboard2.png'), story: 'Schedule events, lessons and private dinners in one place' },
    { id: 3, heading: 'Promote your businees', image: require('../../../../assets/images/earneronboard3.png'), story: 'Create posts and videos or host virtual classes to promote your services' },
];

const EarnerAppOnboarding = () => {
    const nav = useNavigation()
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    useEffect(() => {
        if (onboardingSteps > 3) {
            nav.navigate('signup', { screen: 'earner' })
            setOnboardingSteps(3)
        }
    }, [onboardingSteps])



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
        for (let i = 1; i <= 3; i++) {
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
                </TouchableOpacity>
                <Image source={require('../../../../assets/images/OwOLLogo.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    const Steps = () => {
        if (onboardingSteps > 3) {
            return null; // or navigate to the next screen
        }
        return (
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
                <View style={{ padding: 20, borderRadius: 16 }}>
                    <View style={styles.imageContainer}>
                        <Image source={tabs[onboardingSteps - 1].image} style={styles.image} />
                    </View>
                    <View style={{ alignContent: 'center', alignItems: 'center' }}>
                        <Typhography size={24} style={styles.heading}>{tabs[onboardingSteps - 1].heading}</Typhography>
                        <Typhography size={12} style={styles.text}>{tabs[onboardingSteps - 1].story}</Typhography>
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
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Steps />
                    </View>
                    <View style={{ justifyContent: 'flex-end', marginBottom: 20, alignItems: 'center' }}>
                        <Button title={'Next'} style={{width: width / 1.1}} onPress={handleNext} />
                        {/* <TouchableOpacity onPress={handleNext} style={[styles.button, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity> */}
                    </View>
                </SafeAreaView>
        // <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
        //     {header()}
        //     {/* {onboardingSteps == 1 && step1()}
        //     {onboardingSteps === 2 && step2()}
        //     {onboardingSteps === 3 && step3()} */}
        //     <Steps />
        //     <View style={{ justifyContent: 'flex-end', flex: 0.7 }}>
        //         <TouchableOpacity onPress={() => handleNext()} style={[styles.button, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}>
        //             <Text style={styles.buttonText}>Next</Text>
        //         </TouchableOpacity>
        //     </View>
        // </SafeAreaView>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: gg.textColor.color
    },
    text: {
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
        color: "#83867C",
        width: width / 1.2,
        height: height / 12
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
        height: 10,
        borderRadius: 5,
        backgroundColor: 'black',
        marginRight: 5,
    },
    inactiveIndicator: {
        width: 6,
        height: 10,
        borderRadius: 5,
        backgroundColor: gg.borderColor.borderColor,
        marginRight: 5,
    },
});

export default EarnerAppOnboarding;