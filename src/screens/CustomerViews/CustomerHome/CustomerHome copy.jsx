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
import CustomerHeader from './CustomerHeader';
import CustomerBottomBar from './CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
import CollectionCard from './CollectionCard';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const CustomerHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const handleslider = () => {
        setIsSheetVisible(false)
    }

    const addCustomerShoppingList = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create Shopping List</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => { nav.navigate('newshoppinglist'); setIsSheetVisible(false) }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Replenish the pantry</Text>
                    <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create Event</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create recipe</Text>
                    <TouchableOpacity style={styles.addButton}>
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
            <CustomerHeader />

            <ScrollView showsVerticalScrollIndicator={false} style={{}} >
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
                    <TouchableOpacity onPress={() => nav.navigate('aidesire')} style={{ backgroundColor: '#AE3BBE', borderRadius: 12, padding: 10 }}>
                        <Image
                            source={require('../../../../assets/images/aiwhite.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.sectionTitle}>Daily suggestions</Text>
                        {/* <Text style={styles.subText}>View all {'>'}</Text> */}
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/customerhomepic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/customerhomepic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
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
                        <Text style={styles.sectionTitle}>Shopping lists</Text>
                        <Text style={styles.subText}>View all {'>'}</Text>
                    </View>

                    <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')} style={[styles.sectionContainer, { borderRadius: 16, padding: 10, backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Smart List</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: theme == 'light' ? Colors.light.text : Colors.dark.text, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
                                    <MaterialIcons name={'menu'} color={Colors.light.btn} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514" }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center' }}>23 March</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')} style={[styles.sectionContainer, { borderRadius: 16, padding: 10, backgroundColor: theme == 'light' ? '#F3FAEB' : '#131B0E' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Family dinner</Text>
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

                    <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')} style={[styles.sectionContainer, { borderRadius: 16, backgroundColor: theme == 'light' ? '#F3FAEB' : '#131B0E', padding: 10 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Weekly</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 15,
                                    color: theme == 'light' ? Colors.light.text : Colors.dark.text, marginRight: 10
                                }}>20 items</Text>
                                <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
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

                <View style={[styles.sectionContainer, { paddingBottom: 40 }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.sectionTitle}>Upcoming events</Text>
                        <Text style={styles.subText}>View all {'>'}</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={[styles.sectionContainer, { borderRadius: 16, borderWidth: 1, borderColor: theme === 'light' ? '#E8EAE3' : '#32332E', padding: 10, width: width / 1.5 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: theme === 'light' ? '#13100D' : 'white',
                                }}>Son's BD</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
                                        <MaterialIcons name={'menu'} color={Colors.light.btn} size={20} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514" }]}>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center' }}>23 March 12pm</Text>
                                </View>
                                <View style={[styles.insideSmallDetailViews, { backgroundColor: theme == 'light' ? '#D2D4CD' : "#141514", marginLeft: 15 }]}>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? 'black' : '#D2D4CD', textAlign: 'center' }}>Home</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.sectionContainer, { borderRadius: 16, borderWidth: 1, borderColor: theme === 'light' ? '#E8EAE3' : '#32332E', padding: 10, width: width / 1.5 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: theme === 'light' ? '#13100D' : 'white',
                                }}>Son's BD</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
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
                        </View>

                        <View style={[styles.sectionContainer, { borderRadius: 16, borderWidth: 1, borderColor: theme === 'light' ? '#E8EAE3' : '#32332E', padding: 10, width: width / 1.5 }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: theme === 'light' ? '#13100D' : 'white',
                                }}>Weekly</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
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
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {addCustomerShoppingList()}
            </BottomSlider>
            <CustomerBottomBar where={'home'} />
        </SafeAreaView >
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
        // borderBottomWidth: 1,
        padding: 5,
        // borderBottomColor: '#E8EAE3'
    },
    optionText: {
        fontSize: 16,
        color: gg.subTextColor.color,
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: Colors.dark.btn,
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
        width: '65%',

        // flex: 1,
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
    },
    // icon: {
    //     color: theme == 'light' ? '#F6F7F4' : '#9B9C96'
    // }
});

export default CustomerHome;