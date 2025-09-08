import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors } from '../../../../../constants/Colors';
import { useTheme } from '../../../../routes/ThemeContext';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
const { width, height } = Dimensions.get('window');


const EventDetails = () => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles);
    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color={theme == 'light' ? "#13100D" : 'white'} />
                </TouchableOpacity>
                <Text style={[styles.sectionTitle, { marginTop: 10, color: 'transparent' }]}>Preview</Text>
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>
                <Image source={require('../../../../../assets/images/porridge.jpg')} resizeMode='cover' style={styles.ingredientImage} />

                <Text style={[styles.sectionTitle, { marginTop: 15, }]}>Perfect Steak</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 15, backgroundColor: ggStyles.greenBg.backgroundColor, alignItems: 'center', borderRadius: 16 }}>
                    <View style={{ alignItems: "center", borderRightWidth: 1, paddingRight: 7, borderRightColor: '#D2D4CD' }}>
                        <MaterialIcons name={'edit-calendar'} color={ggStyles.textColor.color} size={20} />
                        <Text style={[styles.description, { marginTop: 3, marginBottom: 0 }]}>March 25, Tue</Text>
                    </View>
                    <View style={{ alignItems: "center", borderRightWidth: 1, paddingRight: 7, borderRightColor: '#D2D4CD' }}>
                        <MaterialIcons name={'timer'} color={ggStyles.textColor.color} size={20} />
                        <Text style={[styles.description, { marginTop: 3, marginBottom: 0 }]}>March 25, Tue</Text>
                    </View>
                    <View style={{ alignItems: "center", }}>
                        <MaterialIcons name={'hourglass-empty'} color={ggStyles.textColor.color} size={20} />
                        <Text style={[styles.description, { marginTop: 3, marginBottom: 0 }]}>March 25, Tue</Text>
                    </View>
                </View>

                <Text style={[styles.description, { marginTop: 10 }]}>
                    You asked for a Steak Masterclass...well here it is with everything you need to know to get your steak perfect every time!
                </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#E8EAE3', borderBottomWidth: 1, padding: 12, }}>
                    <TouchableOpacity>
                        <Text style={[styles.headingbtn, { backgroundColor: Colors.light.btn, color: 'white' }]}>Overview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.headingbtn}>What you need</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>Organizers</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../../../assets/images/Avatar.png')} resizeMode='cover' style={{ width: 50, height: 50, borderRadius: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 13, color: '#44463F', fontWeight: '600' }}>Michael Rosembaum</Text>
                                <Text style={[styles.description, { marginTop: 3, marginBottom: 0 }]}>Head Chef</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ padding: 10, borderRadius: 30, backgroundColor: Colors.dark.btn }}>
                            <Text style={{ fontSize: 13, color: 'white', fontWeight: '600' }}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>Location</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name={'location-pin'} size={25} color={ggStyles.textColor.color} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.description, { marginTop: 3, marginBottom: 0 }]}>Online</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ padding: 10 }}>
                            <Text style={{ fontSize: 13, color: Colors.dark.btn, fontWeight: '600', textDecorationLine: 'underline' }}>Link to class</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>Difficulty</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name={'signal-cellular-alt-2-bar'} size={25} color={ggStyles.textColor.color} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.description, { marginTop: 3, marginBottom: 0 }]}>Beginner</Text>
                            </View>
                        </View>
                        {/* <TouchableOpacity style={{ padding: 10 }}>
                            <Text style={{ fontSize: 13, color: '#44463F', fontWeight: '600', textDecorationLine: 'underline' }}>Link to class</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>About Class</Text>
                    <Text style={{ fontSize: 13, color: ggStyles.subTextColor.color, fontWeight: '400', marginTop: 5 }}>You will be shown a range of popular cuts as well as some more less known ones. You will cook and be shown a number of delicious and inspiring accompaniments, sauces and butters. The course will cover the Weber way of cooking. Techniques that have been developed over 70 years. You will then have the chance to get your gloved hands on a selection of Weber barbecues, giving you the confidence to cook different cuts of stake and master the art of hitting rare, medium, and well done every time.</Text>
                </View>

                <TouchableOpacity onPress={() => nav.navigate('confirmandpay')} style={styles.bookBtn}>
                    <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        marginHorizontal: 18
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 13,
        marginBottom: 16,
        color: theme == 'light' ? '#44463F' : Colors.dark.text
        // fontWeight:'300',
    },
    sectionTitle: {
        color: theme == 'light' ? 'black' : Colors.dark.text,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        flex: 1,
        fontSize: 14,
        marginBottom: 8,
        color: theme == 'light' ? '#13100D' : Colors.dark.text
    },
    note: {
        fontSize: 16,
        marginTop: 16,
        fontStyle: 'italic',
    },
    ingredientImage: {
        width: '100%',
        height: height / 3,
        borderRadius: 16
    },
    headingbtn: {
        fontSize: 14,
        color: theme == 'light' ? "#5C5D58" : Colors.dark.text,
        padding: 10,
        borderRadius: 30
    },
    stepNum: {
        padding: 6,
        borderRadius: 30,
        // backgroundColor: '#E8EAE3',
        color: Colors.light.btn,
        fontSize: 14,
        marginRight: 20,
        textAlign: 'center',
        width: 30
        // flex: 0.09
    },
    listBlocks: {
        marginTop: 10,
        marginBottom: 10,
        // flexDirection: 'row',
        width: "100%",
        // alignItems: 'center'

    },
    bookBtn: {
        marginTop: 20,
        borderRadius: 12,
        padding: 10,
        width: '100%',
        backgroundColor: Colors.dark.btn,
        marginBottom: 50
    },
    bookText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    }
});

export default EventDetails;