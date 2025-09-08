import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecipeCard from '../RecipeCard';
import CollectionCard from '../CollectionCard';
import EarnerHeader from '../EarnerHeader';
import LessonCard from '../LessonCard';
import EarnerBottomBar from '../EarnerBottomBar';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const ContentHome = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme states
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const handleslider = () => {
        setIsSheetVisible(false)
    }

    const addContent = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#333' : Colors.dark.text }]}>New Post</Text>
                    <TouchableOpacity style={[styles.addButton, { backgroundColor: Colors.dark.btn }]} >
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={[styles.optionText, { color: theme == 'light' ? '#333' : Colors.dark.text }]}>Schedule event</Text>
                    <TouchableOpacity onPress={() => { nav.navigate('newcontent'); setIsSheetVisible(false) }} style={[styles.addButton, { backgroundColor: Colors.dark.btn }]}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {!isSheetVisible && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}
            <EarnerHeader />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={{ padding: 8, borderRadius: 30, backgroundColor: Colors.dark.btn, width: '25%' }}>
                    <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>My content</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8, borderRadius: 30,  }}>
                    <Text style={{ color: ggStyles.textColor.color, fontSize: 12, textAlign: 'center' }}>Following</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 8, borderRadius: 30, }}>
                    <Text style={{ color: ggStyles.textColor.color, fontSize: 12, textAlign: 'center' }}>Community</Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.sectionContainer}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Collections</Text>
                        <Text style={[styles.subText]}>View all {'>'}</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/earnercookbook1.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/earnercookbook4.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/earnercookbook1.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Top Rated Recipes</Text>
                    <View style={styles.recipesContainer}>
                        <RecipeCard
                            title="Porridge"
                            rating={4.9}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook3.jpg')} // Replace with your image
                        />
                        <RecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook1.jpg')} // Replace with your image
                        />
                        <RecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook2.jpg')} // Replace with your image
                        />
                        <RecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/porridge.jpg')} // Replace with your image
                        />
                        {/* Add more RecipeCards here */}
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Lessons from you</Text>
                        <Text style={styles.subText}>View all {'>'}</Text>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <LessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                        <LessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                        <LessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.sectionTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>Recent</Text>
                        <Text style={styles.subText}>View all {'>'}</Text>
                    </View>
                    <View style={styles.recipesContainer}>
                        <RecipeCard
                            title="Porridge"
                            rating={4.9}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook2.jpg')} // Replace with your image
                        />
                        <RecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook4.jpg')} // Replace with your image
                        />
                        <RecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook3.jpg')} // Replace with your image
                        />
                        <RecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/earnercookbook1.jpg')} // Replace with your image
                        />
                    </View>
                </View>
            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {addContent()}
            </BottomSlider>
            <EarnerBottomBar where={'content'} />
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Light background color
    },
    sectionContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    recipesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    contentContainer: {
        padding: 20,
    },
    optionContainer: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        // borderBottomWidth: 1,
        paddingVertical: 5,
        borderBottomColor: '#E8EAE3'
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: '#A6A8A0',
        borderRadius: 30
    },
    optionsList: {
        marginTop: 10
    },
    subText: {
        fontSize: 15,
        color: Colors.light.btn,
        marginBottom: 10
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: Colors.dark.btn, // Blue background
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10
    },
});

export default ContentHome;