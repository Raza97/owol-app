import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import BottomSlider from '../../../../components/BottomSlider';
import ToastMessage from '../../../../../utlis/ToastMessage';
import { Colors } from '../../../../../constants/Colors';
import { useTheme } from '../../../../routes/ThemeContext';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
const { width, height } = Dimensions.get('window');


const NewRecipe = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
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
        console.log(ingredient);
        console.log(steps);

    }, [ingredient, steps])


    const handleDifficultyChange = (diff) => {
        setDifficulty(diff);
    };

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

    const stepItem = (item, index) => {
        return (
            <View key={index} style={{
                borderRadius: 16,
                backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E',
                padding: 15,
                width: '100%',
                marginTop: 10,

                // height: 200,
            }} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    width: '100%',
                    // height: '85%',
                }}>
                    <Text style={{
                        color: 'white', fontSize: 15, backgroundColor: '#44463F',
                        width: 20, height: 20, textAlign: 'center', borderRadius: 15,
                        textAlignVertical: 'center'
                    }}>
                        {item.index}
                    </Text>
                    {/* </View> */}
                    <Text style={{
                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                        width: '80%',
                        paddingHorizontal: 10,
                    }}>
                        {item?.desc}
                    </Text>
                    <TouchableOpacity onPress={() => {
                    }} style={{ backgroundColor: '#A6A8A0', padding: 2, borderRadius: 30 }}>
                        <MaterialIcons name="close" size={15} color="white" />
                    </TouchableOpacity>
                </View>
                {/* <View style={[styles.stepEditorContainer, { height: '15%' }]}>
                    <Image source={require('../../../../../assets/images/image-add.png')} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../../../assets/images/timer.png')} />
                        <Text style={{
                            color: 'black',
                            marginLeft: 5,
                        }}>Set Timer</Text>
                    </View>
                    <TouchableOpacity onPress={() => {
                        setSteps([...steps, { index: steps.length + 1, desc: inp?.desc, timer: inp?.timer }])
                        setInp({})
                        setStepEditor(false)
                    }}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            // marginLeft: 5,
                        }}>Add</Text>
                    </TouchableOpacity>
                </View> */}
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

    const handleDecrease = () => {
        if (servings > 1) {
            setServings(servings - 1);
        }
    };

    const handleIncrease = () => {
        setServings(servings + 1);
    };

    const renderProgressIndicators = () => {
        const indicators = [];
        for (let i = 1; i <= 4; i++) {
            indicators.push(
                <View
                    key={i}
                    style={i <= onboardingSteps ? [styles.activeIndicator, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }] : styles.inactiveIndicator}
                />
            );
        }
        return indicators;
    };

    const header = () => {
        return (
            <View style={styles.header}>

                {onboardingSteps !== 1 ?
                    <TouchableOpacity onPress={handleBack}>
                        <MaterialIcons name="chevron-left" size={30} color={theme == 'light' ? '#13100D' : 'white'} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <MaterialIcons name="close" size={25} color={theme == 'light' ? '#13100D' : 'white'} />
                    </TouchableOpacity>}

                <View style={{ marginTop: 20 }}>
                    <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View>
                    <Text style={{ fontSize: 12, color: '#83867C', textAlign: 'center', marginTop: 5 }}>Steps {onboardingSteps} of 4</Text>
                </View>
                <View><Text style={{ color: '#79B939' }}>Skip</Text></View>
            </View >
        )
    }

    const stepEditorView = () => {
        return (
            <View style={[styles.stepEditorView, { backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E' }]}>
                <View style={styles.stepEditorContainer}>
                    {/* <View style={{ borderRadius: 30, backgroundColor: '#44463F', padding:7 }}> */}
                    <Text style={{
                        color: 'white', fontSize: 15, backgroundColor: '#44463F',
                        width: 20, height: 20, textAlign: 'center', borderRadius: 15,
                        textAlignVertical: 'center'
                    }}>
                        {steps.length === 0 ? '1' : steps.length + 1}
                    </Text>
                    {/* </View> */}
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                            marginTop: -10,
                            color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                            // paddingVertical: 12,
                            width: '80%',
                            // height: '100%',
                            // backgroundColor: 'aqua'
                        }}
                        // placeholder="Briefly describe the recipe"
                        // placeholderTextColor={"#A6A8A0"}
                        multiline
                        numberOfLines={4}
                        value={inp?.desc}
                        onChangeText={(text) => setInp({ ...inp, desc: text })}
                    />
                    <TouchableOpacity onPress={() => {
                        setStepEditor(false)
                        setInp({})
                    }} style={{ backgroundColor: '#A6A8A0', padding: 2, borderRadius: 30 }}>
                        <MaterialIcons name="close" size={15} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.stepEditorContainer, { height: '15%', }]}>
                    <Image source={require('../../../../../assets/placeholders/smallplaceholder.png')} />
                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        <Image source={require('../../../../../assets/images/timer.png')} />
                        <Text style={{
                            color: Colors.dark.btn,
                            marginLeft: 5,
                            fontSize: 13
                        }}>Set Timer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setSteps([...steps, { index: steps.length + 1, desc: inp?.desc, timer: inp?.timer }])
                        setInp({})
                        setStepEditor(false)
                    }}>
                        <Text style={{
                            color: theme == 'light' ? Colors.light.btn : Colors.dark.btn,
                            fontWeight: 'bold',
                            marginTop: 2
                            // marginLeft: 5,
                        }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const step1 = () => {
        return (
            <View style={{ marginHorizontal: 18 }}>

                <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Description</Text>

                <View style={styles.inputContainer}>
                    <Text style={[styles.label, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Title*</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter recipe name"
                        placeholderTextColor={"#A6A8A0"}
                        value={title}
                        onChangeText={setTitle}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={[styles.label, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>About recipe</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Briefly describe the recipe"
                        placeholderTextColor={"#A6A8A0"}
                        multiline
                        numberOfLines={4}
                        value={aboutRecipe}
                        onChangeText={setAboutRecipe}
                    />
                </View>

                <TouchableOpacity style={[styles.addButton, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]} onPress={() => setOnboardingSteps(onboardingSteps + 1)}>
                    <Text style={styles.buttonText}>Add photos and videos</Text>
                </TouchableOpacity>

                <View style={styles.tipContainer}>
                    <Image source={require('../../../../../assets/images/lamp-charge.png')} />
                    <Text style={styles.tipText}>
                        Video recipes attract more users
                    </Text>
                </View>
            </View>
        )
    }

    const step2 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }}>
                <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Ingredients</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>

                    <TouchableOpacity onPress={handleDecrease} style={{ borderRadius: 30, backgroundColor: '#79B939' }}>
                        <MaterialIcons name="remove" size={20} color={'white'} />
                    </TouchableOpacity>
                    <Text style={[styles.servingsText, { color: theme == 'light' ? "#44463F" : Colors.dark.text }]}>{servings} Serves</Text>
                    <TouchableOpacity onPress={handleIncrease} style={{ borderRadius: 30, backgroundColor: '#79B939' }}>
                        <MaterialIcons name="add" size={20} color={'white'} />
                    </TouchableOpacity>
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
            <ScrollView style={{ marginHorizontal: 20 }}>
                <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Steps</Text>
                {steps &&
                    steps.map((item, index) => (
                        stepItem(item, index)
                    ))
                }
                {stepEditor &&
                    stepEditorView()
                }
                <View style={{ flexDirection: 'row', marginTop: 30 }}>
                    <TouchableOpacity onPress={() => { setStepEditor(true) }} style={{ borderRadius: 30, backgroundColor: '#79B939' }}>
                        <MaterialIcons name="add" size={20} color={'white'} />
                    </TouchableOpacity>
                    <Text style={{
                        marginHorizontal: 10,
                        color: "#79B939"
                    }}>Add step</Text>

                </View>
            </ScrollView>
        )
    }

    const step4 = () => {
        return (
            <View style={{ marginHorizontal: 20, height: '100%' }}>
                <Text style={[styles.sectionTitle, {
                    color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                }]}>Difficulty</Text>

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

                <View style={styles.timeContainer}>
                    <Text style={[styles.sectionTitle, {
                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                    }]}>Cooking time</Text>
                    <View style={[styles.timeInputContainer, {
                        backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E',
                    }]}>
                        <Text style={[styles.timeLabel, {
                            color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                        }]}>Prep time</Text>
                        <Text style={[styles.timeValue, {
                            color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                        }]}>{prepTime}</Text>
                    </View>
                    <View style={[styles.timeInputContainer, {
                        backgroundColor: theme == 'light' ? '#EFF0ED' : '#131B0E',
                    }]}>
                        <Text style={[styles.timeLabel, {
                            color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                        }]}>Cooking time</Text>
                        <Text style={[styles.timeValue, {
                            color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                        }]}>{cookingTime}</Text>
                    </View>
                </View>

                <View style={styles.privacyContainer}>
                    <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Privacy</Text>
                    <View style={styles.privacySwitch}>
                        <Text style={[styles.privacyText, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Available only for OwOL members</Text>
                        <Switch
                            value={isPrivate}
                            onValueChange={setIsPrivate}
                            trackColor={{ false: '#ccc', true: Colors.light.btn }}
                            thumbColor={isPrivate ? '#f4f3f4' : '#f4f3f4'}
                        />
                    </View>
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
                        nav.navigate('newrecipepreview')
                    }}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <Image source={require('../../../../../assets/images/eye.png')} /> */}
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.btn,
                                fontWeight: 'bold',
                                // marginLeft: 10
                            }}>Preview</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.addButton, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]} onPress={() => {
                        ToastMessage('success', 'top', 'Recipe has been added to Cookbook');
                        nav.goBack()
                    }}>
                        <Text style={styles.buttonText}>Post</Text>
                    </TouchableOpacity>

                </View>

                {/* ... (Preview button and Post button) */}

            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            {onboardingSteps === 1 && step1()}
            {onboardingSteps === 2 && step2()}
            {onboardingSteps === 3 && step3()}
            {onboardingSteps === 4 && step4()}
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {popup()}
            </BottomSlider>
            {ingredient.length !== 0 && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setOnboardingSteps(onboardingSteps + 1)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}
            {ingredient.length !== 0 && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => {
                    setOnboardingSteps(onboardingSteps + 1)
                    setIngredient([])
                }
                }
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}

            {steps.length !== 0 && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => {
                    setOnboardingSteps(onboardingSteps + 1)
                    setSteps([])
                }
                }
            >
                <MaterialIcons name="chevron-right" size={30} color="white" />
            </TouchableOpacity>}
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 50
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 18
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: 'black',
        fontWeight: '400'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#79B939',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
        color: gg.textColor.color
    },
    addButton: {
        backgroundColor: '#13100D',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    tipContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    tipText: {
        fontSize: 14,
        color: '#83867C',
        marginLeft: 7

    },
    activeIndicator: {
        width: 60,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#5C5D58',
        // marginRight: 5,
    },
    progressIndicators: {
        flexDirection: 'row',
        // marginLeft: 20,
    },
    inactiveIndicator: {
        width: 60,
        height: 5,
        // borderRadius: 5,
        backgroundColor: 'lightgray',
        // marginRight: 5,
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
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 12,
        // backgroundColor: 'aqua',
        textAlignVertical: 'center'
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
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#79B939',
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10
    },
    stepEditorView: {
        marginTop: 10,
        borderRadius: 16,
        backgroundColor: '#EFF0ED',
        padding: 15,
        width: '100%',
        height: 200,
    },
    stepEditorContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        height: '85%',
        // backgroundColor:'green'
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
    timeContainer: {
        marginTop: 20,
        width: '100%',
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
        backgroundColor: '#EFF0ED',
        borderRadius: 16,
        padding: 20
    },
    timeLabel: {
        marginRight: 5,
        fontSize: 12,
        color: '#44463F'
    },
    timeValue: {
        width: 100,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
        borderLeftColor: '#D2D4CD',
        borderLeftWidth: 1
    },
    privacyContainer: {
        marginTop: 20,
    },
    privacySwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    privacyText: {
        marginRight: 10,
        color: 'black',
        fontSize: 15,
        fontWeight: '600'
    },

});

export default NewRecipe;