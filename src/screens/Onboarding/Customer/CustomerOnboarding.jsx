import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
import Button from '../../../components/Button';
import Typhography from '../../../components/Typhography';

const { width, height } = Dimensions.get('window');

const CustomerOnboarding = () => {
    const nav = useNavigation()
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onboardingSteps, setOnboardingSteps] = useState(1);
    const [appSteps, setAppSteps] = useState(0);
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([]);
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [selectedCulinarySkills, setSelectedCulinarySkills] = useState([]);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const [selectProd, setSelectProd] = useState([])

    useEffect(() => {
        if (onboardingSteps > 5) {
            nav.navigate('premiumbilling', { screen: 'customer' })
            setOnboardingSteps(5)
        }
    }, [onboardingSteps])


    const favCousines = [
        { name: 'American', image: require('../../../../assets/images/burger.png') },
        { name: 'Asian', image: require('../../../../assets/images/soup.png') },
        { name: 'Brazilian', image: require('../../../../assets/images/french.png') },
        { name: 'Indian', image: require('../../../../assets/images/burger.png') },
        { name: 'Mexican', image: require('../../../../assets/images/soup.png') },
        { name: 'Italian', image: require('../../../../assets/images/french.png') },
    ]

    const dietaryRestrictions = [
        { name: 'Ketogenic', image: require('../../../../assets/images/vegan.png') },
        { name: 'Vegetarian', image: require('../../../../assets/images/ketogenic.png') },
        { name: 'Vegan', image: require('../../../../assets/images/paleo.png') },
        { name: 'Mediterranean', image: require('../../../../assets/images/vegan.png') },
        { name: 'Paleo', image: require('../../../../assets/images/ketogenic.png') },
        { name: 'Pescatarian', image: require('../../../../assets/images/paleo.png') },
    ]; 

    const allergies = [
        { name: 'Dairy-free', image: require('../../../../assets/images/gluten.png') },
        { name: 'Gluten-free', image: require('../../../../assets/images/peanut.png') },
        { name: 'Peanut-free', image: require('../../../../assets/images/soy.png') },
        { name: 'Seafood-free', image: require('../../../../assets/images/gluten.png') },
        { name: 'Soy-free', image: require('../../../../assets/images/peanut.png') },
        { name: 'Egg-free', image: require('../../../../assets/images/soy.png') },
    ];

    const culinarySkills = [
        { name: 'Beginner', img: 'beginnercustomer', image: require('../../../../assets/images/beginner.png') },
        { name: 'Intermediate', img: 'intermediatecustomer', image: require('../../../../assets/images/intermidiate.png') },
        { name: 'Advanced', img: 'advancedcustomer', image: require('../../../../assets/images/advancedcustomer.png') },
    ];

    const handleNext = () => {
        console.log('Signup with:', userName, email, password);
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
        // const indicators = [];
        // for (let i = 1; i <= 5; i++) {
        //     indicators.push(
        //         <View
        //             key={i}
        //             style={[i <= onboardingSteps ? [styles.activeIndicator, onboardingSteps === i && styles.currentIndicator,
        //                 { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }] : styles.inactiveIndicator]}
        //         />
        //     );
        // }
        // return indicators;
        const progressPercentage = (onboardingSteps / 5) * 100;
        return (
            <View style={styles.progressContainer}>
                <View style={styles.progressBackground}>
                    <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
                </View>
            </View>
        )
    };

    const header = () => {
    return (
        <View style={styles.header}>
            {/* Back Button */}
            <TouchableOpacity onPress={handleBack}>
                <View style={{
                    alignItems: 'center',
                    backgroundColor: theme === 'light' ? '#E6F4D3' : ggStyles.greenBg.backgroundColor,
                    borderRadius: 30,
                    padding: 5,
                }}>
                    <MaterialIcons name="chevron-left" size={30} color={Colors.dark.btn} />
                </View>
            </TouchableOpacity>

            {/* Progress Bar - expand to fill center */}
            <View style={{ flex: 1, marginHorizontal: 10 }}>
                {renderProgressIndicators()}
            </View>

            {/* Skip Button */}
            {/* onPress={handleSkip} */}
            <TouchableOpacity >
                <Text style={{ color: ggStyles.textColor.color }}>Skip</Text>
            </TouchableOpacity>
        </View>
    );
};

    const step1 = () => {
        const handleCuisineSelection = (cuisine) => {
            if (selectedCuisines.includes(cuisine)) {
                setSelectedCuisines(selectedCuisines.filter((item) => item !== cuisine));
            } else {
                setSelectedCuisines([...selectedCuisines, cuisine]);
            }
        }
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={22} style={styles.heading}>What are your favorite cuisines?</Typhography>
                    <Typhography size={14} style={styles.subText}>This will help us suggest the most appropriate recipes for you</Typhography>
                </View>
                <ScrollView>
                    {
                        favCousines.map((cuisine) => (
                            <TouchableOpacity
                                key={cuisine.name}
                                style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? 'white' : 'black' }], selectedCuisines.includes(cuisine.name) && styles.selectedCuisine ]}
                                onPress={() => handleCuisineSelection(cuisine.name)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 10, borderRadius: 100, backgroundColor: theme == 'light' ? '#EFF0ED' : 'black' }}>
                                            <Image source={cuisine.image} style={{}} />
                                        </View>
                                        <Typhography size={16} style={[styles.cuisineText, { marginLeft: 10 }]}>{cuisine.name}</Typhography>
                                    </View>
                                    {selectedCuisines.includes(cuisine.name) &&
                                        <MaterialIcons name="check-circle" size={20} color={theme == 'light' ? Colors.light.btn : Colors.dark.btn} />
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }

    const step2 = () => {
        const handleDiet = (diet) => {
            if (selectedDietaryRestrictions.includes(diet)) {
                setSelectedDietaryRestrictions(selectedDietaryRestrictions.filter((item) => item !== diet));
            } else {
                setSelectedDietaryRestrictions([...selectedDietaryRestrictions, diet]);
            }
        }
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={22} style={styles.heading}>Any dietary restrictions?</Typhography>
                    <Typhography size={14} style={styles.subText}>It'll help us eliminate recipes that don't fit your preferences</Typhography>
                </View>
                <ScrollView>
                    {
                        dietaryRestrictions.map((diet) => (
                            <TouchableOpacity
                                key={diet.name}
                                style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? 'white' : 'black' }], selectedDietaryRestrictions.includes(diet.name) && [styles.selectedCuisine, { borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]]}
                                onPress={() => handleDiet(diet.name)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 10, borderRadius: 100, backgroundColor: theme == 'light' ? '#EFF0ED' : 'black' }}>
                                            <Image source={diet.image} style={{}} />
                                        </View>
                                        <Typhography size={16} style={[styles.cuisineText, { marginLeft: 10 }]}>{diet.name}</Typhography>
                                    </View>
                                    {selectedDietaryRestrictions.includes(diet.name) &&
                                        <MaterialIcons name="check-circle" size={20} color={Colors.dark.btn} />
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }

    const step3 = () => {
        const handleAllergies = (allergy) => {
            if (selectedAllergies.includes(allergy)) {
                setSelectedAllergies(selectedAllergies.filter((item) => item !== allergy));
            } else {
                setSelectedAllergies([...selectedAllergies, allergy]);
            }
        }
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={22} style={styles.heading}>Any allergies?</Typhography>
                    <Typhography size={14} style={styles.subText}>It'll help us eliminate recipes that don't fit your preferences</Typhography>
                </View>
                <ScrollView>
                    {
                        allergies.map((allergy) => (
                            <TouchableOpacity
                                key={allergy.name}
                                style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? 'white' : 'black' }], selectedAllergies.includes(allergy.name) && [styles.selectedCuisine, { borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]]}
                                onPress={() => handleAllergies(allergy.name)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 10, borderRadius: 100, backgroundColor: theme == 'light' ? '#EFF0ED' : 'black' }}>
                                            <Image source={allergy.image} style={{}} />
                                        </View>
                                        <Typhography size={16} style={[styles.cuisineText, { marginLeft: 10 }]}>{allergy.name}</Typhography>
                                    </View>
                                    {selectedAllergies.includes(allergy.name) &&
                                        <MaterialIcons name="check-circle" size={20} color={Colors.dark.btn} />
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }

    const step4 = () => {
        const prodList = [
            {
                id: 1,
                name: 'Avacado',
                img: require('../../../../assets/images/avacado.png')
            },
            {
                id: 2,
                name: 'Alcohol',
                img: require('../../../../assets/images/alcohol.png')
            },
            {
                id: 3,
                name: 'Beef',
                img: require('../../../../assets/images/beef.png')
            },
            {
                id: 4,
                name: 'Mushroom',
                img: require('../../../../assets/images/mushroom.png')
            },
            {
                id: 5,
                name: 'Avacado',
                img: require('../../../../assets/images/avacado.png')
            },
            {
                id: 6,
                name: 'Alcohol',
                img: require('../../../../assets/images/alcohol.png')
            },
            {
                id: 7,
                name: 'Beef',
                img: require('../../../../assets/images/beef.png')
            },
            {
                id: 8,
                name: 'Mushroom',
                img: require('../../../../assets/images/mushroom.png')
            },
            {
                id: 9,
                name: 'Avacado',
                img: require('../../../../assets/images/avacado.png')
            },
            {
                id: 10,
                name: 'Alcohol',
                img: require('../../../../assets/images/alcohol.png')
            },
            {
                id: 11,
                name: 'Beef',
                img: require('../../../../assets/images/beef.png')
            },
            {
                id: 12,
                name: 'Mushroom',
                img: require('../../../../assets/images/mushroom.png')
            },
            {
                id: 13,
                name: 'Avacado',
                img: require('../../../../assets/images/avacado.png')
            },
            {
                id: 14,
                name: 'Alcohol',
                img: require('../../../../assets/images/alcohol.png')
            },
            {
                id: 15,
                name: 'Beef',
                img: require('../../../../assets/images/beef.png')
            },
            {
                id: 16,
                name: 'Mushroom',
                img: require('../../../../assets/images/mushroom.png')
            },
        ]
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={22} style={styles.heading}>Any products to avoid?</Typhography>
                    <Typhography size={14} style={styles.subText}>It'll help us eliminate recipes that don't fit your preferences</Typhography>
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', backgroundColor: theme === 'light' ? 'white' : '#141514',
                    // borderColor: '#ccc',
                    borderRadius: 12,
                    padding: 5,
                    marginBottom: 20,
                    justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                        <MaterialIcons name="search" size={24} color={'#9B9C96'} />
                        <TextInput
                            style={[styles.searchBar]}
                            placeholderTextColor={ggStyles.borderColor.borderColor}
                            placeholder="Search products"
                        />
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name="mic-none" size={24} color={'#9B9C96'} />
                    </TouchableOpacity>
                </View>

                <View style={styles.gridContainer}>
                    {prodList.map((item, index) => (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() =>
                                setSelectProd((prev) => {
                                    if (prev.includes(item.id)) {
                                        return prev.filter((id) => id !== item.id);
                                    }
                                    return [...prev, item.id];
                                })
                            } key={index} style={[styles.gridItem, { borderWidth: selectProd.includes(item.id) ? 1 : 0, borderColor: selectProd.includes(item.id) ? Colors.dark.btn : ggStyles.borderColor.borderColor }]}>
                            <View style={{ padding: 10, borderRadius: 30, backgroundColor: theme == 'light' ? "#E8EAE3" : ggStyles.borderColor.borderColor, }}>
                                <Image source={item.img} style={{}} />
                            </View>
                            <Typhography size={10} style={styles.ingredientText}>{item.name}</Typhography>
                            {selectProd.includes(item.id) ?
                                < MaterialIcons name={'check-circle'} color={Colors.dark.btn} size={11} style={{ position: 'absolute', top: 3, right: 5 }} />
                                : <MaterialIcons name={'check-circle'} color={theme == 'light' ? 'white' : Colors.dark.background} size={11} style={{ position: 'absolute', top: 3, right: 5 }} />
                            }
                        </TouchableOpacity>
                    ))}
                </View>
            </View >
        );
    }

    const step5 = () => {
        const handleCulinary = (culinary) => {
            if (selectedCulinarySkills.includes(culinary)) {
                setSelectedCulinarySkills(selectedCulinarySkills.filter((item) => item !== culinary));
            } else {
                setSelectedCulinarySkills([...selectedCulinarySkills, culinary]);
            }
        }

        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={22} style={styles.heading}>How would you describe your culinary skills?</Typhography>
                    <Typhography size={14} style={styles.subText}>This will help us to offer you relevant recipes and tutorial content</Typhography>
                </View>
                <ScrollView>
                    {
                        culinarySkills.map((culinary) => (
                            <TouchableOpacity
                                key={culinary.name}
                                style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? 'white' : 'black' }], selectedCulinarySkills.includes(culinary.name) && [styles.selectedCuisine, { borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]]}
                                onPress={() => handleCulinary(culinary.name)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 10, borderRadius: 100, backgroundColor: theme == 'light' ? '#EFF0ED' : 'black' }}>
                                            <Image source={culinary.image} style={{}} />
                                        </View>
                                        <Typhography size={16} style={[styles.cuisineText, { marginLeft: 10 }]}>{culinary.name}</Typhography>
                                    </View>
                                    {selectedCulinarySkills.includes(culinary.name) &&
                                        <MaterialIcons name="check-circle" size={20} color={Colors.dark.btn} />
                                    }
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
            <View>
                {header()}
                {onboardingSteps === 1 && step1()}
                {onboardingSteps === 2 && step2()}
                {onboardingSteps === 3 && step3()}
                {onboardingSteps === 4 && step4()}
                {onboardingSteps === 5 && step5()}
                {/* {onboardingSteps === 6 && step6()} */}
            </View>
            <View>
                {
                onboardingSteps !== 0 && <View style={{ justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <Button title="Continue" style={{width: width / 1.1}} onPress={handleNext} />
                </View>
            }
            </View>

        </SafeAreaView >
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
        // backgroundColor: 'white',
    },
    heading: {
        // fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        // color: gg.textColor.color
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 20
    },
    progressIndicators: {
        flexDirection: 'row',
        // marginLeft: 20,
    },
    activeIndicator: {
        width: 40,
        height: 10,
        backgroundColor: 'black',
        // marginRight: 5,
    },
    currentIndicator: {
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5,
        // marginRight: 5,
    },
    inactiveIndicator: {
        width: 40,
        height: 10,
        // borderRadius: 5,
        backgroundColor: gg.borderColor.borderColor,
        // marginRight: 5,
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
        color: '#79B939'
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
        color: gg.textColor.color,
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
        color: gg.textColor.color
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
        backgroundColor: '#79B939',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#79B939',
        borderRadius: 8,
        padding: 5,
        color: 'black',
        width: width / 1.1,
    },
    label: {
        fontSize: 13,
        marginBottom: 5,
        fontWeight: '600',
        color: gg.textColor.color,
    },
    cuisineItem: {
        justifyContent: 'space-between',
        padding: 10,
        // borderWidth: 1,
        // borderColor: gg.borderColor.borderColor,
        borderRadius: 12,
        marginBottom: 10,
    },
    selectedCuisine: {
        borderWidth: 1,
        borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn
    },
    cuisineText: {
        color: gg.textColor.color,
        // fontSize: 19,
    },
    subText: {
        // fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        // color: "#83867C",
        width: width / 1.3
    },
    searchBar: {
        color: gg.textColor.color,
        // borderWidth: 1,
        // backgroundColor: '#EFF0ED',
        // // borderColor: '#ccc',
        // borderRadius: 12,
        // padding: 10,
        // marginBottom: 20,
        marginLeft: 5
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '22%', // Adjust width for desired grid layout
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: theme == 'light' ? 'white' : Colors.dark.background,
        borderRadius: 12,
        marginHorizontal: 5,
        padding: 15,
        alignSelf: 'center',
        borderWidth: theme === 'light' ? 0 : 1,
        // borderColor: gg.borderColor.borderColor
    },
    imagePlaceholder: {
        width: 50,
        height: 50,
        tintColor: 'gray', // Optional: tint the image icon
    },
    ingredientText: {
        marginTop: 2,
        // fontSize: 10,
        // color: gg.textColor.color,
        // color: theme == 'light' ? Colors.light.text : Colors.dark.text,
        fontWeight: '600',
        width: '100%',
        textAlign: 'center',
    },
    input: {
        color: gg.textColor.color
    },
    progressContainer: {
        padding: 20,
        width: '100%',
        backgroundColor: '#f4faef', // Matches light background in your image
        flex: 1,
        justifyContent: 'center', // Center vertically
    },
    progressBackground: {
        height: 10,
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#7bbd42', // Green fill color
        borderRadius: 5,
    },
});

export default CustomerOnboarding;