import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
import Typhography from '../../../components/Typhography';
import Button from '../../../components/Button';

const CustomerAppOnboardingStarter = () => {
    const nav = useNavigation()
    const { roleId, roleTitle } = useRoute().params || {};
    const [steps, setSteps] = useState(0)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>

            {theme === 'light' && (
                <Image
                    source={require('../../../../assets/images/onboardingswirl.png')}
                    style={{
                        position: 'absolute',
                        top: 290,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        //   height: '100%',
                        zIndex: -10,
                    }}
                    resizeMode="stretch" // or "contain" depending on the desired effect
                />
            )}

            <TouchableOpacity style={styles.backButtonContainer} onPress={() => nav.goBack()}>
                <View style={{ alignItems: 'center', backgroundColor: theme == 'light' ? '#E6F4D3' : ggStyles.greenBg.backgroundColor, borderRadius: 30 }}>
                    <MaterialIcons name="chevron-left" size={30} color={Colors.dark.btn} />
                </View>
            </TouchableOpacity>
                <Typhography size={24} style={styles.heading}>No worries, you can change it at any time</Typhography>
                {/* <Text style={styles.heading}>Now you are ready to get to know the app better</Text> */}
                <Typhography size={16} style={styles.text}>Discover the basic functionality of the app </Typhography>

            <View style={styles.imageContainer}>
                <Image source={require('../../../../assets/images/OwOLLogo.png')} style={styles.image} />
            </View>
            <View style={{ width: width / 1.1, marginBottom: 20 }}>
                <Button title="Let's go" onPress={() => nav.navigate('customerapponboarding', { 
                    roleId: roleId, 
                    roleTitle: roleTitle 
                })} />
            </View>
            {/* <TouchableOpacity onPress={() => nav.navigate('customerapponboarding')} activeOpacity={0.9} style={[styles.button, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}>
                <Text style={styles.buttonText}>Let's go</Text>
            </TouchableOpacity> */}
        </SafeAreaView>

    )


}

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
        color: gg.textColor.color,
        width: width / 1.1
    },
    text: {
        // fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
        // color: "#83867C",
        width: width / 1.2
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    image: {
        width: 150,
        height: 150,
    },
    button: {
        backgroundColor: '#13100D',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 5
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CustomerAppOnboardingStarter;