import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import EarnerBottomBar from '../EarnerBottomBar';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../routes/ThemeContext';
import { Colors } from '../../../../constants/Colors';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const CalendarHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

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

    const addCookbook = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create new recipe</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => { nav.navigate('newrecipe'); setIsSheetVisible(false) }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create new collection</Text>
                    <TouchableOpacity onPress={() => { nav.navigate('newcollection'); setIsSheetVisible(false) }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create new lesson</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const Header = () => {
        return (
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={styles.greeting}>Calendar</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => nav.navigate('schedulesetting')}>
                        {/* <Image
                            source={require('../../../../assets/images/setting.png')}
                            style={{ marginRight: 10 }}
                        /> */}
                        <MaterialIcons name="settings" size={24} color="gray" style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('calendarnotification')} >
                        <MaterialIcons name="notifications" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
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
            <TouchableOpacity
                style={[styles.floatingButton]}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>
            {Header()}

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, }}>
                <TouchableOpacity style={[{ width: '100%', borderRadius: 16, backgroundColor: ggStyles.greenBg.backgroundColor, padding: 20, alignItems: 'center', flexDirection: "row" }]}>
                    <Image
                        source={require('../../../../assets/images/calendarnew.png')} />
                    <Text style={{ fontSize: 15, color: ggStyles.textColor.color, marginLeft: 10 }}>
                        You have 2 new requests for booking
                    </Text>
                </TouchableOpacity>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {calendarDate.map((item, index) => (
                        CalendarDateComponent(item, index)
                    ))}
                </ScrollView>

                <View style={[{ marginTop: 15, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: ggStyles.borderColor.borderColor, paddingBottom: 15 }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 30 }}>
                        <Text style={[{ color: 'black', fontSize: 15, textDecorationLine: 'underline' }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.selectedText }]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 30, marginLeft: 12 }}>
                        <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 15 }}>Requests</Text>
                    </TouchableOpacity>
                </View>

                <View style={[{ marginTop: 15, paddingBottom: 50 }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                    <Text style={{ fontSize: 13, color: '#83867C', fontWeight: '500' }}>Today</Text>
                    <View style={[styles.dateDetailContainer, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                        <Text style={{ fontSize: 13, color: '#83867C', marginRight: 5 }}>10 AM</Text>
                        <View style={[styles.dateDetails, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 13, color: '#83867C' }}>Class</Text>
                                    <Text style={{ fontSize: 13, color: '#83867C', marginLeft: 20 }}>Online</Text>
                                </View>
                                <Image
                                    source={require('../../../../assets/images/Avatar.png')}
                                    style={{ width: 20, height: 20, borderRadius: 30 }} />
                            </View>
                            <Text style={{ fontSize: 15, color: ggStyles.textColor.color, fontWeight: '500', marginTop: 10, marginLeft: 10 }}>Homemade Bread</Text>
                        </View>
                    </View>

                    <View style={[styles.dateDetailContainer, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                        <Text style={[{ fontSize: 13, color: '#83867C', marginRight: 5 }]}>12 PM</Text>
                        <View style={[styles.dateDetails, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10 }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 13, color: '#83867C' }}>Class</Text>
                                    <Text style={{ fontSize: 13, color: '#83867C', marginLeft: 20 }}>6837 Dibbert Junctions</Text>
                                </View>
                                <Image
                                    source={require('../../../../assets/images/Avatar.png')}
                                    style={{ width: 20, height: 20, borderRadius: 30 }} />
                            </View>
                            <Text style={{ fontSize: 15, color: ggStyles.textColor.color, fontWeight: '500', marginTop: 10, marginLeft: 10 }}>Perfect Steak</Text>
                        </View>
                    </View>
                    <View style={[styles.dateDetailContainer, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                        <Text style={[{ fontSize: 13, color: '#83867C', marginRight: 5 }]}>13 PM</Text>
                        <View style={[styles.dateDetails, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                            <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10 }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 13, color: '#83867C' }}>Class</Text>
                                    <Text style={{ fontSize: 13, color: '#83867C', marginLeft: 20 }}>Online</Text>
                                </View>
                                <Image
                                    source={require('../../../../assets/images/Avatar.png')}
                                    style={{ width: 20, height: 20, borderRadius: 30 }} />
                            </View>
                            <Text style={{ fontSize: 15, color: ggStyles.textColor.color, fontWeight: '500', marginTop: 10, marginLeft: 10 }}>Homemade Bread</Text>
                        </View>
                    </View>
                    <View style={[styles.dateDetailContainer, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                        <Text style={[{ fontSize: 13, color: '#83867C', marginRight: 5 }]}>10 AM</Text>
                        <View style={styles.dateDetails}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 13, color: '#83867C' }}>Class</Text>
                                    <Text style={{ fontSize: 13, color: '#83867C', marginLeft: 20 }}>Online</Text>
                                </View>
                                <Image
                                    source={require('../../../../assets/images/Avatar.png')}
                                    style={{ width: 20, height: 20, borderRadius: 30 }} />
                            </View>
                            <Text style={{ fontSize: 15, color: ggStyles.textColor.color, fontWeight: '500', marginTop: 10, marginLeft: 10 }}>Homemade Bread</Text>
                        </View>
                    </View>
                    <View style={[styles.dateDetailContainer, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                        <Text style={{ fontSize: 13, color: '#83867C', marginRight: 5 }}>10 AM</Text>
                        <View style={styles.dateDetails}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 13, color: '#83867C' }}>Class</Text>
                                    <Text style={{ fontSize: 13, color: '#83867C', marginLeft: 20 }}>Online</Text>
                                </View>
                                <Image
                                    source={require('../../../../assets/images/Avatar.png')}
                                    style={{ width: 20, height: 20, borderRadius: 30 }} />
                            </View>
                            <Text style={{ fontSize: 15, color: ggStyles.textColor.color, fontWeight: '500', marginTop: 10, marginLeft: 10 }}>Homemade Bread</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
            {/* <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {addCookbook()}
            </BottomSlider> */}
            <EarnerBottomBar where={'calendar'} />
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
        color: 'black',
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: gg.textColor.color
    },
    dateContainer: {
        padding: 10,
        borderRadius: 16,
        borderWidth: theme === 'light' ? 1 : 0,
        borderColor: '#E8EAE3',
        marginHorizontal: 10,
        marginTop: 20,
        width: 53
    },
    dateDetailContainer: {
        flexDirection: 'row',
        marginTop: 15
        // alignItems: 'baseline'
    },
    dateDetails: {
        backgroundColor: gg.profileHeroBg.backgroundColor,
        borderRadius: 16,
        width: '85%',
        padding: 10,
        height: height / 6,
    }
});

export default CalendarHome;