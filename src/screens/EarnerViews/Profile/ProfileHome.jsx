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
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecipeCard from '../RecipeCard';
import CollectionCard from '../CollectionCard';
import EarnerHeader from '../EarnerHeader';
import LessonCard from '../LessonCard';
import EarnerBottomBar from '../EarnerBottomBar';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../routes/ThemeContext';
import { Colors } from '../../../../constants/Colors';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';
import { useUser } from '../../../contexts/UserContext';

const ProfileHome = () => {
    const nav = useNavigation()
    const [isCustomer, setIsCustomer] = useState(false);
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const { user } = useUser();
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const header = () => {
        return (
            <View style={styles.header}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={styles.sectionTitle}>Profile</Text>
                </View>
                <Image source={require('../../../../assets/images/search.png')} />
            </View>
        )
    }

    const profile = () => {
        return (
            <ScrollView style={styles.profileContainer}>
                <View style={{ backgroundColor: ggStyles.profileHeroBg.backgroundColor, padding: 20, borderRadius: 16 }}>
                    <View style={styles.profileheader}>
                        <Image
                            source={require('../../../../assets/images/Avatar.png')}
                            style={styles.profileImage}
                        />
                        <View style={styles.headerTextContainer}>
                            <Text style={styles.name}>{user?.name || 'User'}</Text>
                            <Text style={styles.title}>Head Chef</Text>
                        </View>
                        <TouchableOpacity style={styles.editButton}>
                            <MaterialIcons name="edit" size={24} color={Colors.dark.btn} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sectionTitle}>Bio</Text>
                    <Text style={styles.bio}>Hi, I'm Michael Rosenbaum! I'm a recipe developer at SideChef with love for traditional and fusion cuisine.</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Earner Account</Text>
                    <View style={styles.switchContainer}>
                        <Text style={styles.switchText}>Switch to Customer</Text>
                        <Switch
                            value={isCustomer}
                            onValueChange={setIsCustomer}
                            trackColor={{ false: '#83867C', true: Colors.light.btn }}
                            thumbColor={isCustomer ? 'white' : 'white'}
                        />
                    </View>
                    <Text style={styles.switchSubtext}>All your data will be saved.</Text>
                </View>

                <View style={styles.earningsContainer}>
                    <View style={{
                        flexDirection: 'row',
                        // alignItems: 'center',
                    }}>
                        <Image
                            source={require('../../../../assets/images/chart.png')}
                        />
                        <Text style={styles.earningsText}>$420</Text>
                        <Text style={styles.earningsSubtext}>(+25%)</Text>
                    </View>
                    <Text style={styles.earningsLabel}>you earned this month</Text>
                </View>

                <View style={styles.settingsContainer}>
                    <TouchableOpacity onPress={() => nav.navigate('profilesetting')} style={styles.settingItem}>
                        <Text style={styles.settingText}>Account settings</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('schedulesetting')} style={styles.settingItem}>
                        <Text style={styles.settingText}>Schedule settings</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('aboutowol')} style={styles.settingItem}>
                        <Text style={styles.settingText}>About OWOL</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingItem}>
                        <Text style={styles.settingText}>Feedback & Support</Text>
                        <MaterialIcons name="chevron-right" size={24} color={'grey'} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {header()}
            <ScrollView>
                {profile()}
            </ScrollView>
            <EarnerBottomBar where={'profile'} />
        </SafeAreaView>
    )
}

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gg.basicContainer.backgroundColor,
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
        color: gg.textColor.color
    },
    title: {
        color: gg.subTextColor.color,
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
        color: gg.textColor.color
    },
    bio: {
        marginBottom: 20,
        color: gg.textColor.color
    },
    section: {
        marginTop: 10,
        // marginBottom: 20,
        backgroundColor: gg.profileHeroBg.backgroundColor,
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
        color: gg.textColor.color
    },
    switchSubtext: {
        color: '#888',
        marginTop: 5,
    },
    earningsContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginTop: 10,
        backgroundColor: gg.profileHeroBg.backgroundColor,
        borderRadius: 16,
        padding: 20
    },
    earningsIcon: {
        // Add your icon here
    },
    earningsText: {
        fontSize: 25,
        // color:"#83867C",
        color: gg.textColor.color,
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
        borderColor: gg.borderColor.borderColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 16
    },
    settingText: {
        flex: 1,
        color: gg.textColor.color,
        fontWeight: '600',
        fontSize: 15
    },
})

export default ProfileHome;