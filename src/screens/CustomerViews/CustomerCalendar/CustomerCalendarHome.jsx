import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Dimensions,
    TextInput,
} from 'react-native';
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomerBottomBar from '../CustomerHome/CustomerBottomBar';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../routes/ThemeContext';
import { Colors } from '../../../../constants/Colors';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
const { width, height } = Dimensions.get('window');

const CustomerCalendarHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const [searchQuery, setSearchQuery] = useState('');


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

    const calendarAdd = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create Event</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        // nav.navigate('aiscan')
                        setIsSheetVisible(false)
                    }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create Shopping List</Text>
                    <TouchableOpacity onPress={() => {
                        setIsSheetVisible(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Book Event</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('calendareventshome')
                        setIsSheetVisible(false)
                    }} style={styles.addButton}>
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
                    {/* <TouchableOpacity onPress={() => nav.navigate('schedulesetting')}>
                        <MaterialIcons name='calendar-month' size={25} color={'grey'} style={{ marginRight: 10 }} />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => nav.navigate('calendarnotification')} >
                        <MaterialIcons name="notifications" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {!isSheetVisible && <TouchableOpacity
                style={[styles.floatingButton, { backgroundColor: Colors.dark.btn }]}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}
            {Header()}

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20, }}>
                {/* <TouchableOpacity style={[{ width: '100%', borderRadius: 16, backgroundColor: '#141514', padding: 20, alignItems: 'center', flexDirection: "row" }]}>
                    <Image
                        source={require('../../../../assets/images/calendarnew.png')} />
                    <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>
                        You have 2 new requests for booking
                    </Text>
                </TouchableOpacity> */}
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={24} color={'#9B9C96'} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search events"
                        placeholderTextColor={'#9B9C96'}

                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <MaterialIcons name="mic-none" size={24} color={'#9B9C96'} style={{ marginLeft: 'auto' }} />

                    {/* <TouchableOpacity onPress={() => {
                                        nav.navigate('aidesire')
                                    }}>
                                        <Image
                                            source={require('../../../../assets/images/ai.png')}
                                        />
                                    </TouchableOpacity> */}
                </View>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {calendarDate.map((item, index) => (
                        CalendarDateComponent(item, index)
                    ))}
                </ScrollView>

                <View style={[{ marginTop: 15, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#E8EAE3', paddingBottom: 15 }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 30 }}>
                        <Text style={[{ color: 'black', fontSize: 15, textDecorationLine: 'underline' }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.selectedText }]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 30, marginLeft: 12 }}>
                        <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 15 }}>Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 30, marginLeft: 12 }}>
                        <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 15 }}>Learning</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 8, borderRadius: 30, marginLeft: 12 }}>
                        <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 15 }}>Shopping</Text>
                    </TouchableOpacity>
                </View>

                <View style={[{ marginTop: 15, paddingBottom: 50 }, { color: theme == 'light' ? Colors.light.selectedText : Colors.dark.text }]}>
                    <Text style={{ fontSize: 13, color: theme == 'light' ? '#83867C' : Colors.dark.text, fontWeight: '600' }}>Today</Text>


                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: theme === 'light' ? '#FEFCE8' : '#26200B', padding: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Son's BD</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
                                    <MaterialIcons name={'menu'} color={theme == 'light' ? '#884F0B' : "#EFB903"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#884F0B' : "#EFB903", textAlign: 'center' }}>April 1</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews, { marginLeft: 15 }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#884F0B' : "#EFB903", textAlign: 'center', }}>5:30pm</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews, { marginLeft: 15 }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#884F0B' : "#EFB903", textAlign: 'center', }}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ borderRadius: 16, backgroundColor: theme == 'light' ? '#F3FAEB' : '#131B0E', padding: 10, marginTop: 15 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',

                            }}>Weekly</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableOpacity>
                                    <MaterialIcons name={'menu'} color={theme == 'light' ? '#385420' : "#8AC44F"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#385420' : "#8AC44F", textAlign: 'center' }}>April 1 18:00</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#385420' : "#8AC44F", textAlign: 'center', }}>Online</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={[{ borderRadius: 16, backgroundColor: theme === 'light' ? '#F6F7F4' : '#141514', padding: 10, marginTop: 15 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',

                            }}>Homemade bread</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableOpacity>
                                    <MaterialIcons name={'menu'} color={theme == 'light' ? '#5C5D58' : "#D2D4CD"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : "#D2D4CD", textAlign: 'center' }}>April 1</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : "#D2D4CD", textAlign: 'center' }}>5:30 pm</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : "#D2D4CD", textAlign: 'center', }}>Online</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 13, color: theme == 'light' ? '#83867C' : Colors.dark.text, fontWeight: '600', marginTop: 20 }}>Tommorrow</Text>

                    <TouchableOpacity style={[{ borderRadius: 16, backgroundColor: theme === 'light' ? '#F6F7F4' : '#141514', padding: 10, marginTop: 15 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',

                            }}>Picnic</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableOpacity>
                                    <MaterialIcons name={'menu'} color={theme == 'light' ? '#5C5D58' : "#D2D4CD"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : "#D2D4CD", textAlign: 'center' }}>April 1</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : "#D2D4CD", textAlign: 'center' }}>4:00 pm</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : "#D2D4CD", textAlign: 'center', }}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ borderRadius: 16, backgroundColor: theme == 'light' ? '#F3FAEB' : '#131B0E', padding: 10, marginTop: 15 }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',

                            }}>Family dinner</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableOpacity>
                                    <MaterialIcons name={'menu'} color={theme == 'light' ? '#385420' : "#8AC44F"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#385420' : "#8AC44F", textAlign: 'center' }}>25 March 18:00</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#385420' : "#8AC44F", textAlign: 'center', }}>Online</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: theme === 'light' ? '#FEFCE8' : '#26200B', padding: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: theme === 'light' ? '#13100D' : 'white',
                            }}>Party Son's BD</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <TouchableOpacity onPress={() => nav.navigate('customerinventoryShoppinglist')}>
                                    <MaterialIcons name={'menu'} color={theme == 'light' ? '#884F0B' : "#EFB903"} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.insideSmallDetailViews,]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#884F0B' : "#EFB903", textAlign: 'center' }}>23 March 12:00</Text>
                            </View>
                            <View style={[styles.insideSmallDetailViews, { marginLeft: 15 }]}>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#884F0B' : "#EFB903", textAlign: 'center', }}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {calendarAdd()}
            </BottomSlider>
            <CustomerBottomBar where={'calendar'} />
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
        color: 'black',
        marginBottom: 10
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
        color: theme === 'light' ? Colors.light.text : Colors.dark.text,
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
        backgroundColor: "#E8EAE3",
        borderRadius: 16,
        width: '85%',
        padding: 10,
        height: height / 6,
    },
    insideSmallDetailViews: {
        // backgroundColor: theme == 'light' ? '#E8EAE3' : "#141514",
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginTop: 5
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#f5f5f5',
        // marginHorizontal: 15,
        borderRadius: 8,
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#141514',

    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
});

export default CustomerCalendarHome;