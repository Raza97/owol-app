import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';
import { useTheme } from '../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../constants/GlobalCustomerStyles';
import Button from '../components/Button';
import Typhography from '../components/Typhography';

const PremiumBilling = () => {
    const nav = useNavigation()
    const { screen } = useRoute().params
    const [selectedFeature, setSelectedFeature] = useState([])
    const [selectedPlan, setSelectedPlan] = useState('yearly');
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    const premiumFeature = [
        { name: 'Premium Feature 1 Premium Feature 1' },
        { name: 'Premium Feature 2 Premium Feature 2' },
        { name: 'Premium Feature 3 Premium Feature 3' },
        { name: 'Premium Feature 4 Premium Feature 4' },
    ];

    const handleFeature = (feature) => {
        if (selectedFeature.includes(feature)) {
            setSelectedFeature(selectedFeature.filter((item) => item !== feature));
        } else {
            setSelectedFeature([...selectedFeature, feature]);
        }
    }

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity>
                    <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => nav.navigate('login', { screen: screen })} style={{ opacity: 0.7 }} >
                    <View style={{ alignItems: 'center', borderRadius: 30, backgroundColor: Colors.dark.btn, padding: 2 }}>
                        <MaterialIcons name="close" size={15} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const pricingCard = () => {
        return (
            <View style={styles.priceView}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[[styles.planCard, { backgroundColor: theme == 'light' ? '#FEFCE8' : 'black' }], selectedPlan === 'yearly' && [styles.selectedPlan, { borderColor: theme == 'light' ? "#FFD003" : Colors.dark.btn }]]}
                    onPress={() => handlePlanSelection('yearly')}
                >
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>Save 50%</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        // marginTop: 10,
                        color: ggStyles.textColor.color
                    }}>Yearly</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.planTitle}>$99.00</Text>
                        <Text style={styles.planPrice}>/annually・14-Day Free Trial</Text>
                        {
                            selectedPlan === 'yearly' &&
                            < MaterialIcons name="check-circle" size={24} color={"#FEFCE8"} style={{ marginLeft: 'auto' }} />
                        }
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}
                    style={[[styles.planCard, { backgroundColor: theme == 'light' ? 'white' : 'black', marginTop: 10 }], selectedPlan === 'monthly' && [styles.selectedPlan, { borderColor: theme == 'light' ? Colors.dark.btn : Colors.dark.btn }]]}
                    onPress={() => handlePlanSelection('monthly')}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '500',
                        // marginTop: 10,
                        color: ggStyles.textColor.color
                    }}>Monthly</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.planTitle}>$19.00</Text>
                        <Text style={styles.planPrice}>/monthly・14-Day Free Trial</Text>
                        {
                            selectedPlan === 'monthly' &&
                            < MaterialIcons name="check-circle" size={24} color={Colors.dark.btn} style={{ marginLeft: 'auto' }} />
                        }
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
            <View>
                {theme == 'light' ? (
  <Image
    source={require('../../assets/images/logobgwhite.png')}
    style={{ position: 'absolute', top: -40, left: 0, width: width }}
    resizeMode="cover"
  />
) : (
  <Image
    source={require('../../assets/images/logobg.png')}
    style={{ position: 'absolute', top: -40, left: 0, width: width }}
    resizeMode="cover"
  />
)}
            {header()}
            <Image source={require(`../../assets/images/OwOLLogo.png`)} style={{ alignSelf: 'center' }} />
            <Text style={styles.heading}>OwOL Premium</Text>
            {
                premiumFeature.map((feature) => (
                    <TouchableOpacity
                        disabled={true}
                        key={feature.name}
                        style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }], selectedFeature.includes(feature.name) && [styles.selectedCuisine, { borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]]}
                    // onPress={() => handleFeature(feature.name)}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="check-circle" size={20} color={Colors.light.btn} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View>
                                    <Typhography style={styles.cuisineText}>{feature.name}</Typhography>
                                </View>
                            </View>


                        </View>
                    </TouchableOpacity>
                ))
            }
            <View style={{ marginTop: 50 }}>
                {pricingCard()}
            </View>
            </View>

            <View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 20}}>
                    <Button title={'Get Premium'} style={{ width: width / 1.1 }} onPress={() => nav.navigate('login', { screen: screen })} />
                    <Typhography size={14} style={styles.buttonText}>Change plan or cancel any time</Typhography>
                </View>
            </View>
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal: 20
    },
    backButtonContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
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
        marginTop: 5,
        alignSelf: 'center',
        marginTop: 20
    },
    buttonText: {
        // color: '#fff',
        textAlign: 'center',
        // fontSize: 18,
        // fontWeight: 'bold',
        paddingTop:5
    },
    cuisineItem: {
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 10,
        // borderWidth: 1,
        borderColor: '#E8EAE3',
        borderRadius: 12,
        marginBottom: 10,
        // marginHorizontal: 20
    },
    selectedCuisine: {
        borderColor: '#83867C',
    },
    cuisineText: {
        // color: gg.textColor.color,
        // fontSize: 15,
        marginLeft: 10
    },
    priceView: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',

    },
    planCard: {
        // width:'100%',
        // flex: 1,
        // marginHorizontal: 15,
        // backgroundColor: '#f0f0f0',
        borderWidth: 2,
        borderColor: theme == 'light' ? 'white' : 'black',
        borderRadius: 12,
        padding: 15,
        // alignItems: 'center',

    },
    selectedPlan: {
        // backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#5C5D58',
    },
    badge: {
        position: 'absolute',
        top: 15,
        left: 70,
        backgroundColor: '#FFD003',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    badgeText: {
        color: 'black',
        fontSize: 12,
    },
    planTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        color: gg.textColor.color
    },
    planPrice: {
        marginTop: 5,
        fontSize: 12,
        color: gg.subTextColor.color,
    },
});

export default PremiumBilling;