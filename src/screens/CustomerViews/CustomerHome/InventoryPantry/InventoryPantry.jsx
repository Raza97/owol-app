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

const InventoryPantry = () => {
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const [isSheetVisible, setIsSheetVisible] = useState(false)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const nav = useNavigation()
    const menuList = [
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
        { category: 'Main', menu: 'Baked Potato', serving: '8 serving' },
    ]

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
            <View key={index} style={{ borderRadius: 8, borderWidth: 1, borderColor: '#E8EAE3', marginHorizontal: 10, width: 120 }}>
                <Image source={require('../../../../../assets/images/bread.jpg')} style={{ width: '100%', height: height / 7 }} resizeMode='cover' />
                <View style={{ padding: 10 }}>
                    <View style={{ backgroundColor: '#E8EAE3', borderRadius: 30, padding: 2, width: '60%' }}>
                        <Text style={{ color: '#5C5D58', fontSize: 12, textAlign: 'center' }}>
                            {item.category}
                        </Text>
                    </View>
                    <Text style={{ color: '#13100D', fontSize: 13, marginTop: 5 }}>
                        {item.menu}
                    </Text>
                    <Text style={{ color: '#83867C', fontSize: 13, marginTop: 1 }}>
                        {item.serving}
                    </Text>
                </View>
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


                {onboardingSteps == 1 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Inventory</Text>}
                {onboardingSteps == 2 &&
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../../../../../assets/images/aiwhite.png')} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 5 }}>AI Scan</Text>
                    </View>}
                {onboardingSteps == 3 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Scanned Items</Text>}
                {onboardingSteps == 4 && <Text style={{ fontSize: 18, fontWeight: 'bold', color: ggStyles.textColor.color }}>Inventory</Text>}

                {onboardingSteps === 1 && <TouchableOpacity>
                    <MaterialIcons name="menu" size={25} color={'grey'} />
                </TouchableOpacity>}

                {onboardingSteps !== 1 && <TouchableOpacity>
                    <MaterialIcons name="all-inbox" size={25} color="transparent" />
                </TouchableOpacity>}
                {(onboardingSteps == 2 && onboardingSteps == 3) && <TouchableOpacity>
                    <Text style={{ color: 'transparent' }}>Skip</Text>
                </TouchableOpacity>}

            </View >
        )
    }

    const step1 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false} >
                <View style={[styles.sectionContainer, {
                    borderRadius: 16, padding: 5, backgroundColor: ggStyles.heroHeader.backgroundColor, flexDirection: 'row', alignItems: 'center'
                }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={[{}]}>
                        </View>
                        <Image source={require('../../../../../assets/images/heropic.jpg')} style={{ width: 80, height: 80, borderRadius: 12 }} resizeMode='cover' />
                    </View>

                    <View style={{}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{
                                fontSize: 12,
                                color: ggStyles.heroExpireHeader.color,
                                marginLeft: 10
                            }}>2 expiring</Text>
                            <TouchableOpacity>
                                <MaterialIcons name='close' size={14} color={ggStyles.subTextColor.color} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            marginTop: 3,
                            color: ggStyles.textColor.color,
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginLeft: 10
                        }}>Dont let them go to waste</Text>
                        <Text style={{
                            marginTop: 3,
                            color: ggStyles.subTextColor.color,
                            fontSize: 12,
                            fontWeight: 'bold',
                            marginLeft: 10,
                            width: '70%'
                        }}>Discover recipes made from expiring products</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ padding: 5, backgroundColor: Colors.light.btn, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Pantry {'(20)'}</Text>
                    </View>
                    <View style={{ padding: 10, borderRadius: 30, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: ggStyles.textColor.color }}>Fridge {'(20)'}</Text>
                    </View>
                    <View style={{ padding: 10, borderRadius: 30, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: ggStyles.textColor.color }}>Freezer {'(20)'}</Text>
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

            </ScrollView >
        )
    }

    const step2 = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <Image source={require('../../../../../assets/images/cameraprod.jpg')} resizeMode='cover' style={{ borderRadius: 30, height: '70%', width: '100%' }} />
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, color: 'white', textAlign: 'center' }}>Tap to scan</Text>
                    <TouchableOpacity onPress={() => setOnboardingSteps(onboardingSteps + 1)} style={{ backgroundColor: 'white', padding: 20, borderRadius: 40, marginTop: 20, alignSelf: 'center' }} >
                        <MaterialIcons name='center-focus-weak' color={'black'} size={30} />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    const step3 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 14, color: '#D2D4CD', }}>Pantry</Text>
                    <View style={[styles.itemContainer, { backgroundColor: '#44463F', borderWidth: 0 }]}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: 'white' }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="remove" size={20} color={'black'} />
                            </TouchableOpacity>
                            <Text style={[styles.servingsText, { color: '#EFF0ED' }]}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="add" size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.itemContainer, { backgroundColor: '#44463F', borderWidth: 0 }]}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: 'white' }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="remove" size={20} color={'black'} />
                            </TouchableOpacity>
                            <Text style={[styles.servingsText, { color: '#EFF0ED' }]}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="add" size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.itemContainer, { backgroundColor: '#44463F', borderWidth: 0 }]}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: 'white' }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="remove" size={20} color={'black'} />
                            </TouchableOpacity>
                            <Text style={[styles.servingsText, { color: '#EFF0ED' }]}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="add" size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.itemContainer, { backgroundColor: '#44463F', borderWidth: 0 }]}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: 'white' }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="remove" size={20} color={'black'} />
                            </TouchableOpacity>
                            <Text style={[styles.servingsText, { color: '#EFF0ED' }]}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="add" size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontSize: 14, color: '#D2D4CD', }}>Fridge</Text>
                    <View style={[styles.itemContainer, { backgroundColor: '#44463F', borderWidth: 0 }]}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: 'white' }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="remove" size={20} color={'black'} />
                            </TouchableOpacity>
                            <Text style={[styles.servingsText, { color: '#EFF0ED' }]}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="add" size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.itemContainer, { backgroundColor: '#44463F', borderWidth: 0 }]}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, { fontSize: 17, color: 'white' }]}>Banana</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="remove" size={20} color={'black'} />
                            </TouchableOpacity>
                            <Text style={[styles.servingsText, { color: '#EFF0ED' }]}>5pcs.</Text>
                            <TouchableOpacity style={{ borderRadius: 30, backgroundColor: '#83867C' }}>
                                <MaterialIcons name="add" size={20} color={'black'} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <MaterialIcons name="dehaze" size={20} color={'#83867C'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => {
                        ToastMessage('success', 'top', '20 items have been added');
                        setOnboardingSteps(onboardingSteps + 1)
                    }} style={[styles.addButton, { backgroundColor: 'white', padding: 15, marginTop: 30 }]}>
                        <Text style={[styles.buttonText, { color: 'black' }]}>Add to Inventory</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    const step4 = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false} >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <View style={{ padding: 5, backgroundColor: Colors.light.btn, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Pantry {'(20)'}</Text>
                    </View>
                    <View style={{ padding: 10, borderRadius: 30, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: ggStyles.textColor.color }}>Fridge {'(20)'}</Text>
                    </View>
                    <View style={{ padding: 10, borderRadius: 30, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: ggStyles.textColor.color }}>Freezer {'(20)'}</Text>
                    </View>

                </View>

                <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: 14,
                            color: ggStyles.subTextColor.color,

                        }}>Fruits</Text>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Text style={
                                {
                                    fontSize: 13,
                                    color: '#83867C',
                                    marginRight: 3
                                }
                            }>Sort by category</Text>
                            <MaterialIcons name={'keyboard-arrow-up'} color={'#83867C'} size={17} />
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.ingredientImageContainer}>
                            <Image source={require('../../../../../assets/images/banana.jpg')} resizeMode='cover' style={styles.ingredientImage} />
                            <Text style={[styles.ingredientName, {
                                fontSize: 17, color: ggStyles.textColor.color,
                            }]}>Banana</Text>
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
                    <Text style={{ fontSize: 14, color: ggStyles.subTextColor.color }}>Category - 4</Text>
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
                </View>
                <TouchableOpacity onPress={() =>{
                    ToastMessage('success','top','Products added to inventory')
                    nav.goBack()}} style={styles.addButton}>
                    <Text style={styles.buttonText}>Add Products</Text>
                </TouchableOpacity>
            </ScrollView >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: (onboardingSteps !== 1 && onboardingSteps !== 4) ? Colors.dark.background : ggStyles.basicContainer.backgroundColor }]}>
            {header()}
            {onboardingSteps === 1 && step1()}
            {onboardingSteps === 2 && step2()}
            {onboardingSteps === 3 && step3()}
            {onboardingSteps === 4 && step4()}
            {(!isSheetVisible && onboardingSteps !== 2 && onboardingSteps !== 3&& onboardingSteps !== 4) && <TouchableOpacity onPress={() => setOnboardingSteps(onboardingSteps + 1)}
                style={styles.floatingButton}
            // onPress={() => handleNext()}
            >
                {/* {onboardingSteps == 4 && <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.buttonText}>Add Products</Text>
                </TouchableOpacity>} */}
                <Image source={require('../../../../../assets/images/aiwhite.png')} />
            </TouchableOpacity>}
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {/* {onboardingSteps == 1 && popup1()} */}
                {/* {onboardingSteps == 2 && popup2()} */}
            </BottomSlider>
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
        borderWidth: 1,
        borderColor: '#A6A8A0',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    addButton: {
        backgroundColor: Colors.light.btn,
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
        flexDirection: 'row',
        width: '40%'
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
        // width: '35%',
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
        backgroundColor: Colors.dark.aiColor,
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
        borderBottomWidth: 1,
        padding: 5,
        borderBottomColor: '#E8EAE3'
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
        backgroundColor: '#E8EAE3',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginTop: 5
    }
});

export default InventoryPantry;