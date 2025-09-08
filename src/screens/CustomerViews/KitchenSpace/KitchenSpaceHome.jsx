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

const KitchenSpaceHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPopup, setAiPopup] = useState(false)

    const { theme, toggleTheme } = useTheme(); // Get theme state
    const styles = getStyles(theme)


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
                <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Kitchen Space</Text>
                <TouchableOpacity onPress={() => nav.navigate('kitchenspacecookbook')}>
                    <MaterialIcons name="menu-book" size={24} color="grey" />
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
                <Text style={[styles.sectionTitle, { marginHorizontal: 20, marginTop: 10 }]}>What would you like to cook today?</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <View style={styles.searchBar}>
                        <MaterialIcons name="search" size={24} color={'#9B9C96'} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Recipes"
                            placeholderTextColor={'#9B9C96'}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <MaterialIcons name="mic-none" size={24} color={'#9B9C96'} style={{ marginLeft: 'auto' }} />

                    </View>
                    <TouchableOpacity onPress={() => {
                        setAiPopup(false)
                        setIsSheetVisible(true)
                    }} style={{ backgroundColor: '#AE3BBE', borderRadius: 12, padding: 10 }}>
                        <Image
                            source={require('../../../../assets/images/aiwhite.png')}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Inventory</Text>
                    {/* <View style={styles.recipesContainer}> */}
                    <View style={{
                        backgroundColor: theme == 'light' ? '#f0f0f0' : '#141514',
                        padding: 20,
                        borderRadius: 16,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        flex: 1
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.3 }}>
                            <Text style={{ color: theme == 'light' ? '#13100D' : Colors.dark.text, fontSize: 12, fontWeight: '500', marginBottom: 3, textAlign: 'center' }}>70%</Text>
                            <View style={{ width: 30, height: 60, backgroundColor: theme == 'light' ? '#D9D9D9' : '#060504', borderRadius: 8 }} />
                            <View style={{ width: 30, height: 45, backgroundColor: Colors.light.btn, borderRadius: 8, top: 42, position: 'absolute' }} />
                            <Text style={{ color: theme == 'light' ? '#13100D' : Colors.dark.text, fontSize: 12, fontWeight: '500', marginBottom: 3, textAlign: 'center', marginTop: 5 }}>Loading</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.3 }}>
                            <Text style={{ color: theme == 'light' ? '#13100D' : Colors.dark.text, fontSize: 12, fontWeight: '500', marginBottom: 3, textAlign: 'center', }}>10%</Text>
                            <View style={{ width: 30, height: 60, backgroundColor: theme == 'light' ? '#D9D9D9' : '#060504', borderRadius: 8 }} />
                            <View style={{ width: 30, height: 10, backgroundColor: '#DB3A25', borderRadius: 8, top: 75, position: 'absolute' }} />
                            <Text style={{ color: theme == 'light' ? '#13100D' : Colors.dark.text, fontSize: 12, fontWeight: '500', marginBottom: 3, textAlign: 'center', marginTop: 5 }}>Thrown</Text>
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 15 }}>
                            <MaterialIcons name="signal-cellular-alt" size={20} color="#83867C" />

                            <Text style={{ color: '#83867C', fontSize: 12, marginTop: 5 }}>
                                Over the last month you managed to reduce the number of wasted products by 2 times
                            </Text>
                            <TouchableOpacity style={{ backgroundColor: '#AE3BBE', borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 2, marginTop: 5 }}>
                                <Image
                                    source={require('../../../../assets/images/aiwhite.png')}
                                />
                                <Text style={{ fontSize: 12, color: 'white', marginLeft: 5 }}>AI Suggestions</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[styles.sectionContainer, { borderWidth: 1, borderRadius: 16, borderColor: theme === 'light' ? '#E8EAE3' : '#32332E', padding: 10, }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: theme === 'light' ? '#13100D' : 'white',
                        }}>
                            All products
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'black',
                                marginRight: 10
                            }}>60 items</Text>
                            <MaterialIcons name={'add'} color={Colors.light.btn} size={20} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.insideSmallDetailViews}>
                            <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center' }}>6 expired</Text>
                        </View>
                        <View style={[styles.insideSmallDetailViews, { marginLeft: 15 }]}>
                            <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center', }}>9 expiring soon</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => nav.navigate('customerinventorypantry')} style={[styles.sectionContainer, { borderRadius: 16, borderColor: theme === 'light' ? '#E8EAE3' : '#32332E', borderWidth: 1, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Pantry</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: theme == 'light' ? Colors.light.text : Colors.dark.text, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity>
                                    <MaterialIcons name={'menu'} color={Colors.light.btn} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514" }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center' }}>2 expired</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514", marginLeft: 15 }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center', }}>3 expiring soon</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('customerinventorypantry')} style={[styles.sectionContainer, { borderRadius: 16, borderColor: theme === 'light' ? '#E8EAE3' : '#32332E', borderWidth: 1, padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Pantry</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: theme == 'light' ? Colors.light.text : Colors.dark.text, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity>
                                    <MaterialIcons name={'menu'} color={Colors.light.btn} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514" }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center' }}>2 expired</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514", marginLeft: 15 }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center', }}>3 expiring soon</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/aipurple.png')} />
                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>From expiring products</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/kitchenspacepic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/customerhomepic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/bread.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/aipurple.png')} />
                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>From products on your kitchen</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
                    <View style={styles.recipesContainer}>
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.9}
                            likes={120}
                            imageSource={require('../../../../assets/images/kitchenspacepic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/bread.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/kitchenspacepic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/customerhomepic.jpg')} // Replace with your image
                        />
                    </View>
                    {/* Add more CollectionCards here */}
                    {/* </ScrollView> */}
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/aipurple.png')} />
                            <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Cook what you enjoyed recently</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/kitchenspacepic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/customerhomepic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
                </View>

            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {aiPopup ? aiSlider() : searchSlider()}
            </BottomSlider>
            <CustomerBottomBar where={'kitchenspace'} />
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
        color: Colors.light.btn,
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
        // flex: 1,
        width: '65%',
        marginLeft: 10,
    },
    insideSmallDetailViews: {
        backgroundColor: theme == 'light' ? '#E8EAE3' : "#141514",
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginTop: 5
    }
});

export default KitchenSpaceHome;