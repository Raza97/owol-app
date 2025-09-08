import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomerBottomBar from '../CustomerHome/CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
// import CollectionCard from '../CustomerHome/CollectionCard';
// import CustomerRecipeCard from '../CustomerRecipeCard';
// import CustomerLessonCard from '../CustomerLessonCard';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
import ToastMessage from '../../../../utlis/ToastMessage';
const HomeLearningQuizzes = () => {
    const nav = useNavigation()
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const [selectedQuiz, setSelectedQuiz] = useState(null)

    const { theme, toggleTheme } = useTheme(); // Get theme state
    const styles = getStyles(theme)


    const quizList = [
        { id: 1, text: 'The distance food travels from the farm to the consumers plate' },
        { id: 2, text: 'The number of miles a food delivery truck travels in a day' },
        { id: 3, text: 'The miles a person walks to reach a grocery store' },
        { id: 4, text: 'The distance between different sections of a supermarket' },
    ]

    const renderProgressIndicators = () => {
        const indicators = [];
        for (let i = 1; i <= 3; i++) {
            indicators.push(
                <View
                    key={i}
                    style={i <= onboardingSteps ? [styles.activeIndicator, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }] : styles.inactiveIndicator}
                />
            );
        }
        return indicators;
    };


    const handleNext = () => {
        setOnboardingSteps(onboardingSteps + 1)
    }

    const header = () => {
        return (
            <View style={styles.header}>
                {/* <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Discover</Text> */}
                {onboardingSteps === 1 && < TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="close" size={24} color="grey" />
                </TouchableOpacity>}
                {onboardingSteps === 2 && < TouchableOpacity onPress={() => setOnboardingSteps(onboardingSteps - 1)}>
                    <MaterialIcons name="chevron-left" size={24} color="grey" />
                </TouchableOpacity>}
                {onboardingSteps !== 1 && <View style={{ marginTop: 20 }}>
                    <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View>
                    <Text style={{ fontSize: 12, color: '#83867C', textAlign: 'center', marginTop: 5 }}>Question 10 out of 10</Text>
                </View>
                }
                {onboardingSteps !== 1 && <View><Text style={{ color: 'transparent' }}>Skip</Text></View>}

            </View >
        )
    }

    const quizComponent = (item) => {
        return (
            <TouchableOpacity onPress={() => setSelectedQuiz(item.id)} key={item.id} style={{
                padding: 15, flexDirection: 'row', alignItems: 'center', borderRadius: 16,
                marginTop: 10,
                backgroundColor: theme == 'light' ? 'white' : '#060504',
                borderWidth: item.id == selectedQuiz ? 1 : 0, borderColor: item.id == selectedQuiz ? Colors.light.btn : "#E8EAE3", justifyContent: 'space-between'
            }}>
                <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, width: 200 }}>{item.text}</Text>
                {item.id == selectedQuiz &&
                    <MaterialIcons name={'check-box'} size={20} color={Colors.light.btn} />
                }
            </TouchableOpacity>
        )
    }

    const step1 = () => {
        return (
            <View>
                <View style={{ justifyContent: "center", alignItems: 'center', height: '75%' }}>
                    <Text style={styles.heading}>Sustainable Food IQ Test</Text>
                    <Text style={styles.text}>Put your knowledge of sustainable food practices to the test with questions covering topics such as organic farming, fair trade, food waste reduction, and eco-friendly packaging</Text>
                    <View style={{ padding: 50, borderRadius: 16 }}>
                        <View style={styles.imageContainer}>

                            {theme == 'light' ? <Image source={require('../../../../assets/images/logobgwhite.png')} style={{ position: 'absolute', top: -40 }} />
                                : <Image source={require('../../../../assets/images/logobg.png')} style={{ position: 'absolute', top: -40 }} />}
                            <Image source={require('../../../../assets/images/OwOLLogo.png')} style={styles.image} />
                        </View>

                    </View>
                </View>
                <View style={{ height: '30%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => handleNext()} style={[styles.button, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const step2 = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ justifyContent: "center", alignItems: 'center', height: '30%' }}>
                    <Text style={styles.heading}>What does the term "food miles" refer to in the context of sustainable food practices?</Text>
                </View>
                {
                    quizList.map((item) => (
                        quizComponent(item)
                    ))
                }
                <View style={{ height: '50%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => {
                        nav.goBack()
                        ToastMessage('success', 'top', 'Congratulations! You answered correctly on 9/10')
                    }} style={[styles.button, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn ,marginTop:10}]}>
                        <Text style={styles.buttonText}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? '#F3FAEB' : '#131B0E' }]}>
            {header()}
            {onboardingSteps == 1 && step1()}
            {onboardingSteps == 2 && step2()}
        </SafeAreaView>
    )
}

const getStyles = (theme) => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white', // Light background color
    },
    header: {
        // height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    insideContainer: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: theme == 'light' ? "#000000" : Colors.dark.text
    },
    text: {
        fontSize: 16,
        marginBottom: 40,
        textAlign: 'center',
        color: theme == 'light' ? '#5C5D58' : "#83867C",
        width: width / 1.2,
        height: height / 12
    },
    imageContainer: {
        // backgroundColor: '#EFF0ED',
        width: 250,
        height: 250,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    image: {
        // width: 250,
        // height: 250,
    },
    button: {
        backgroundColor: '#13100D',
        borderRadius: 12,
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

    activeIndicator: {
        width: 60,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#5C5D58',
        // marginRight: 5,
    },
    inactiveIndicator: {
        width: 60,
        height: 5,
        // borderRadius: 5,
        backgroundColor: 'lightgray',
        // marginRight: 5,
    },
    progressIndicators: {
        flexDirection: 'row',
        // marginLeft: 20,
    }

})

export default HomeLearningQuizzes;