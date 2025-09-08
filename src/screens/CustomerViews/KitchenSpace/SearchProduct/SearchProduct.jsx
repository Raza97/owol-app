import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ToastMessage from '../../../../../utlis/ToastMessage';
const { width, height } = Dimensions.get('window');
import { useTheme } from '../../../../routes/ThemeContext';
import { Colors } from '../../../../../constants/Colors';


const SearchProduct = () => {
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    const styles = getStyles(theme)
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProduct, setSelectedProduct] = useState([])

    const productList = [
        { id: 1, name: 'Banana', amt: 1 },
        { id: 2, name: 'Banana', amt: 1 },
        { id: 3, name: 'Banana', amt: 1 },
        { id: 4, name: 'Banana', amt: 1 },
        { id: 5, name: 'Banana', amt: 1 },
        { id: 6, name: 'Banana', amt: 1 },
        { id: 7, name: 'Banana', amt: 1 },
        { id: 8, name: 'Banana', amt: 1 },
        { id: 9, name: 'Banana', amt: 1 },
    ]

    const productComponent = (item) => {
        return (
            <TouchableOpacity style={{ borderRadius: 12, overflow: 'hidden', borderRadius: 12, borderWidth: 1, borderColor: '#A6A8A0', margin: 5, alignSelf: 'center', marginHorizontal: 15 }} key={item.id} onPress={() => {
                setSelectedProduct([...selectedProduct, item.id])
            }}>

                <View style={{ marginHorizontal: 10, width: width/3.1 }}>
                    {selectedProduct.includes(item.id) ?
                        <TouchableOpacity style={{ left: 100, position: 'absolute', zIndex: 10, top: 10 }}>
                            <MaterialIcons name='radio-button-checked' size={20} color={'black'} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ left: 100, position: 'absolute', zIndex: 10, top: 10 }}>
                            <MaterialIcons name='radio-button-unchecked' size={20} color={'black'} />
                        </TouchableOpacity>
                    }
                    <Image source={require('../../../../../assets/images/banana.jpg')} style={{ width: '100%', height: height / 9 }} resizeMode='cover' />
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: '#13100D', fontSize: 14, fontWeight: '600', textAlign: 'center' }}>
                            {item.name}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#A6A8A0', padding: 2, borderRadius: 30 }}>
                                <MaterialIcons name='add' color={'white'} size={12} />
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={{ color: '#13100D', fontSize: 13, marginTop: 5, textAlign: 'center', fontWeight: '600' }}>
                                    {item.amt}
                                </Text>
                                <Text style={{ color: '#A6A8A0', fontSize: 13, marginTop: 5, textAlign: 'center' }}>
                                    pc(s)
                                </Text>
                            </View>
                            <View style={{ backgroundColor: '#A6A8A0', padding: 2, borderRadius: 30 }}>
                                <MaterialIcons name='remove' color={'white'} size={12} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }

    const header = () => {
        return (
            <View style={styles.header}>

                {onboardingSteps === 1 && <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={25} color="black" />
                </TouchableOpacity>}

                {onboardingSteps === 2 && <TouchableOpacity onPress={() => setOnboardingSteps(onboardingSteps - 1)}>
                    <MaterialIcons name="close" size={25} color="black" />
                </TouchableOpacity>}


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Image source={require('../../../../../assets/images/aiwhite.png')} /> */}
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 5 }}>Search product</Text>
                </View>

                <TouchableOpacity>
                    <Text style={{ color: 'transparent' }}>Skip</Text>
                </TouchableOpacity>
            </View >
        )
    }

    const Search = () => {
        return (
            <ScrollView style={{ marginHorizontal: 20 }}>
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={24} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Recipes"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity onPress={() => {
                        setAiPopup(false)
                        setIsSheetVisible(true)
                    }}>
                        <MaterialIcons name="close" size={24} />
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, }}>
                        <TouchableOpacity>
                            <Text style={[styles.headingbtn, { backgroundColor: '#44463F', color: 'white' }]}>Fruits</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Bakery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Your choice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Vegetables</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Vegetables</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Vegetables</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Vegetables</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.headingbtn}>Vegetables</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {productList.map((item, index) => (
                        productComponent(item)
                    )
                    )}
                </View>
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]}>
            {header()}
            {Search()}
        </SafeAreaView>

    )

}

const getStyles = (theme) => StyleSheet.create({
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
        borderColor: '#E8EAE3',
        borderWidth: 1,
        borderRadius: 16,
        marginTop: 10
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: 'black',
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
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 2,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 15,
        borderRadius: 8
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    headingbtn: {
        fontSize: 14,
        color: theme == 'light' ? "#5C5D58" : Colors.dark.text,
        padding: 7,
        marginHorizontal: 5,
        borderRadius: 30
    }
});

export default SearchProduct;