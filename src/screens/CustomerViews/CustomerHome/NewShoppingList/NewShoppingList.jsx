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

const NewShoppingList = () => {
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
    const [aiscan, setAiscan] = useState(false);

    const { theme, toggleTheme } = useTheme(); // Get theme state
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
                    <Text style={[styles.ingredientName, { fontSize: 17 }]}>{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={handleDecrease} style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                        <MaterialIcons name="remove" size={20} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.servingsText}>{item.amount}</Text>
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
                backgroundColor: '#EFF0ED',
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
                    setOnboardingSteps(onboardingSteps + 1)
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
        setIsSheetVisible(false)
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

    const header = () => {
        return (
            <View style={styles.header}>

                {onboardingSteps !== 1 ?
                    <TouchableOpacity onPress={handleBack}>
                        <MaterialIcons name="chevron-left" size={30} color="grey" />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => nav.goBack()}>
                        <MaterialIcons name="close" size={25} color="grey" />
                    </TouchableOpacity>}


                {onboardingSteps == 1 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Shopping list name</Text>}
                {onboardingSteps == 2 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Dinner</Text>}
                {onboardingSteps == 3 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Dinner</Text>}

                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    const stepEditorView = () => {
        return (
            <View style={styles.stepEditorView}>
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
                        <MaterialIcons name="close" size={15} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.stepEditorContainer, { height: '15%' }]}>
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
                </View>
            </View>
        )
    }

    const step1 = () => {
        return (
            <View style={{ marginHorizontal: 18 }}>
                <View>
                    <TextInput
                        style={{ fontSize: 15, borderBottomWidth: 1, borderBottomColor: Colors.dark.btn }}
                        placeholder='Enter name or tap to suggestions'
                        placeholderTextColor={'#9B9C96'}
                        multiline
                    />
                </View>
                <View style={{ marginTop: 80 }}>
                    <Text style={{ color: '#83867C', fontSize: 15, fontWeight: '600', color: ggStyles.subTextColor.color }}>Suggestions</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Party</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Weekly</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Market</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Weekends</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Holidays</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Barbeque</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 10, padding: 10, backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 3 }}>
                            <Text style={{ color: ggStyles.subTextColor.color, fontSize: 15, fontWeight: '500' }}>Dinner</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }

    const step2 = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: theme == 'light' ? '#D2D4CD' : Colors.dark.btn }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Name
                        </Text>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Party
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: theme == 'light' ? '#D2D4CD' : Colors.dark.btn }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            When
                        </Text>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            23 March
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Share With
                        </Text>
                        <Image source={require('../../../../../assets/images/Avatar2.png')} style={{ width: 20, height: 20, borderRadius: 20 }} />
                    </View>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', height: '70%' }}>
                    
                    {theme=='light'?
                        <Image source={require('../../../../../assets/images/emptywhite.png')} />
                        :<Image source={require('../../../../../assets/images/empty.png')} />
                        }
                    <Text style={{ marginTop: 5, color: "#83867C", fontSize: 13, fontWeight: '500' }}>
                        Its Empty
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setIsSheetVisible(true)} style={{
                            backgroundColor: Colors.dark.btn,
                            borderRadius: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 10,
                            // width: width / 1.3,
                            marginTop: 20,
                            alignSelf: 'center',
                        }}>
                            <Text style={styles.buttonText}>Add Products</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => setIsSheetVisible(true)} style={{
                        backgroundColor: '#44463F',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        width: width / 1.3,
                        marginTop: 15,
                        alignSelf: 'center',
                    }}>
                        <Text style={styles.buttonText}>Add Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setAiscan(true)} style={{
                        backgroundColor: 'black',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        // width: width / 1.1,
                        marginTop: 15,
                        marginLeft: 10,
                        alignSelf: 'center',
                    }}>
                        <Image source={require('../../../../../assets/images/AI-2.png')} />
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }

    const step3 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={{ borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: theme == 'light' ? '#D2D4CD' : Colors.dark.btn }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Name
                        </Text>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Party
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderBottomWidth: 1, borderBottomColor: theme == 'light' ? '#D2D4CD' : Colors.dark.btn }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            When
                        </Text>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            23 March
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Share With
                        </Text>
                        <Image source={require('../../../../../assets/images/Avatar2.png')} style={{ width: 20, height: 20, borderRadius: 20 }} />
                    </View>
                </View>

                <View style={[{
                    borderRadius: 16, padding: 5, backgroundColor: ggStyles.heroHeader.backgroundColor, flexDirection: 'row', alignItems: 'center', marginTop: 15
                }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[{}]}>
                        </View>
                        <Image source={require('../../../../../assets/images/heropic.jpg')} style={{ width: 80, height: 80, borderRadius: 12 }} resizeMode='cover' />
                    </View>

                    <View style={{}}>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 50,position:'absolute',top:-5,left:250 }}>
                            <TouchableOpacity>
                                <MaterialIcons name='close' size={14} color={ggStyles.subTextColor.color} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{

                            color: ggStyles.textColor.color,
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 10
                        }}>Time to cook</Text>
                        <Text style={{
                            marginTop: 3,
                            color: ggStyles.subTextColor.color,
                            fontSize: 12,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            width: '70%'
                        }}>Descover recipes ideas based on the products on the list</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: ggStyles.subTextColor.color,
                    }}>Products - 8</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={
                            {
                                fontSize: 13,
                                marginRight: 3,
                                color: ggStyles.subTextColor.color,
                            }
                        }>Sort by category</Text>
                        <MaterialIcons name={'keyboard-arrow-up'} color={'grey'} size={17} />
                    </View>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color, }}>Fruits - 4</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/apple.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Apple</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/orange.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Orange</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/kiwi.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Kiwi</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color, }}>Category - 4</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/kiwi.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Kiwi</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/orange.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Orange</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/apple.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Apple</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: ggStyles.textColor.color }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="remove" size={20} color={'white'} />
                            </TouchableOpacity>
                            <Text style={styles.servingsText}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#A6A8A0' }}>
                                <MaterialIcons name="add" size={20} color={'white'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{

                }}>
                    <TouchableOpacity onPress={() => {
                        ToastMessage('success', 'top', 'Shopping list has been added!');
                        setOnboardingSteps(1)
                        nav.navigate('customerhome')
                    }} style={{
                        backgroundColor: Colors.dark.btn,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        width: '100%',
                        marginTop: 15,
                        alignSelf: 'center',
                    }}>
                        <Text style={styles.buttonText}>Add Products</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView >
        )
    }

    const step4 = () => {
        return (
            <View style={{ marginHorizontal: 20, height: '100%' }}>
                <Text style={styles.sectionTitle}>Difficulty</Text>

                <View style={styles.difficultyContainer}>
                    <TouchableOpacity
                        style={[styles.difficultyButton, difficulty === 'Easy' && styles.activeButton]}
                        onPress={() => handleDifficultyChange('Easy')}
                    >
                        <Text style={{ fontSize: 12, color: difficulty !== 'Easy' ? '44463F' : 'white', textAlign: 'center' }}>Easy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.difficultyButton, difficulty === 'Intermediate' && styles.activeButton]}
                        onPress={() => handleDifficultyChange('Intermediate')}
                    >
                        <Text style={{ fontSize: 12, color: difficulty !== 'Intermediate' ? '44463F' : 'white', textAlign: 'center' }}>Intermediate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.difficultyButton, difficulty === 'Advanced' && styles.activeButton]}
                        onPress={() => handleDifficultyChange('Advanced')}
                    >
                        <Text style={{ fontSize: 12, color: difficulty !== 'Advanced' ? '44463F' : 'white', textAlign: 'center' }}>Advanced</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.timeContainer}>
                    <Text style={styles.sectionTitle}>Cooking time</Text>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Prep time</Text>
                        <Text style={styles.timeValue}>{prepTime}</Text>
                    </View>
                    <View style={styles.timeInputContainer}>
                        <Text style={styles.timeLabel}>Cooking time</Text>
                        <Text style={styles.timeValue}>{cookingTime}</Text>
                    </View>
                </View>

                <View style={styles.privacyContainer}>
                    <Text style={styles.sectionTitle}>Privacy</Text>
                    <View style={styles.privacySwitch}>
                        <Text style={styles.privacyText}>Available only for OwOL members</Text>
                        <Switch
                            value={isPrivate}
                            onValueChange={setIsPrivate}
                            trackColor={{ false: '#ccc', true: '#888' }}
                            thumbColor={isPrivate ? '#f4f3f4' : '#f4f3f4'}
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', height: '40%' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 'white',
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
                            <Image source={require('../../../../../assets/images/eye.png')} />
                            <Text style={{
                                color: 'black',
                                fontWeight: 'bold',
                                marginLeft: 10
                            }}>Preview</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
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
        <SafeAreaView style={styles.container}>
            {header()}
            {onboardingSteps === 1 && step1()}
            {onboardingSteps === 2 && step2()}
            {onboardingSteps === 3 && step3()}
            {onboardingSteps === 4 && step4()}
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {popup()}
            </BottomSlider>
            {/* {ingredient.length !== 0 && */}
            {(onboardingSteps !== 2 && onboardingSteps !== 3) && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setOnboardingSteps(onboardingSteps + 1)}
            >
                <MaterialIcons name="chevron-right" size={30} color="white" />
            </TouchableOpacity>}
            {/* } */}


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
        backgroundColor: gg.basicContainer.backgroundColor,
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
        borderWidth: 1,
        borderColor: '#A6A8A0',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
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
    itemContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: gg.borderColor.borderColor,
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 10
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

export default NewShoppingList;