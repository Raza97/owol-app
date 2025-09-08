import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../../BottomBar';
import { useNavigation } from '@react-navigation/native';


const CustomerHome = () => {
    const nav = useNavigation()
    const [isCustomer, setIsCustomer] = useState(false);

    const header = () => {
        return (
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                </View>
                <Image source={require('../../../../../assets/images/search.png')} />
            </View>
        )
    }

    const profile = () => {
        return (
            <ScrollView style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={{ backgroundColor: '#EFF0ED', padding: 20, borderRadius: 16 }}>
                    <View style={styles.profileheader}>
                        <Image
                            source={require('../../../../../assets/images/Avatar.png')}
                            style={styles.profileImage}
                        />
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.name}>Michael Rosenbaum</Text>
                            <Text style={styles.title}>Head Chef</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton}>
                            <MaterialIcons name="edit" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Earner Account</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Switch to Customer</Text>
                        <Switch
                            value={isCustomer}
                            onValueChange={setIsCustomer}
                            trackColor={{ false: '#ccc', true: '#888' }}
                            thumbColor={isCustomer ? '#f4f3f4' : '#f4f3f4'}
                        />
                    </View>
                    <Text style={styles.switchSubtext}>All your data will be saved.</Text>
                </View>

                <View style={styles.settingsContainer}>
                    <TouchableOpacity onPress={() => nav.navigate('profilesetting')} style={styles.settingItem}>
                        <Text style={styles.settingText}>My Goal </Text>
                        <Text style={styles.settinginnerText}>Healthy eating</Text>
                        <MaterialIcons name="chevron-right" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('profilesetting')} style={styles.settingItem}>
                        <Text style={styles.settingText}>Dietary Preferences </Text>
                        <MaterialIcons name="chevron-right" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('profilesetting')} style={styles.settingItem}>
                        <Text style={styles.settingText}>Account settings</Text>
                        <MaterialIcons name="chevron-right" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>nav.navigate('schedulesetting')} style={styles.settingItem}>
                        <Text style={styles.settingText}>Taste Profiling</Text>
                        <MaterialIcons name="chevron-right" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>nav.navigate('aboutowol')} style={styles.settingItem}>
                        <Text style={styles.settingText}>About OWOL</Text>
                        <MaterialIcons name="chevron-right" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>Feedback & Support</Text>
                        <MaterialIcons name="chevron-right" size={24} />
                    </TouchableOpacity>
                </View>

            </View>
             </ScrollView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {header()}
            {profile()}
            <BottomBar where={'profile'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Light background color
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
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    //profilestyles
    profileContainer: {
        flex: 1,
        marginHorizontal: 18,
    },
    profileheader: {
        // backgroundColor: '#EFF0ED',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    headerTextContainer: {
        marginLeft: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    title: {
        color: '#888',
    },
    editButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        marginBottom: 20,
    },
    section: {
        marginTop: 10,
        // marginBottom: 20,
        backgroundColor: '#EFF0ED',
        borderRadius: 16,
        padding: 20
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    switchText: {
        marginRight: 10,
    },
    switchSubtext: {
        color: '#888',
        marginTop: 5,
    },
    earningsContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#EFF0ED',
        borderRadius: 16,
        padding: 20
    },
    earningsIcon: {
        // Add your icon here
    },
    earningsText: {
        fontSize: 25,
        // color:"#83867C",
        fontWeight: 'bold',
        marginLeft: 10,
    },
    earningsSubtext: {
        color: "#83867C",

        marginLeft: 5,
    },
    earningsLabel: {
        color: '#888',
        marginTop: 20,
    },
    settingsContainer: {
        marginTop: 10,
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
    settinginnerText: {
        color: '#83867C',
        fontWeight: '600',
        fontSize: 16,
        paddingLeft:80,
    },
})

export default CustomerHome;