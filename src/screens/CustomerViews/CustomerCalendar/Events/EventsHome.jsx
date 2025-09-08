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
import BottomSlider from '../../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomerBottomBar from '../CustomerHome/CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
import CollectionCard from '../../CustomerHome/CollectionCard';
import CustomerRecipeCard from '../../CustomerRecipeCard';
import CustomerLessonCard from '../../CustomerLessonCard';
import CustomerEventCards from '../../CustomerEventCards';
const { width, height } = Dimensions.get('window');
import { useTheme } from '../../../../routes/ThemeContext';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
import { Colors } from '../../../../../constants/Colors';
const EventsHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPopup, setAiPopup] = useState(false)
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const handleslider = () => {
        setIsSheetVisible(false)
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
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={25} color="grey" />
                </TouchableOpacity>
                <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Events</Text>
                <TouchableOpacity>
                    <MaterialIcons name="filter-alt" size={24} color="grey" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* {!isSheetVisible && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>} */}
            {header()}

            <ScrollView showsVerticalScrollIndicator={false} style={{}} >

                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={24} color={'#9B9C96'} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search events"
                        placeholderTextColor={'#9B9C96'}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>


                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>

                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Seasonal and cultural events</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
                </View>

                <View style={[styles.sectionContainer]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>

                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Events from chef you follow</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                            callback={'eventdetails'}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                            callback={'eventdetails'}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                            callback={'eventdetails'}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>

                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Online master classes</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CustomerLessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                        <CustomerLessonCard
                            title="Homemade italian pasta"
                            imageSource={require('../../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                        <CustomerLessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>More events</Text>
                        </View>


                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <CustomerEventCards
                            title="Seafood Meals Master class"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            description='Chef Thomas Keller focuses on preparing fresh seafood like lobster and salmon'
                        />
                        <CustomerEventCards
                            title="Seafood Meals Master class"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            description='Chef Thomas Keller focuses on preparing fresh seafood like lobster and salmon'
                        />
                        <CustomerEventCards
                            title="Seafood Meals Master class"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            description='Chef Thomas Keller focuses on preparing fresh seafood like lobster and salmon'
                        />
                        <CustomerEventCards
                            title="Seafood Meals Master class"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            description='Chef Thomas Keller focuses on preparing fresh seafood like lobster and salmon'
                        />
                        <CustomerEventCards
                            title="Seafood Meals Master class"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            description='Chef Thomas Keller focuses on preparing fresh seafood like lobster and salmon'
                        />
                        <CustomerEventCards
                            title="Seafood Meals Master class"
                            imageSource={require('../../../../../assets/images/salad.jpg')} // Replace with your image
                            description='Chef Thomas Keller focuses on preparing fresh seafood like lobster and salmon'
                        />
                    </ScrollView>
                </View>


            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {aiPopup ? aiSlider() : searchSlider()}
            </BottomSlider>
            {/* <CustomerBottomBar where={'kitchenspace'} /> */}
        </SafeAreaView >
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:gg.basicContainer.backgroundColor
    },
    sectionContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:gg.textColor.color
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
        color: Colors.dark.btn,
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
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#141514',
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
    }
});

export default EventsHome;