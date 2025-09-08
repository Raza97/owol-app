import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, Switch } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { useTheme } from "../../../../routes/ThemeContext";
import { Colors } from "../../../../../constants/Colors";
import useCustomerStyles from "../../../../../constants/GlobalCustomerStyles";
const { width, height } = Dimensions.get('window');

const ScheduleSettings = () => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const [selectedDays, setSelectedDays] = useState([]);
    const [sameTimeForAllDays, setSameTimeForAllDays] = useState(false);
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const [availableTimes, setAvailableTimes] = useState({
        Monday: '10:00 am - 18:00 pm',
        Tuesday: '14:00 am - 18:00 pm',
        Wednesday: '10:00 am - 15:00 pm',
        Saturday: '10:00 am - 18:00 pm',
    });

    const handleDaySelection = (day) => {
        if (selectedDays.includes(day)) {
            setSelectedDays(selectedDays.filter(d => d !== day));
        } else {
            setSelectedDays([...selectedDays, day]);
        }
    };

    const handleSameTimeToggle = () => {
        setSameTimeForAllDays(!sameTimeForAllDays);
        if (sameTimeForAllDays) {
            // Clear individual times
            setAvailableTimes({});
        } else {
            // Restore default times
            setAvailableTimes({
                Monday: '10:00 am - 18:00 pm',
                Tuesday: '14:00 am - 18:00 pm',
                Wednesday: '10:00 am - 15:00 pm',
                Saturday: '10:00 am - 18:00 pm',
            });
        }
    };

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>Schedule Settings</Text>
                {/* <View style={styles.progressIndicators}>
                    {renderProgressIndicators()}
                </View> */}
                <View><Text style={{ color: 'white' }}>Skip</Text></View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {header()}
            <View style={{ marginHorizontal: 20, height: '76%' }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center', width: '100%',
                    borderRadius: 30, backgroundColor: '#EFF0ED',
                    padding: 15
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: '600',
                        fontSize: 15
                    }} >Monthly scheduled</Text>
                    <Octicons name="chevron-down" size={20} color="black" />
                </View>
                <Text style={[styles.title, {
                    marginBottom: 10,
                    marginTop: 15,
                }]}>Available days</Text>
                <View style={styles.daysContainer}>
                    {daysOfWeek.map((day) => (
                        <TouchableOpacity
                            key={day}
                            style={[styles.dayButton, selectedDays.includes(day) && styles.selectedDay]}
                            onPress={() => handleDaySelection(day)}
                        >
                            <Text style={[styles.dayText, selectedDays.includes(day) && styles.selectedDayText]}>{day}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={styles.title}>Available time</Text>
                    <View style={styles.sameTimeContainer}>
                        <Text style={styles.sameTimeText}>Same time</Text>
                        <Switch value={sameTimeForAllDays} onValueChange={handleSameTimeToggle} />
                    </View>
                </View>
                <View style={styles.timeContainer}>
                    {Object.entries(availableTimes).map(([day, time]) => (
                        <View key={day} style={[styles.timeRow, { borderBottomWidth: day !== 'Saturday' ? 0.5 : 0 }]}>
                            <Text style={styles.dayLabel}>{day}</Text>
                            <Text style={styles.timeText}>{time}</Text>
                            {/* Replace with your time picker component */}
                            <TouchableOpacity style={styles.editButton}>
                                <MaterialIcons name="edit" size={24} color="gray" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={{ fontSize: 15, color: 'white' }}>
                        Add +
                    </Text>
                </TouchableOpacity>
            </View>
            < TouchableOpacity style={styles.addButtonBottom} >
                <Text style={styles.buttonTextBottom}>Update</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    addButtonBottom: {
        backgroundColor: '#13100D',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.09,
        marginTop: 15,
        alignSelf: 'center',
    },
    buttonTextBottom: {
        color: 'white',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        // marginBottom: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: "#000000"
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        marginTop: 40,
        marginHorizontal: 20
    },
    progressIndicators: {
        flexDirection: 'row',
        // marginLeft: 20,
    },
    activeIndicator: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        marginRight: 5,
    },
    inactiveIndicator: {
        width: 30,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        marginRight: 5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeButton: {
        marginLeft: 10,
    },
    orText: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    socialIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    socialButtonText: {
        color: 'black',
    },
    signupButton: {
        backgroundColor: '#007aff',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        marginTop: 20,
    },
    signupButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginText: {
        marginTop: 20,
        textAlign: 'center',
    },
    loginLink: {
        color: 'blue', // Or your link color
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#13100D',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#E8EAE3",
        borderRadius: 8,
        padding: 5,
        color: 'black',
        width: width / 1.1,
    },
    label: {
        fontSize: 13,
        marginBottom: 5,
        fontWeight: '600',
        color: 'black',
    },
    cuisineItem: {
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#E8EAE3',
        borderRadius: 12,
        marginBottom: 10,
    },
    selectedCuisine: {
        borderColor: '#83867C',
    },
    cuisineText: {
        color: 'black',
        fontSize: 19,
    },
    subText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: "#83867C",
        width: width / 1.3
    },
    searchBar: {
        // borderWidth: 1,
        backgroundColor: '#EFF0ED',
        // borderColor: '#ccc',
        borderRadius: 12,
        padding: 10,
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '25%', // Adjust width for desired grid layout
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    imagePlaceholder: {
        width: 50,
        height: 50,
        tintColor: 'gray', // Optional: tint the image icon
    },
    ingredientText: {
        marginTop: 2,
        color: 'black',
        fontWeight: '600'
    },
    profileImageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 30,
    },
    editIconContainer: {
        position: 'absolute',
        // bottom: 0,
        // height:30,
        right: 120,
        backgroundColor: 'lightgrey', // Blue background
        padding: 5,
        borderRadius: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    characterCount: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
        textAlign: 'right',
    },
    addCertificatesButton: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#f0f0f0',
        borderRadius: 5,
        padding: 15,
    },
    certificateIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    addCertificatesText: {
        color: '#44463F',
    },
    daysView: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginTop: 15,
        // marginBottom: 10,
    },
    daysContainer: {
        flexDirection: 'row',
    },
    dayButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedDay: {
        backgroundColor: '#44463F',
        borderWidth: 2,
        borderColor: '#44463F',
    },
    dayText: {
        fontSize: 14,
        color: 'black'
    },
    selectedDayText: {
        color: 'white'
    },
    timeContainer: {
        marginTop: 20,
        borderRadius: 16,
        backgroundColor: '#e4e6e1',
        padding: 10,
    },
    timeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10
        padding: 6
    },
    dayLabel: {
        fontSize: 16,
        color: 'black',
        width: width / 2
    },
    timeText: {
        fontSize: 12,
        color: '#5C5D58',
    },
    editButton: {
        marginLeft: 10,
    },
    sameTimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
    },
    sameTimeText: {
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#44463F',
        // width:100,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        // alignSelf:'center'
    },
});

export default ScheduleSettings;