import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import BottomSlider from '../../../../components/BottomSlider';
import ToastMessage from '../../../../../utlis/ToastMessage';
import { useTheme } from '../../../../routes/ThemeContext';
import { Colors } from '../../../../../constants/Colors';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
const { width, height } = Dimensions.get('window');

const NewContent = () => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const [title, setTitle] = useState('');
    const [aboutRecipe, setAboutRecipe] = useState('');
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const [servings, setServings] = useState(2);
    const [name, setName] = useState('Bread');
    const [amount, setAmount] = useState(100);
    const [unit, setUnit] = useState('g');
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [ingredient, setIngredient] = useState([])
    const [steps, setSteps] = useState([])
    const [stepEditor, setStepEditor] = useState(false)
    const [inp, setInp] = useState({})
    const [difficulty, setDifficulty] = useState('Easy');
    const [prepTime, setPrepTime] = useState('5 min');
    const [cookingTime, setCookingTime] = useState('10 min');
    const [isPrivate, setIsPrivate] = useState(false);
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    useEffect(() => {
        console.log(onboardingSteps);

    }, [onboardingSteps])


    const handleBack = () => {
        setOnboardingSteps((prev) => {
            if (prev > 1) {
                return prev - 1
            }
            return prev
        });
        setIngredient([])
        setSteps([])
    }
    const handleNext = () => {
        if (onboardingSteps === 3) {
            ToastMessage('success', 'top', 'Event has been added to Content');
            nav.goBack()
            return
        }
        setOnboardingSteps(onboardingSteps + 1);
        setIngredient([])
        setSteps([])
    }

    // const renderProgressIndicators = () => {
    //     const indicators = [];
    //     for (let i = 1; i <= 3; i++) {
    //         indicators.push(
    //             <View
    //                 key={i}
    //                 style={i <= onboardingSteps ? styles.activeIndicator : styles.inactiveIndicator}
    //             />
    //         );
    //     }
    //     return indicators;
    // };


    const header = () => {
        return (
            <View style={styles.header}>

                {onboardingSteps !== 1 ?
                    <TouchableOpacity onPress={handleBack}>
                        <MaterialIcons name="chevron-left" size={30} color={theme == 'light' ? "#13100D" : 'white'} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <MaterialIcons name="close" size={25} color={theme == 'light' ? "#13100D" : 'white'} />
                    </TouchableOpacity>}

                {onboardingSteps === 1 && <Text style={styles.sectionTitle}>About Event</Text>}
                {onboardingSteps === 2 && <Text style={styles.sectionTitle}>Set up ingredient list</Text>}
                {onboardingSteps === 3 && <Text style={styles.sectionTitle}>Difficulty</Text>}
                {/* <View style={{ marginTop: 20 }}>
                    <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View>
                    <Text style={{ fontSize: 12, color: '#83867C', textAlign: 'center', marginTop: 5 }}>Steps {onboardingSteps} of 4</Text>
                </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    const popup = () => {
        return (
            <View style={styles.modalContent}>
                <View style={styles.ingredientImageContainer}>
                    <Image source={require('../../../../../assets/images/bread.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                    <Text style={[styles.ingredientName, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Bread</Text>
                </View>
                <View style={styles.inputRow}>
                    <View style={styles.inputContainerModal}>
                        <Text style={styles.inputLabel}>Amount</Text>
                        <TextInput
                            style={[styles.input, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}
                            keyboardType="numeric"
                            value={String(amount)}
                            onChangeText={setAmount}
                        />
                    </View>
                    <View style={styles.inputContainerModal}>
                        <Text style={styles.inputLabel}>Units</Text>
                        <TextInput
                            style={[styles.input, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}
                            value={unit}
                            onChangeText={setUnit}
                        />
                    </View>
                </View>

                <TouchableOpacity style={[styles.addButton, {
                    backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn,
                    width: width / 1.2,
                }]} onPress={() => {
                    setIngredient([...ingredient, {
                        name: 'Bread',
                        amount: '100g'
                    }])
                    setIsSheetVisible(false)
                }}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }


    const IngredientItem = (item, index) => {

        const handleIncrease = () => {
            setAmount(amount + 1);
        };

        const handleDecrease = () => {
            if (amount > 0) {
                setAmount(amount - 1);
            }
        };

        return (
            <View style={styles.itemContainer} key={index}>
                <View style={styles.ingredientImageContainer}>
                    <Image source={require('../../../../../assets/images/bread.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                    <Text style={[styles.ingredientName, { fontSize: 17, color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={handleDecrease} style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                        <MaterialIcons name="remove" size={20} color={'white'} />
                    </TouchableOpacity>
                    <Text style={[styles.servingsText, { color: theme == 'light' ? '#44463F' : Colors.dark.text }]}>{item.amount}</Text>
                    <TouchableOpacity onPress={handleIncrease} style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                        <MaterialIcons name="add" size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                </TouchableOpacity>
            </View>
        );
    };


    const step1 = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 20 }}>
                <View style={styles.timeContainer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderRadius: 16, alignSelf: 'center', width: 120, height: 120, backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E' }}>
                        <Image source={require('../../../../../assets/placeholders/placeholdergreen.png')} />
                    </View>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Category</Text>
                        <Text style={styles.timeValue}>Masterclass</Text>
                    </View>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Title</Text>
                        <Text style={styles.timeValue}>Enter</Text>
                    </View>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Number of guests</Text>
                        <Text style={styles.timeValue}>Select</Text>
                    </View>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Starts</Text>
                        <Text style={styles.timeValue}>Select</Text>
                    </View>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Ends</Text>
                        <Text style={styles.timeValue}>Selects</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#44463F' }}>
                            <MaterialIcons name="add" size={20} color={'white'} />
                        </TouchableOpacity>
                        <Text style={{
                            marginHorizontal: 10,
                            color: theme == 'light' ? 'black' : 'white'
                        }}>Add more dates</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#44463F' }}>
                            <MaterialIcons name="circle" size={20} color={'white'} />
                        </TouchableOpacity>
                        <Text style={{
                            marginHorizontal: 10,
                            color: theme == 'light' ? 'black' : 'white'
                        }}>Offline</Text>
                    </View>
                    <View style={[styles.timeInputContainer, { marginTop: 10 }]}>
                        <Text style={styles.timeLabel}>Venue</Text>
                        <Text style={styles.timeValue}>Selects</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#44463F' }}>
                            <MaterialIcons name="circle" size={20} color={'white'} />
                        </TouchableOpacity>
                        <Text style={{
                            marginHorizontal: 10,
                            color: theme == 'light' ? 'black' : 'white'
                        }}>Online</Text>
                    </View>
                    <View style={[styles.timeInputContainer, { marginTop: 10 }]}>
                        <Text style={styles.timeLabel}>Price per guest</Text>
                        <Text style={styles.timeValue}>0</Text>
                    </View>
                    <View style={[styles.timeInputContainer, { marginTop: 10 }]}>
                        <Text style={styles.timeLabel}>Details</Text>
                        {/* <Text style={styles.timeValue}>0</Text> */}
                    </View>
                </View>
            </ScrollView>
        )
    }

    const step2 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }}>
                <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Ingredients</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>

                </View>
                {ingredient &&
                    ingredient.map((item, index) => (
                        IngredientItem(item, index)
                    ))
                }
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity onPress={() => { setIsSheetVisible(true) }} style={{ borderRadius: 30, backgroundColor: '#79B939' }}>
                        <MaterialIcons name="add" size={20} color={'white'} />
                    </TouchableOpacity>
                    <Text style={{
                        marginHorizontal: 10,
                        color: '#79B939'
                    }}>Add Ingredient</Text>

                </View>
            </ScrollView>
        )
    }
    const step3 = () => {
        return (
            <View style={{ marginHorizontal: 20, height: '100%' }}>
                <Text style={styles.sectionTitle}>Ingredients</Text>
                <View style={styles.difficultyContainer}>
                    <TouchableOpacity
                        style={[[styles.difficultyButton, {
                            backgroundColor: theme == 'light' ? 'white' : Colors.dark.secondaryBackground,
                        }], difficulty === 'Easy' && {
                            backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn,
                        }]}
                        onPress={() => handleDifficultyChange('Easy')}
                    >
                        <Text style={{
                            fontSize: 12, color: difficulty !== 'Easy' ? theme == 'light' ? '#44463F' : 'white' : theme == 'light' ? 'white' : 'white', textAlign: 'center'
                        }}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[[styles.difficultyButton, {
                            backgroundColor: theme == 'light' ? 'white' : Colors.dark.secondaryBackground,
                        }], difficulty === 'Intermediate' && {
                            backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn,
                        }]}
                        onPress={() => handleDifficultyChange('Intermediate')}
                    >
                        <Text style={{ fontSize: 12, color: difficulty !== 'Intermediate' ? theme == 'light' ? '#44463F' : 'white' : theme == 'light' ? 'white' : 'white', textAlign: 'center' }}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[[styles.difficultyButton, {
                            backgroundColor: theme == 'light' ? 'white' : Colors.dark.secondaryBackground,
                        }], difficulty === 'Advanced' && {
                            backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn,
                        }]}
                        onPress={() => handleDifficultyChange('Advanced')}
                    >
                        <Text style={{ fontSize: 12, color: difficulty !== 'Advanced' ? theme == 'light' ? '#44463F' : 'white' : theme == 'light' ? 'white' : 'white', textAlign: 'center' }}>Advanced</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.commentView}>
                    <Text style={styles.sectionTitle}>
                        Additionally
                    </Text>
                    <TextInput style={{
                        color: ggStyles.textColor.color, fontSize: 13,
                    }}
                        placeholder='If the guests need to know anything...'
                        placeholderTextColor={ggStyles.borderColor.borderColor}
                    />
                    {/* </Text> */}
                </View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', height: '40%' }}>
                    <TouchableOpacity style={{
                        // backgroundColor: 'white',
                        // borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        width: width / 1.1,
                        // margin: 15,
                        alignSelf: 'center',
                    }} onPress={() => {
                        // nav.navigate('recipepreview')
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <Image source={require('../../../../../assets/images/eye.png')} /> */}
                            <Text style={{
                                color: theme == 'light' ? 'black' : 'white',
                                fontWeight: 'bold',
                                // marginLeft: 10
                            }}>Preview</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        ToastMessage('success', 'top', 'Event has been added to Content');
                        nav.goBack()
                    }}>
                        <Text style={styles.buttonText}>Post</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }

    const handleDifficultyChange = (diff) => {
        setDifficulty(diff);
    };


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            {onboardingSteps === 1 && step1()}
            {onboardingSteps === 2 && step2()}
            {onboardingSteps === 3 && step3()}
            {onboardingSteps !== 3 && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => handleNext()}
            >
                <MaterialIcons name="chevron-right" size={30} color="white" />
            </TouchableOpacity>}
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {popup()}
            </BottomSlider>
        </SafeAreaView >

    )
}
const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 18
    },
    timeContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        // width: '100%',
        // backgroundColor: '#83867C'
    },
    sectionTitleRecipeDetails: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    timeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '100%',
        backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E',
        borderRadius: 16,
        padding: 20
    },
    timeLabel: {
        marginRight: 5,
        fontSize: 15,
        color: theme == 'light' ? 'black' : 'white',
        fontWeight: '500'
    },
    timeValue: {
        // width: 100,
        paddingLeft: 20,
        fontSize: 13,
        color: theme == 'light' ? 'black' : 'white',
        // borderLeftColor: '#D2D4CD',
        // borderLeftWidth: 1
    },
    sectionTitle: {
        color: theme == 'light' ? 'black' : Colors.dark.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: Colors.dark.btn,
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        zIndex: 100
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#E8EAE3',
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 10
    },
    ingredientImageContainer: {
        flexDirection: 'row'
    },
    ingredientName: {
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 12
    },
    servingsText: {
        marginHorizontal: 10,
        color: '#44463F'
    },
    modalContent: {
        marginTop: 10,
        // width: width / 1.1,
        // backgroundColor: 'aqua'
    },
    ingredientImageContainer: {
        flexDirection: 'row'
    },
    ingredientImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    ingredientName: {
        textAlignVertical: "center",
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 12
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    inputContainerModal: {
        width: '45%',
    },
    inputLabel: {
        color: '#83867C',
        fontSize: 12,
        marginBottom: 5
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
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
    input: {
        borderWidth: 1,
        borderColor: '#A6A8A0',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    difficultyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    difficultyButton: {
        // paddingHorizontal: 20,
        width: '30%',
        paddingVertical: 12,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#D2D4CD',
    },
    activeButton: {
        backgroundColor: '#44463F'
    },
    timeContainerStep3: {
        marginTop: 20,
        width: '100%',
        // backgroundColor: '#83867C'
    },
    sectionTitleRecipeDetails: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    timeInputContainerStep3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '100%',
        backgroundColor: '#EFF0ED',
        borderRadius: 16,
        padding: 20
    },
    timeLabelStep3: {
        marginRight: 5,
        fontSize: 12,
        color: '#44463F'
    },
    timeValueStep3: {
        width: 100,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        borderLeftColor: '#D2D4CD',
        borderLeftWidth: 1
    },
    commentView: {
        marginTop: 10,
        borderRadius: 16,
        backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E',
        padding: 15,
        width: '100%',
        height: 200,
    }
})

export default NewContent;

