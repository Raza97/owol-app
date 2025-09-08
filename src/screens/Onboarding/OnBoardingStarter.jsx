import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';
import useCustomerStyles from '../../../constants/GlobalCustomerStyles';
import Typhography from '../../components/Typhography';
import Button from '../../components/Button';

const OnboardingStarter = () => {
    const nav = useNavigation()
    const { selection } = useRoute()?.params
    console.log(selection)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()


    const handleClick = () => {
        if (selection == 'customer') {
            nav.navigate('customerOnboarding', {
                selection: 'customer',
            })
        }
        else {
            nav.navigate('earnerOnboarding', {
                selection: 'earner',
            })
        }
    }

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor:
                        theme === 'light' ? Colors.light.background : Colors.dark.background,
                },
            ]}
        >
            {/* Top Section */}
            <View style={styles.topSection}>
                {theme === 'light' && (
                    <Image
                        source={require('../../../assets/images/onboardingswirl.png')}
                        style={{
                            position: 'absolute',
                            top: 290,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            zIndex: -10,
                        }}
                        resizeMode="stretch"
                    />
                )}

                <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
                    <View
                        style={{
                            alignItems: 'center',
                            backgroundColor:
                                theme === 'light' ? '#E6F4D3' : ggStyles.greenBg.backgroundColor,
                            borderRadius: 30,
                        }}
                    >
                        <MaterialIcons name="chevron-left" size={30} color={Colors.dark.btn} />
                    </View>
                </TouchableOpacity>

                <Typhography size={22} style={styles.heading}>
                    Let's personalize OwOL for you!
                </Typhography>

                <Typhography size={16} style={styles.text}>
                    {selection === 'customer'
                        ? 'It will help me offer you nutritional advice, recipes that are perfect for you, and much more'
                        : 'It will help to offer the most appropriate content for your goals'}
                </Typhography>

                <View style={styles.imageWrapper}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../../assets/images/OwOLLogo.png')}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                <Button title="Let's do this" style={{ width: width / 1.1 }} onPress={handleClick} />
                <TouchableOpacity onPress={handleClick}>
                    <Typhography size={18} style={[styles.text, { marginTop: 10 }]}>
                        I'll do it later
                    </Typhography>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        justifyContent: 'space-between',
    },
    topSection: {
        flex: 1,
        alignItems: 'center',
    },
    bottomSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    backButtonContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    heading: {
        fontWeight: 'bold',
        marginTop: '30%',
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    imageWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
});

export default OnboardingStarter;