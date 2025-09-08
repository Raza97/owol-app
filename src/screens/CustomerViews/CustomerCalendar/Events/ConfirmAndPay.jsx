import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors } from '../../../../../constants/Colors';
import { useTheme } from '../../../../routes/ThemeContext';
import ToastMessage from '../../../../../utlis/ToastMessage';
import useCustomerStyles from '../../../../../constants/GlobalCustomerStyles';
const { width, height } = Dimensions.get('window');


const ConfirmAndPay = () => {
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const nav = useNavigation()
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles);
    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="close" size={30} color={theme == 'light' ? "#13100D" : 'white'} />
                </TouchableOpacity>
                <Text style={[styles.sectionTitle, { marginTop: 10 }]}>Confirm and pay</Text>
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>

                <View style={[styles.listBlocks, { backgroundColor: ggStyles.subTextBg.backgroundColor, borderRadius: 16 }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../../../../assets/images/porridge.jpg')} resizeMode='cover' style={{ width: 110, height: 110, borderRadius: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, color: ggStyles.textColor.color, fontWeight: '600' }}>Perfect Steak</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <MaterialIcons name={'calendar-month'} size={20} color={'#44463F'} />
                                    <Text style={[styles.description, { marginBottom: 0, marginLeft: 5 }]}>March 25, Tue</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <MaterialIcons name={'timer'} size={20} color={'#44463F'} />
                                    <Text style={[styles.description, { marginBottom: 0, marginLeft: 5 }]}>18:00</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <MaterialIcons name={'location-pin'} size={20} color={'#44463F'} />
                                    <Text style={[styles.description, { marginBottom: 0, marginLeft: 5 }]}>Online</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>Price Details</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.description, { marginBottom: 0 }]}>Classx1</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 13, color: '#44463F' }}>$5</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.description, { marginBottom: 0 }]}>10% off bird early discount </Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 13, color: '#44463F' }}>-$0.5</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[styles.description, { marginBottom: 0, fontWeight: 'bold' }]}>Total</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 13, color: '#44463F', fontWeight: 'bold' }}>$4.5</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>Pay with</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
                        <MaterialIcons name={'add-card'} size={20} color={Colors.dark.btn} />
                        <Text style={[styles.description, { marginBottom: 0, fontWeight: 'bold', marginLeft: 5, color: Colors.dark.btn }]}>Add payment method</Text>

                    </View>
                </View>




                <View style={styles.listBlocks}>
                    <Text style={[styles.headingbtn, { fontWeight: '600', padding: 5 }]}>Cancellation policy</Text>
                    <Text style={{ fontSize: 13, color: '#44463F', fontWeight: '400', marginTop: 5 }}>You can cancel and get full refund by March 23, 18:00 PM</Text>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        ToastMessage('success', 'top', 'Paid for event successfully')
                        nav.goBack()
                    }}
                    style={styles.bookBtn}>
                    <Text style={styles.bookText}>Confirm and pay</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
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
        color: gg.textColor.color,
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
        // borderBottomWidth: 1,
        // borderBottomColor: '#E8EAE3',
        paddingBottom: 20,
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

export default ConfirmAndPay;