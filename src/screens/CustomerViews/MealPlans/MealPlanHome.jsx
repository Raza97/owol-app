import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomerBottomBar from '../CustomerHome/CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
import CollectionCard from '../CustomerHome/CollectionCard';
import CustomerRecipeCard from '../CustomerRecipeCard';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';


const MealPlanHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPopup, setAiPopup] = useState(false)
    const { theme, toggleTheme } = useTheme(); // Get theme state

    const styles = getStyles(theme)

    const handleslider = () => {
        setIsSheetVisible(false)
    }

    const calendarDate = [
        { day: 'Mon', date: '07' },
        { day: 'Tue', date: '08' },
        { day: 'Wed', date: '09' },
        { day: 'Thu', date: '10' },
        { day: 'Fri', date: '11' },
        { day: 'Sat', date: '12' },
        { day: 'Sun', date: '13' },
    ]

    const CalendarDateComponent = (item, index) => {
        return (
            <TouchableOpacity key={index} style={[styles.dateContainer, { backgroundColor: item.day !== 'Wed' ? theme == 'light' ? '#F6F7F4' : '#141514' : '#FFD003' },]}>
                <Text style={{ fontSize: 15, color: item.day !== 'Wed' ? theme == 'light' ? '#83867C' : '#A6A8A0' : '#884F0B', textAlign: 'center' }}>{item.day}</Text>
                <Text style={{ color: item.day !== 'Wed' ? theme == 'light' ? '#44463F' : Colors.dark.text : '#13100D', fontSize: 15, textAlign: 'center' }}>{item.date}</Text>
            </TouchableOpacity >
        )
    }



    const searchSlider = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Search recipe from photo</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        nav.navigate('aiscan')
                        setIsSheetVisible(false)
                    }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Describe what you desire</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('aidesire')
                        setIsSheetVisible(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const aiSlider = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Add manually</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        nav.navigate('searchproduct')
                        setIsSheetVisible(false)
                        setAiPopup(false)
                    }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Scan Barcode</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('aibarcode')
                        setIsSheetVisible(false)
                        setAiPopup(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Ai scan</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('aiscan')
                        setIsSheetVisible(false)
                        setAiPopup(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const header = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 20,
            }}>
                <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Meal Plans</Text>
                <TouchableOpacity onPress={() => nav.navigate('kitchenspacecookbook')}>
                    <MaterialIcons name="menu-book" size={24} color="gray" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {/* {!isSheetVisible && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>} */}
            {header()}

            <ScrollView showsVerticalScrollIndicator={false} style={{}} >

                <View style={styles.sectionContainer}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                        {calendarDate.map((item, index) => (
                            CalendarDateComponent(item, index)
                        ))}
                    </ScrollView>

                    {/* <View style={styles.recipesContainer}> */}
                    <View style={{
                        alignItems: 'center',
                        // backgroundColor: '#f0f0f0',
                        padding: 20,
                        borderRadius: 16,
                        flex: 1,
                        marginTop: 10
                    }}>
                        {theme === 'light' ?
                            <Image
                                source={require('../../../../assets/images/makemealwhite.png')} style={{ width: 100, height: 100 }}
                            /> :
                            <Image
                                source={require('../../../../assets/images/makemealblack.png')} style={{ width: 100, height: 100 }}
                            />
                        }
                        <Text style={{ fontSize: 14, color: theme === 'light' ? '#13100D' : '#A6A8A0', fontWeight: '600', marginTop: 10 }}>Nothing coming up</Text>
                        <TouchableOpacity onPress={() => nav.navigate('mealplanhometwo')} style={{ padding: 10, backgroundColor: Colors.light.btn, borderRadius: 30, marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: 'white' }}>Make my meal plan</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/aipurple.png')} />
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>Meal plan suggestions</Text>
                        </View>


                    </View>
                    {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
                    <View style={styles.recipesContainer}>
                        <CustomerRecipeCard
                            title="High-protien diet"
                            rating={4}
                            likes={5}
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="High-protien diet"
                            rating={4}
                            likes={5}
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="High-protien diet"
                            rating={4}
                            likes={5}
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="High-protien diet"
                            rating={4}
                            likes={5}
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="High-protien diet"
                            rating={4}
                            likes={5}
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="High-protien diet"
                            rating={4}
                            likes={5}
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                        />
                    </View>
                    {/* Add more CollectionCards here */}
                    {/* </ScrollView> */}
                </View>



            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {searchSlider()}
            </BottomSlider>
            <CustomerBottomBar where={'mealplan'} />
        </SafeAreaView >
    );
};

const getStyles = (theme) => StyleSheet.create({
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
        color: theme == 'light' ? Colors.light.text : Colors.dark.text
    },
    recipesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        // marginHorizontal: 10
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
        borderBottomWidth: 1,
        padding: 5,
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
        color: '#44463F',
        // marginBottom: 10
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#44463F', // Blue background
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 15,
        borderRadius: 8
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
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
    dateContainer: {
        padding: 10,
        borderRadius: 16,
        borderWidth: theme === 'light' ? 1 : 0,
        borderColor: '#E8EAE3',
        marginHorizontal: 10,
        // marginTop: 20,
        width: 53
    },
});

export default MealPlanHome;