import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors } from '../../../../../constants/Colors';
import { useTheme } from '../../../../routes/ThemeContext';

const { width, height } = Dimensions.get('window');


const PreviewScreen = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    const styles = getStyles(theme);
    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color={theme == 'light' ? "#13100D" : 'white'} />
                </TouchableOpacity>
                <Text style={[styles.sectionTitle, { marginTop: 10, color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Preview</Text>
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>
                <Image source={require('../../../../../assets/images/porridge.jpg')} resizeMode='cover' style={styles.ingredientImage} />

                <Text style={[styles.sectionTitle, { marginTop: 15, }]}>Peach and Cardamom Porridge</Text>
                <Text style={styles.description}>
                    Warm up this autumn with creamy, cardamom porridge topped with roasted peaches and toasted almond flakes.
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E8EAE3', borderBottomWidth: 1, padding: 12, }}>
                    <Text style={[styles.headingbtn, { backgroundColor: Colors.light.btn, color: 'white' }]}>Recipes</Text>
                    <Text style={styles.headingbtn}>Ingredients</Text>
                    <Text style={styles.headingbtn}>Nutrition</Text>
                </View>


                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>1</Text>
                    <Text style={styles.text}>Cut the peaches in halve, remove the stones and then cut into cubes roughly an inch wide</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>2</Text>
                    <Text style={styles.text}>Place them in the centre of a hot oven (200C), and cook for 10-15 minutes or until the juices have begun to caramelise and the fruit is soft</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>3</Text>
                    <Text style={styles.text}>Turn the oven down low while you cook the porridge</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>3</Text>
                    <Text style={styles.text}>In a milk pan, stir the oats into the milk</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>4</Text>
                    <Text style={styles.text}>Toasted almond flakes for topping</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>5</Text>
                    <Text style={styles.text}>Slowly bring the milk to the boil stirring frequently</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>6</Text>
                    <Text style={styles.text}>Let the milk simmer for 5 minutes or until the oats have swollen and the milk thickened</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>7</Text>
                    <Text style={styles.text}>Take the porridge off the heat and pour into two bowls</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>8</Text>
                    <Text style={styles.text}>Stir a tablespoon of cardamom infused milk into each bowl</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>9</Text>
                    <Text style={styles.text}>Top each bowl with half of the peaches</Text>
                </View>
                <View style={styles.stepContainer}>
                    <Text style={styles.stepNum}>10</Text>
                    <Text style={styles.text}>Sprinkle with toasted almonds to finish.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 18
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 13,
        marginBottom: 16,
        color: theme == 'light' ? '#44463F' : Colors.dark.text
        // fontWeight:'300',
    },
    sectionTitle: {
        color: theme == 'light' ? 'black' : Colors.dark.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        flex: 1,
        fontSize: 14,
        marginBottom: 8,
        color: theme == 'light' ? '#13100D' : Colors.dark.text
    },
    note: {
        fontSize: 16,
        marginTop: 16,
        fontStyle: 'italic',
    },
    ingredientImage: {
        width: '100%',
        height: height / 3,
        borderRadius: 16
    },
    headingbtn: {
        fontSize: 14,
        color: theme == 'light' ? "#5C5D58" : Colors.dark.text,
        padding: 10,
        borderRadius: 30
    },
    stepNum: {
        padding: 6,
        borderRadius: 30,
        // backgroundColor: '#E8EAE3',
        color: Colors.light.btn,
        fontSize: 14,
        marginRight: 20,
        textAlign: 'center',
        width: 30
        // flex: 0.09
    },
    stepContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'

    }
});

export default PreviewScreen;