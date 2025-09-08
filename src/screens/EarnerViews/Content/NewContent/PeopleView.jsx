import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, Switch } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "../../../../../constants/Colors";
import { useTheme } from "../../../../routes/ThemeContext";
const { width, height } = Dimensions.get('window');


const PeopleView = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    const [searchQuery, setSearchQuery] = useState('');
    const styles = getStyles(theme);
    const ppl = [
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Christie Denesik' },
        { name: 'Dominic Torretto' },
    ]

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color={theme == 'light' ? 'black' : Colors.dark.text} />
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>People</Text>
                {/* <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            <View style={{ marginHorizontal: 18, }}>
                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={24} color={theme == 'light' ? 'black' : 'white'} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search People..."
                        placeholderTextColor={'#A6A8A0'}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ padding: 8, borderRadius: 30, backgroundColor: Colors.light.btn, width: '25%' }}>
                        <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>Following</Text>
                    </View>
                    <View style={{ padding: 8, borderRadius: 30, width: '25%' }}>
                        <Text style={{ color: theme == 'light' ? 'black' : Colors.dark.text, fontSize: 14, textAlign: 'center' }}>Followers</Text>
                    </View>
                    <View style={{ padding: 8, borderRadius: 30, width: '25%' }}>
                        <Text style={{ color: theme == 'light' ? 'black' : Colors.dark.text, fontSize: 14, textAlign: 'center' }}>Chefs</Text>
                    </View>
                    <View style={{ padding: 8, borderRadius: 30, width: '25%' }}>
                        <Text style={{ color: theme == 'light' ? 'black' : Colors.dark.text, fontSize: 14, textAlign: 'center' }}>Suggestions</Text>
                    </View>
                </View>
                <ScrollView style={{ marginTop: 20 }} showsVerticalScrollIndicator={false}>
                    {ppl.map((item, index) => (
                        <View key={index} style={{
                            width: '100%', flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            borderBottomColor: '#E8EAE3', borderBottomWidth: 1,
                            padding: 10
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../../../../assets/images/Avatar.png')}
                                    style={styles.profileImage}
                                />
                                <Text style={[styles.sectionTitle, { fontSize: 17, marginLeft: 10 }]}>{item.name}</Text>
                            </View>
                            <MaterialIcons name={'person'} color={Colors.light.btn} size={24} />
                        </View>
                    ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )

}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme == 'light' ? Colors.light.text : Colors.dark.text
        // marginBottom: 10,
    },

    searchInput: {
        // flex: 1,
        marginLeft: 10,
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
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        backgroundColor: theme == 'light' ? '#EFF0ED' : Colors.dark.secondaryBackground,
        // borderColor: '#ccc',
        borderRadius: 12,
        padding: 5,
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
        width: 50,
        height: 50,
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
    settingsContainer: {
        marginTop: 10,
        marginHorizontal: 18
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#E8EAE3',
        borderWidth: 1,
        padding: 10,
        borderRadius: 16
    },
    settingText: {
        flex: 1,
        color: 'black',
        fontWeight: '600',
        fontSize: 15
    },

});

export default PeopleView;