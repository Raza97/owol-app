import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ToastMessage from '../../../../../utlis/ToastMessage';
const { width, height } = Dimensions.get('window');
import { useTheme } from '../../../../routes/ThemeContext';
import { Colors } from '../../../../../constants/Colors';


const AiDesire = () => {
    const [onboardingSteps, setOnboardingSteps] = useState(1)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    const styles = getStyles(theme)
    const [searchQuery, setSearchQuery] = useState('');

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="close" size={25} color="white" />
                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../../../../assets/images/aiwhite.png')} />
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 5 }}>Describe Meal Plan</Text>
                </View>

                <TouchableOpacity>
                    <Text style={{ color: 'transparent' }}>Skip</Text>
                </TouchableOpacity>
            </View >
        )
    }

    const AIview = () => {
        return (
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: "#28142A", borderRadius: 16 }}>
                    <Image source={require('../../../../../assets/images/drool.png')} />
                    <Text style={{ color: "#D2D4CD", fontSize: 13, marginLeft: 5, textAlign: 'center', width: '80%' }}>Feel free to describe your desires. It could be ingredients you like or your favourite flavours</Text>
                </View>
                <View style={{ marginTop: 20, height: '50%' }}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Add your description"
                        placeholderTextColor={'#83867C'}
                        value={searchQuery}
                        multiline
                        onChangeText={setSearchQuery}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                    ToastMessage('success', 'top', 'Items successfully generated!');
                    nav.goBack()
                }} style={{ backgroundColor: '#AE3BBE', padding: 12, borderRadius: 30, marginTop: 20, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: '50%' }} >
                    <Image source={require('../../../../../assets/images/aiwhite.png')} style={{ alignSelf: 'center', }} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft: 3, textAlign: 'center', width: '70%' }}>Generate</Text>
                </TouchableOpacity>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: Colors.dark.background }]}>
            {header()}
            {AIview()}
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
    searchInput: {
        color: '#83867C',
        fontSize: 15
    }
});

export default AiDesire;