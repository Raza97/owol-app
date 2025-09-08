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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PantryCard from './InventoryCard';
import AiTipsBanner from './AiTipsBanner';
import ShoppingCard from './ShoppingCard';
import Typhography from '../../../components/Typhography';

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

    const MultiSegmentBar = ({ fresh, expiring, expired }) => {
        const total = fresh + expiring + expired || 1; // Prevent division by zero

        const freshPercent = (fresh / total) * 100;
        const expiringPercent = (expiring / total) * 100;
        const expiredPercent = (expired / total) * 100;

        return (
            <View style={styles.multiProgressBarContainer}>
                <View style={[styles.barSegment, { width: `${freshPercent}%`, backgroundColor: '#4caf50' }]} />
                <View style={[styles.barSegment, { width: `${expiringPercent}%`, backgroundColor: '#ffa726' }]} />
                <View style={[styles.barSegment, { width: `${expiredPercent}%`, backgroundColor: '#ef5350' }]} />
            </View>
        );
    };

    const handleInventoryClick = () => {
        nav.navigate('customerinventorypantry');
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme === 'light' ? 'white' : Colors.dark.background, flex: 1 }]}>
            <CustomerHeader />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                <Typhography size={20}>What would you like to cook today?</Typhography>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ paddingBottom: 30 }} // <- prevents content from being hidden by bottom bar
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingHorizontal: 2 }}>
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
                    <TouchableOpacity onPress={() => nav.navigate('aidesire')} style={{ backgroundColor: '#AE3BBE', borderRadius: 12, padding: 10, marginLeft: 8 }}>
                        <Image source={require('../../../../assets/images/aiwhite.png')} />
                    </TouchableOpacity>
                </View>

                {/* Daily Suggestions */}
                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typhography size={16} style={styles.sectionTitle}>Daily suggestions</Typhography>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {/* Cards */}
                        <CollectionCard title="Time to cook" imageSource={require('../../../../assets/images/time-to-cook.png')} recipeCount={25} />
                        <CollectionCard title="Smart Shopping List" imageSource={require('../../../../assets/images/time-to-cook.png')} recipeCount={25} />
                        <CollectionCard title="Seasonal Salads" imageSource={require('../../../../assets/images/time-to-cook.png')} recipeCount={25} />
                    </ScrollView>
                </View>

                {/* Inventory */}
                <Typhography size={20} style={styles.header}>Inventory</Typhography>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Typhography size={14} style={styles.loadingLabel}>Loading</Typhography>
                        <Typhography size={16} style={styles.loadingPercent}>78%</Typhography>
                    </View>
                    <MultiSegmentBar fresh={50} expiring={2} expired={3} />
                    <View style={styles.statusRow}>
                        <Typhography size={14} style={styles.status}><Icon name="leaf" size={16} color="green" /> 50 fresh</Typhography>
                        <Typhography size={14} style={styles.status}><Icon name="clock-outline" size={16} color="orange" /> 2 expiring</Typhography>
                        <Typhography size={14} style={styles.status}><Icon name="alert-circle" size={16} color="red" /> 3 expired</Typhography>
                    </View>
                </View>

                {[
                    { name: 'Pantry', percent: 70, fresh: 20, expiring: 2, expired: 1, added: 4, displayGradiant: true },
                    { name: 'Fridge', percent: 87, fresh: 18, expiring: 0, expired: 0, displayGradiant: false },
                    { name: 'Freezer', percent: 49, fresh: 12, expiring: 0, expired: 3, displayGradiant: false },
                ].map((item, index) => (
                    <PantryCard key={index} item={item} 
                        onMenuPress={() => console.log('Menu tapped')}
                        handleClick={handleInventoryClick}  />
                ))}

                <AiTipsBanner />

                {/* Shopping Lists */}
                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typhography size={16} style={styles.sectionTitle}>Shopping lists</Typhography>
                        <Typhography size={12} style={styles.subText}>View all {'>'}</Typhography>
                    </View>
                    {['Weekly', 'Family Dinner', 'Party'].map(item => (
                        <ShoppingCard key={item} title={item} onPress={() => nav.navigate('customerinventoryShoppinglist')} style={{ marginVertical: 5 }} />
                    ))}
                </View>
            </ScrollView>

            {/* Floating Button (outside scroll to stay fixed) */}
            {!isSheetVisible && (
                <TouchableOpacity
                    style={styles.floatingButton}
                    onPress={() => setIsSheetVisible(true)}
                >
                    <MaterialIcons name="add" size={30} color="white" />
                </TouchableOpacity>
            )}

            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {addCustomerShoppingList()}
            </BottomSlider>

            <CustomerBottomBar where={'home'} />
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
        marginHorizontal: 10,
    },
    sectionTitle: {
        // fontSize: 18,
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
        bottom: 100,         // Adjust as needed based on BottomBar height
        right: 20,
        backgroundColor: Colors.dark.btn,
        borderRadius: 50,
        padding: 12,         // Slightly larger for better touch target
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,        // Boost elevation for Android overlap
        zIndex: 999,         // Maximize stacking priority (in case of overlays)
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#141514',
        // marginHorizontal: 15,
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
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        // fontSize: 20,
        fontWeight: '700',
        marginVertical: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loadingLabel: {
        // fontSize: 14,
        // color: '#444',
    },
    loadingPercent: {
        fontWeight: 'bold',
        // fontSize: 16,
    },
    progressBar: {
        height: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    statusRow: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flex:1
    },
    status: {
        // fontSize: 15,
        // color: '#333',
        textAlign: 'center',
        alignItems: 'center',
    },
    categoryCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
        elevation: 1,
    },
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: (percent) => ({
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: percent > 75 ? '#d4fcd7' : percent > 50 ? '#fff9db' : '#ffe5e5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    }),
    circleText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    categoryTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    categoryDetails: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        gap: 8,
    },
    newTag: {
        backgroundColor: '#a259ff',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 'auto',
    },
    newText: {
        color: '#fff',
        fontSize: 12,
    },
    aiCard: {
        backgroundColor: '#f3e8ff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 16,
    },
    aiText: {
        fontSize: 14,
        color: '#555',
    },
    smartList: {
        backgroundColor: '#f6f0ff',
        borderRadius: 10,
        padding: 14,
        marginBottom: 10,
    },
    weeklyList: {
        backgroundColor: '#e9ffe6',
        borderRadius: 10,
        padding: 14,
        marginBottom: 30,
    },
    smartText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    subText: {
        fontSize: 12,
        color: '#555',
    },
    multiProgressBarContainer: {
        flexDirection: 'row',
        height: 30,
        width: '100%',
        borderRadius: 6,
        overflow: 'hidden',
        backgroundColor: '#eee',
        marginTop: 10,
        marginBottom: 10,
    },
    barSegment: {
        height: '100%',
    },
    // icon: {
    //     color: theme == 'light' ? '#F6F7F4' : '#9B9C96'
    // }
});

export default CustomerHome;