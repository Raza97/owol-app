import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView, Switch } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from "../../../../constants/Colors";
import { useTheme } from "../../../routes/ThemeContext";
// import Octicons from 'react-native-vector-icons/Octicons';


const BadgeNotification = () => {
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme states
    const styles = getStyles(theme)

    const notifs = [
        { message: '10 Recipes', subMsg: "Cook first 10 recipes and earn your chef hat" },
        { message: '5 Skills', subMsg: "Learn 5 new cooking skills" },
        { message: '20 Recipes', subMsg: "Cook 20 recipes and earn your chef hat" },
        { message: '10 Skills', subMsg: "Learn 10 new cooking skills" },
        { message: '10 Master Recipes', subMsg: "Cook 10 Advanced recipes and earn your master chef hat" },
        { message: '30 Recipes', subMsg: "Cook 30 recipes and earn your chef hat" },
        { message: '10 Recipes', subMsg: "Take 3 tests and read 5 articles about nutrition" },
        { message: 'Nutrition Guru Badge', subMsg: "Take 3 tests and read 5 articles about nutrition" },
        { message: 'Nutrition Guru Badge', subMsg: "Take 3 tests and read 5 articles about nutrition" },
        { message: 'Nutrition Guru Badge', subMsg: "Take 3 tests and read 5 articles about nutrition" },
        { message: 'Nutrition Guru Badge', subMsg: "Take 3 tests and read 5 articles about nutrition" },
        { message: 'Nutrition Guru Badge', subMsg: "Take 3 tests and read 5 articles about nutrition" },
    ]

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={30} color="grey" />
                </TouchableOpacity>
                <Text style={styles.sectionTitle}>Badges</Text>
                {/* <View style={styles.progressIndicators}>
                        {renderProgressIndicators()}
                    </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    const notificationView = (item, index) => {
        return (
            <View key={index} style={[styles.notificationContainer, { backgroundColor: index == 0 ? theme == 'light' ? '#FEFCE8' : '#26200B' : theme == 'light' ? '#F6F7F4' : '#141514', }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {index !== 0 ?
                        (theme == 'light' ?
                            <Image source={require('../../../../assets/images/cookwhite.png')} resizeMode='cover' />
                            : <Image source={require('../../../../assets/images/cook.png')} resizeMode='cover' />)
                        :
                        <Image source={require('../../../../assets/images/cookselect.png')} resizeMode='cover' />
                    }
                    <View style={{ marginLeft: 10, flex:1 }}>
                        <Text style={{
                          
                            fontSize: 14,
                            color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                            fontWeight: '600'
                            // width: '100%',
                        }}>{item.message}</Text>
                        <Text style={{
                            padding: 3, borderRadius: 16, fontSize: 12,
                            color: theme == 'light' ? '#5C5D58' : "#D2D4CD", width: '80%'
                        }}>{item.subMsg}</Text>
                    </View>
                </View>
                <MaterialIcons name='chevron-right' size={20} />
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
        // backgroundColor: 'white',
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
        color: theme == 'light' ? Colors.light.text : Colors.dark.text

        // marginBottom: 10,
    },
    notificationContainer: {
        flex: 1,
        marginTop: 10,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: theme == 'light' ? '#F6F7F4' : '#141514',
        // borderBottomWidth: 1,
        // borderBottomColor: '#E8EAE3',
        justifyContent: 'space-between',
        width: '100%'
    },
    textViews: {
        // width: '80%',
        paddingHorizontal: 5
    }
})


export default BadgeNotification;
