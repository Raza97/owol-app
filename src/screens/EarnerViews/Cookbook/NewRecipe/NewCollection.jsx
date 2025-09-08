import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../../constants/Colors';
import { useTheme } from '../../../../routes/ThemeContext';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
const NewCollection = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    const [title, setTitle] = useState('');
    const [aboutRecipe, setAboutRecipe] = useState('');
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const header = () => {
        return (
            <View style={styles.header}>


                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color={theme == 'light' ? '"#13100D"' : Colors.dark.text} />
                </TouchableOpacity>


                <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>New Collection</Text>

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

    const form = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingBottom: 20 }}>
                <View style={styles.timeContainer}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderRadius: 16, alignSelf: 'center', width: 120, height: 120, backgroundColor: ggStyles.greenBg.backgroundColor }}>
                        <Image source={require('../../../../../assets/placeholders/placeholdergreen.png')} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={[styles.label, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Title*</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter name"
                            placeholderTextColor={"#A6A8A0"}
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={[styles.label, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>About collection</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Briefly describe what makes it special.."
                            placeholderTextColor={"#A6A8A0"}
                            multiline
                            numberOfLines={4}
                            value={aboutRecipe}
                            onChangeText={setAboutRecipe}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Recipes</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: ggStyles.greenBg.backgroundColor, borderRadius: 8, width: 166, height: 216 }}>
                            {theme == 'light' ?
                                <Image source={require('../../../../../assets/images/dish.png')} />
                                : <Image source={require('../../../../../assets/images/dishwhite.png')} />}
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            {form()}
        </SafeAreaView>
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
        backgroundColor: '#EFF0ED',
        borderRadius: 16,
        padding: 20
    },
    timeLabel: {
        marginRight: 5,
        fontSize: 15,
        color: 'black',
        fontWeight: '500'
    },
    timeValue: {
        // width: 100,
        paddingLeft: 20,
        fontSize: 13,
        color: 'black',
        // borderLeftColor: '#D2D4CD',
        // borderLeftWidth: 1
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#44463F',
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
        backgroundColor: '#13100D',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    input: {
        backgroundColor: theme == 'light' ? 'white' : Colors.dark.background,
        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
        borderWidth: 1,
        borderColor: '#79B939',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    inputContainer: {
        marginBottom: 20,
    },
    difficultyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: 'black',
        fontWeight: '600'
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
        backgroundColor: '#EFF0ED',
        padding: 15,
        width: '100%',
        height: 200,
    }
})

export default NewCollection;