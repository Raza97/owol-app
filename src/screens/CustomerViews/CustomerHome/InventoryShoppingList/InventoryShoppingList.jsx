import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import BottomSlider from '../../../../components/BottomSlider';
import ToastMessage from '../../../../../utlis/ToastMessage';
const { width, height } = Dimensions.get('window');
import { useTheme } from '../../../../routes/ThemeContext';
import { Colors } from '../../../../../constants/Colors';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';

const InventoryShoppingList = () => {
    const nav = useNavigation()
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const [isSheetVisible, setIsSheetVisible] = useState(false)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()

    const menuList = [
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
    ]

    const styles = getStyles(theme, ggStyles)

    const handleBack = () => {
        setOnboardingSteps((prev) => {
            if (prev > 1) {
                return prev - 1
            }
            return prev
        });
        // setIngredient([])
        // setSteps([])
    }

    const UpperListComponent = (item, index) => {
        return (
            <View key={index} style={{ borderRadius: 8, borderWidth: 1, borderColor: ggStyles.borderColor.borderColor, marginHorizontal: 10, width: 120 }}>
                <Image source={require('../../../../../assets/images/customerhomepic2.jpg')} style={{ width: '100%', height: height / 7 }} resizeMode='cover' />
                <View style={{ padding: 10 }}>
                    <View style={{ backgroundColor: '#E8EAE3', borderRadius: 30, padding: 2, width: '60%' }}>
                        <Text style={{ color: '#5C5D58', fontSize: 12, textAlign: 'center' }}>
                            {item.category}
                        </Text>
                    </View>
                    <Text style={{ color: ggStyles.textColor.color, fontSize: 13, marginTop: 5 }}>
                        {item.menu}
                    </Text>
                    <Text style={{ color: ggStyles.subTextColor.color, fontSize: 13, marginTop: 1 }}>
                        {item.serving}
                    </Text>
                </View>
            </View>
        )
    }



    const popup1 = () => {
        return (
            <View style={styles.optionsList}>
                <View style={[styles.optionContainer, { borderBottomWidth: 0 }]}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Party details</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <MaterialIcons name="edit" size={20} color={theme == 'light' ? '#cc' : Colors.dark.text} />
                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Occasion</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Son's BD</Text>

                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Date</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>23 March 12pm</Text>

                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Venue</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Home</Text>

                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Theme</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Superhero</Text>


                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Guests</Text>
                    {/* <TouchableOpacity style={styles.addButton}> */}
                    <MaterialIcons name="add" size={20} color={theme == 'light' ? '#cc' : Colors.dark.text} />
                    {/* </TouchableOpacity> */}
                </View>
            </View>


        )
    }
    const popup2 = () => {
        return (
            <View style={styles.optionsList}>
                <View style={[styles.optionContainer, { borderBottomWidth: 0 }]}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Which lists you want to combine?</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    {/* <MaterialIcons name="edit" size={20} color={theme == 'light' ? '#cc' : Colors.dark.text} /> */}
                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Occasion</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <TouchableOpacity>
                        <MaterialIcons name="check-box" size={20} color={theme == 'light' ? '#cc' : Colors.dark.text} />
                    </TouchableOpacity>

                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Date</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <TouchableOpacity>
                        <MaterialIcons name="check-box" size={20} color={theme == 'light' ? '#cc' : Colors.dark.text} />
                    </TouchableOpacity>
                    {/* <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>23 March 12pm</Text> */}

                    {/* </TouchableOpacity> */}
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Venue</Text>
                    {/* <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}> */}
                    <TouchableOpacity>
                        <MaterialIcons name="check-box-outline-blank" size={20} color={theme == 'light' ? '#cc' : Colors.dark.text} />
                    </TouchableOpacity>
                    {/* <Text style={[styles.optionText, { color: theme == 'light' ? '#cc' : Colors.dark.text }]}>Home</Text> */}

                    {/* </TouchableOpacity> */}
                </View>
                <TouchableOpacity onPress={() => {
                    setIsSheetVisible(false)
                    setOnboardingSteps(onboardingSteps + 1)
                }} style={{ backgroundColor: Colors.dark.btn, padding: 15, borderRadius: 12, alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontSize: 13 }}>Combine lists</Text>
                </TouchableOpacity>
            </View>


        )
    }


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


                {onboardingSteps == 1 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Party</Text>}
                {onboardingSteps == 2 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Shopping lists</Text>}
                {onboardingSteps == 3 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Dinner</Text>}

                {onboardingSteps === 1 && <TouchableOpacity onPress={() => setOnboardingSteps(onboardingSteps + 1)}>
                    <MaterialIcons name="menu" size={25} color="grey" />
                </TouchableOpacity>}

                {onboardingSteps !== 1 && <TouchableOpacity>
                    <MaterialIcons name="all-inbox" size={25} color="grey" />
                </TouchableOpacity>}
            </View >
        )
    }

    const step1 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={{ borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                        <Text style={{ color: ggStyles.textColor.color, fontSize: 17, fontWeight: '500' }}>
                            Party Details
                        </Text>
                        <MaterialIcons name={"chevron-right"} color={ggStyles.textColor.color} size={25} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>Menu</Text>
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                        marginBottom: 10
                    }}>View all {'>'}</Text>
                </View>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 10 }}>
                    {menuList.map((item, index) => (
                        UpperListComponent(item, index)
                    )
                    )}
                </ScrollView>

                <View style={{ marginTop: 32, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>Shopping List</Text>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={
                            {
                                fontSize: 13,
                                color: 'black',
                                marginRight: 3
                            }
                        }>Sort by category</Text>
                        <MaterialIcons name={'keyboard-arrow-up'} color={'black'} size={17} />
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
                    // top: 470,s
                    // position: 'absolute',
                    flexDirection: 'row'
                }}>
                    {/* <TouchableOpacity onPress={() => {
                        ToastMessage('success', 'top', 'Shopping list has been added!');
                        setOnboardingSteps(1)
                        nav.navigate('customerhome')
                    }} style={{
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
                    <TouchableOpacity style={{
                        backgroundColor: '#44463F',
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                        // width: width / 1.1,
                        marginTop: 15,
                        marginLeft: 10,
                        alignSelf: 'center',
                    }}>
                        <Image source={require('../../../../../assets/images/ai.png')} />
                    </TouchableOpacity> */}
                </View>

            </ScrollView >
        )
    }

    const step2 = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ height: '80%' }}>
                    <View style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: ggStyles.purpleBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: ggStyles.textColor.color,
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>Party</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color,
                                    marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: ggStyles.textColor.color,
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>Family</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: ggStyles.textColor.color,
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>Weekly dinner</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => setIsSheetVisible(true)} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: ggStyles.aiColor.backgroundColor, padding: 15, borderRadius: 30, alignItems: 'center', width: '80%' }}>
                        <Image source={require('../../../../../assets/images/aiwhite.png')} />

                        <Text style={{ color: 'white', fontSize: 13, marginLeft: 5 }}>Generate a combined list</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 15, borderRadius: 30, alignItems: 'center', backgroundColor: Colors.dark.btn, marginLeft: 5 }}>
                        <MaterialIcons name={'add'} color={'white'} />
                    </View>
                </View>
            </View>
        )
    }
    const step3 = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ height: '80%' }}>

                    <View style={[styles.sectionContainer, { borderRadius: 16, borderWidth: 1, borderColor: ggStyles.borderColor.borderColor, backgroundColor: ggStyles.purpleBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {theme == 'light' ?
                                    <Image source={require('../../../../../assets/images/ai.png')} />
                                    : <Image source={require('../../../../../assets/images/aiwhite.png')} />
                                }
                                <Text style={{
                                    color: ggStyles.textColor.color,
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginLeft: 10
                                }}>Smart List</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View style={[styles.insideSmallDetailViews]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                            <Text style={{ color: ggStyles.subTextColor.color, marginLeft: 10, fontSize: 13 }}>Party</Text>
                            <Text style={{ color: ggStyles.subTextColor.color, marginLeft: 10, fontSize: 13 }}>Weekly</Text>
                        </View>
                    </View>

                    <View style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: ggStyles.textColor.color,
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>Party</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: ggStyles.textColor.color,
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>Family</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                color: ggStyles.textColor.color,
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>Weekly dinner</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: ggStyles.textColor.color, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={{}}>
                                    <MaterialIcons name={'menu'} color={ggStyles.textColor.color} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: ggStyles.textColor.color, textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', marginTop: 20 }}>
                    <TouchableOpacity onPress={() => {
                        ToastMessage('success', 'top', 'Created Shopping list')
                        nav.goBack()
                    }} style={{ alignItems: "center", flexDirection: 'row', backgroundColor: ggStyles.aiColor.backgroundColor, padding: 15, borderRadius: 30, alignItems: 'center', width: '80%' }}>
                        <Image source={require('../../../../../assets/images/aiwhite.png')} />
                        <Text style={{ color: 'white', fontSize: 13, marginLeft: 5 }}>Create combined list</Text>
                    </TouchableOpacity>
                    <View style={{ padding: 15, borderRadius: 30, alignItems: 'center', backgroundColor: Colors.dark.btn, marginLeft: 5 }}>
                        <MaterialIcons name={'add'} color={'white'} size={18} />
                    </View>
                </View>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>
            {header()}
            {onboardingSteps === 1 && step1()}
            {onboardingSteps === 2 && step2()}
            {onboardingSteps === 3 && step3()}
            {(!isSheetVisible && onboardingSteps === 1) && <TouchableOpacity onPress={() => setIsSheetVisible(true)}
                style={styles.floatingButton}
            // onPress={() => handleNext()}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {onboardingSteps == 1 && popup1()}
                {onboardingSteps == 2 && popup2()}
            </BottomSlider>
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
        backgroundColor: Colors.light.btn,
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
    optionsList: {
        marginTop: 10
    },
    optionContainer: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        // borderBottomWidth: 1,
        padding: 5,
        // borderBottomColor: '#E8EAE3'
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    sectionContainer: {
        marginTop: 20,
        // marginHorizontal: 20,
    },
    insideSmallDetailViews: {
        backgroundColor: gg.subTextBg.backgroundColor,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginTop: 5
    }
});

export default InventoryShoppingList;