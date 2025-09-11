import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, Switch } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
import AvailabilityScreen from './AvailabilityScreen';
import Typhography from '../../../components/Typhography';
import Button from '../../../components/Button';

const EarnerOnboarding = () => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onboardingSteps, setOnboardingSteps] = useState(1);
    const [appSteps, setAppSteps] = useState(0);
    const [selectedOccupation, setSelectedOccupation] = useState([]);
    const [selectedSpecialities, setSelectedSpecialities] = useState([]);
    const [selectedDay, setSelectedDay] = useState('Tue');
    const [selectedCulinarySkills, setSelectedCulinarySkills] = useState([]);
    const [title, setTitle] = useState('');
    const [bio, setBio] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [sameTimeForAllDays, setSameTimeForAllDays] = useState(false);
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const [availableTimes, setAvailableTimes] = useState({
        Monday: '10:00 am - 18:00 pm',
        Tuesday: '14:00 am - 18:00 pm',
        Wednesday: '10:00 am - 15:00 pm',
        Saturday: '10:00 am - 18:00 pm',
    });

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const handleDayPress = (day) => {
        setSelectedDay(day);
    };

    const handleDaySelection = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const handleTimeChange = (day, newTime) => {
        setAvailableTimes({ ...availableTimes, [day]: newTime });
    };

    const handleSameTimeToggle = () => {
        setSameTimeForAllDays(!sameTimeForAllDays);

        if (sameTimeForAllDays) {
            // Clear individual times
            setAvailableTimes({});
        } else {
            // Restore default times
            setAvailableTimes({
                Monday: '10:00 am - 18:00 pm',
                Tuesday: '14:00 am - 18:00 pm',
                Wednesday: '10:00 am - 15:00 pm',
                Saturday: '10:00 am - 18:00 pm',
            });
        }
    };

    useEffect(() => {
        if (onboardingSteps > 5) {
            nav.navigate('premiumbilling', { screen: 'earner' })
            setOnboardingSteps(5)
        }
    }, [onboardingSteps])


    const occupation = [
        { name: 'Personal chef', },
        { name: 'Content provider', },
        { name: 'Example1', },
        { name: 'Example2', },
    ]

    const specialites = [
        { name: 'Pastry', },
        { name: 'Desserts', },
        { name: 'Grill', },
        { name: 'Example 4', },
        { name: 'Example 5', },
        { name: 'Any', },
    ];

    const allergies = [
        { name: 'Dairy-free' },
        { name: 'Gluten-free' },
        { name: 'Peanut-free' },
        { name: 'Seafood-free' },
        { name: 'Soy-free' },
        { name: 'Egg-free' },
    ];

    const culinarySkills = [
        { name: 'Beginner' },
        { name: 'Intermediate' },
        { name: 'Advanced' },
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
        return (
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.heading}>First, let's create an account</Text>

                <Text style={styles.label}>User name</Text>
                <View style={[styles.inputContainer]}>
                    <TextInput
                        style={styles.input}
                        placeholder="User name"
                        placeholderTextColor={'#9B9C96'}
                        value={userName}
                        onChangeText={setUserName}
                    />
                </View>

                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor={'#9B9C96'}
                        // placeholderTextColor={'#E8EAE3'}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter password"
                            placeholderTextColor={'#9B9C96'}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                        {/* <TouchableOpacity style={styles.eyeButton}>
                                {/* Add eye icon for password visibility */}
                        {/* </TouchableOpacity> */}
                    </View>
                </View>

                <Text style={styles.orText}>OR</Text>

                <TouchableOpacity style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}>
                    <Image
                        source={require('../../../../assets/images/OwOLLogo.png')} // Apple logo placeholder
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Continue with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}>
                    <Image
                        source={require('../../../../assets/images/google.png')} // Replace with your Google logo
                        style={styles.socialIcon}
                    />
                    {/* <Text style={styles.socialButtonText}>Continue with Google</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}>
                    <Image
                        source={require('../../../../assets/images/facebook.png')} // Replace with your Facebook logo
                        style={styles.socialIcon}
                    />
                    {/* <Text style={styles.socialButtonText}>Continue with Facebook</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Sign up for free</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.loginText}>I already have an account </Text>
                    <TouchableOpacity style={{ marginTop: 19 }} onPress={() => nav.navigate('login', { screen: 'earner' })}>
                        {/* <Text style={[styles.loginLink, { color: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}>Log in</Text> */}
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    const step2 = () => {
        const handleOccupation = (occupation) => {
            if (selectedOccupation.includes(occupation)) {
                setSelectedOccupation(selectedOccupation.filter((item) => item !== occupation));
            } else {
                setSelectedOccupation([...selectedOccupation, occupation]);
            }
        }
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={24} style={styles.heading}>Your professional experience</Typhography>
                    <Typhography size={12} style={styles.subText}>Multiple options can be selected</Typhography>
                </View>
                <ScrollView>
                    {
                        occupation.map((occupation) => (
                            <TouchableOpacity
                                key={occupation.name}
                                style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? 'white' : 'black' }], selectedOccupation.includes(occupation.name) && styles.selectedCuisine ]}
                                onPress={() => handleOccupation(occupation.name)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 10, borderRadius: 100, backgroundColor: theme == 'light' ? '#EFF0ED' : 'black' }}>
                                            <Image source={require('../../../../assets/images/pizza.png')} style={{}} />
                                        </View>
                                        <Typhography size={16} style={styles.cuisineText}>{occupation.name}</Typhography>
                                    </View>
                                    {selectedOccupation.includes(occupation.name) &&
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
        const handleSpecialities = (speciality) => {
            if (selectedSpecialities.includes(speciality)) {
                setSelectedSpecialities(selectedSpecialities.filter((item) => item !== speciality));
            } else {
                setSelectedSpecialities([...selectedSpecialities, speciality]);
            }
        }
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={20} style={styles.heading}>What are your specialties?</Typhography>
                    <Typhography size={12} style={styles.subText}>Multiple options can be selected</Typhography>
                </View>
                <ScrollView>
                    {
                        specialites.map((diet) => (
                            <TouchableOpacity
                                key={diet.name}
                                style={[[styles.cuisineItem, { backgroundColor: theme == 'light' ? 'white' : 'black' }], selectedSpecialities.includes(diet.name) && styles.selectedCuisine ]}
                                onPress={() => handleSpecialities(diet.name)}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ padding: 10, borderRadius: 100, backgroundColor: theme == 'light' ? '#EFF0ED' : 'black' }}>
                                            <Image source={require('../../../../assets/images/pizza.png')} style={{}} />
                                        </View>
                                        <Typhography size={16} style={styles.cuisineText}>{diet.name}</Typhography>
                                    </View>
                                    {selectedSpecialities.includes(diet.name) &&
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
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={20} style={styles.heading}>Tell more about yourself</Typhography>
                    <Typhography size={12} style={styles.subText}>This will help consumers get to know you better</Typhography>
                </View>

                <View style={{}}>
                    <View style={styles.profileImageContainer}>
                        <Image source={require('../../../../assets/placeholders/placeholdergreen.png')} style={styles.profileImage} />
                        {/* <View style={styles.editIconContainer}>
                            <Text style={{ color: Colors.dark.btn, fontSize: 18 }}>+</Text>
                        </View> */}
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your title"
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Bio</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Describe your experience"
                            multiline
                            numberOfLines={2}
                            value={bio}
                            onChangeText={setBio}
                        />
                        <Text style={styles.characterCount}>{bio.length}/200</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Instagram</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="@Username"
                            value={bio}
                            onChangeText={setBio}
                        />
                        <Text style={styles.characterCount}>{bio.length}/200</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Persnol website</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Link"
                            value={bio}
                            onChangeText={setBio}
                        />
                        <Text style={styles.characterCount}>{bio.length}/200</Text>
                    </View>
                    <TouchableOpacity style={styles.addCertificatesButton}>
                        <Image source={require('../../../../assets/placeholders/Achievement.png')} style={styles.certificateIcon} />
                        <Text style={styles.addCertificatesText}>Add certificates</Text>
                    </TouchableOpacity>
                </View>



            </View>
        )
    }

    const step5 = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Typhography size={20} style={styles.heading}>Set up your schedule</Typhography>
                    <Typhography size={14} style={styles.subText}>This will help consumers get to know you better</Typhography>
                </View>

                <View style={styles.daysView}>
                    <Typhography size={16} style={styles.title}>Available days</Typhography>
                    <View style={styles.daysContainer}>
                        {days.map((day) => (
                            <TouchableOpacity
                                key={day}
                                style={[styles.dayButton, selectedDay === day && [styles.selectedDay, { borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn, backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]]}
                                onPress={() => handleDayPress(day)}
                            >
                                <Typhography size={14} style={[styles.dayText, selectedDay === day && styles.selectedDayText]}>{day}</Typhography>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={{ height: 350,alignItems: 'center', justifyContent: 'center' , marginTop: 20 }}>
                    <Image
                        source={require('../../../../assets/images/hand-icon.png')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            </View>
        );
    }

    const step6 = () => {

        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.heading}>Set up your schedule</Text>
                    <Text style={styles.subText}>This will help users reach out to you at the perfect time</Text>
                </View>


                <Text style={styles.title}>Available days</Text>
                <View style={styles.daysContainer}>
                    {daysOfWeek.map((day) => (
                        <TouchableOpacity
                            key={day}
                            style={[styles.dayButton, selectedDays.includes(day) && [styles.selectedDay, { borderColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn, backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]]}
                            onPress={() => handleDaySelection(day)}
                        >
                            <Text style={[styles.dayText, selectedDays === day && styles.selectedDayText]}>{day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={styles.title}>Available time</Text>
                    <View style={styles.sameTimeContainer}>
                        <Text style={styles.sameTimeText}>Same time</Text>
                        <Switch value={sameTimeForAllDays} onValueChange={handleSameTimeToggle} />
                    </View>
                </View>
                {/* <View style={styles.timeContainer}>
                    {Object.entries(availableTimes).map(([day, time]) => (
                        <View key={day} style={[styles.timeRow, { borderBottomWidth: day !== 'Saturday' ? 0.5 : 0 }]}>
                            <Text style={styles.dayLabel}>{day}</Text>
                            <Text style={styles.timeText}>{time}</Text>
                            
                            <TouchableOpacity style={styles.editButton}>
                                <MaterialIcons name="edit" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View> */}
                <AvailabilityScreen />
                <TouchableOpacity style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                    <MaterialIcons name='calendar-today' color={Colors.dark.btn} size={17} />
                    <Text style={{ fontSize: 14, color: Colors.dark.btn, marginLeft: 10 }}>
                        Add specific dates
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.background : Colors.dark.background }]}>
            {header()}

            <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
                {onboardingSteps === 1 && step2()}
                {onboardingSteps === 2 && step3()}
                {onboardingSteps === 3 && step4()}
                {onboardingSteps === 4 && step5()}
                {onboardingSteps === 5 && step6()}
            </ScrollView>

            {onboardingSteps !== 0 && (
                <View style={{ justifyContent: 'flex-end', paddingHorizontal: 20, marginBottom: 20 }}>
                    <Button title={'Next'} onPress={handleNext} />
                    {/* <TouchableOpacity onPress={handleNext} style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity> */}
                </View>
            )}
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        height: 5,
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
        height: 5,
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
        color: '#79B939',
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
        padding: 7,
        color: 'black',
        width: width / 1.1,
    },
    label: {
        fontSize: 13,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#385420',
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
        // color: gg.textColor.color,
        // fontSize: 19,
        marginLeft: 10
    },
    subText: {
        // fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        // color: "#83867C",
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
        padding: 20,
        borderRadius: 50,
        backgroundColor: gg.greenBg.backgroundColor,
        alignSelf: 'center'
    },
    profileImage: {
        // width: 100,
        // height: 100,
        borderRadius: 30,
    },
    editIconContainer: {
        position: 'absolute',
        // bottom: 0,
        // height:30,
        right: 120,
        // backgroundColor: 'lightgrey', // Blue background
        padding: 5,
        borderRadius: 10,
    },

    label: {
        fontSize: 16,
        marginBottom: 5,
        color: gg.textColor.color
    },
    input: {
        color: gg.textColor.color
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
        color: '#79B939',
    },
    daysView: {
        marginTop: 50,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: gg.textColor.color
    },
    daysContainer: {
        flexDirection: 'row',
    },
    dayButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
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
        // fontSize: 14,
        color: gg.textColor.color
    },
    selectedDayText: {
        color: 'white'
    },
    timeContainer: {
        marginTop: 20,
        borderRadius: 16,
        // backgroundColor: '#e4e6e1',
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
        color: gg.textColor.color,
        width: '40%'
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
        color: gg.textColor.color
    },
    addButton: {
        // backgroundColor: '#44463F',
        // width:100,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        // alignSelf:'center'
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

export default EarnerOnboarding;