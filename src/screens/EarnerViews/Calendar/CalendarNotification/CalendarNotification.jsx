import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, Switch } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Octicons from 'react-native-vector-icons/Octicons';
import { Colors } from "../../../../../constants/Colors";
import { useTheme } from "../../../../routes/ThemeContext";

const CalendarNotification = () => {
    const nav = useNavigation()

    const { theme, toggleTheme } = useTheme(); // Get theme state
    const styles = getStyles(theme)


    const notifs = [
        { message: 'Christie Denesik booked Masterclass', subMsg: "Perfect steak", time: '12:00' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Perfect steak", time: '13:00' },
        { message: 'Christie Denesik commented your recipe', subMsg: "Perfect steak", time: '15:00' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Porridge", time: '20:00' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Perfect steak", time: '21:00' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Perfect steak", time: '22:00' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Porridge", time: '22:50' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Porridge", time: '23:00' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Porridge", time: '23:15' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Perfect steak", time: '23:50' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Perfect steak", time: '23:55' },
        { message: 'Christie Denesik booked Masterclass', subMsg: "Porridge", time: '00:00' },
    ]

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color="grey" />
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>Notifications</Text>
                {/* <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    const notificationView = (item, index) => {
        return (
            <View key={index} style={styles.notificationContainer}>
                <Image source={require('../../../../../assets/images/Avatar.png')} resizeMode='cover' />
                <View style={styles.textViews}>
                    <Text style={{
                        fontSize: 14,
                        color: theme === 'light' ? Colors.light.text : Colors.dark.text,
                        // width: '100%',
                    }}>{item.message}</Text>
                    <Text style={{
                        padding: 5, borderRadius: 16,
                        backgroundColor: theme === 'light' ? '#E8EAE3' : '#141514',
                        width: 100, fontSize: 12,
                        color: theme === 'light' ? '#5C5D58' : Colors.dark.text,
                        textAlign: 'center'
                    }}>{item.subMsg}</Text>
                </View>
                <Text style={{ fontSize: 13, color: '#83867C' }}>{item.time}</Text>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {header()}
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: 20 }}>
                {notifs.map((item, index) => (
                    notificationView(item, index)
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const getStyles = (theme) => StyleSheet.create({
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
        marginHorizontal: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: theme === 'light' ? Colors.light.text : Colors.dark.text,

        // marginBottom: 10,
    },
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme == 'light' ? '#E8EAE3' : '#32332E',
        justifyContent: 'space-between',
        width: '100%'
    },
    textViews: {
        // width: '80%',
        paddingHorizontal: 5
    }
})


export default CalendarNotification;
