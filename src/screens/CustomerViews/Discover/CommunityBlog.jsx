import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
    Dimensions
} from 'react-native';
import BottomSlider from '../../../components/BottomSlider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomerBottomBar from '../CustomerHome/CustomerBottomBar';
import { useNavigation, useRoute } from '@react-navigation/native';
import CollectionCard from '../CustomerHome/CollectionCard';
import CustomerRecipeCard from '../CustomerRecipeCard';
import CustomerLessonCard from '../CustomerLessonCard';
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');


const CommunityBlog = () => {
    const { screen } = useRoute().params
    const { theme, toggleTheme } = useTheme(); // Get theme states
    const styles = getStyles(theme)


    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPopup, setAiPopup] = useState(false)
    const [blogScreen, setBlogScreen] = useState(screen)

    const handleslider = () => {
        setIsSheetVisible(false)
    }

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
            <TouchableOpacity key={index} style={[styles.dateContainer, { backgroundColor: item.day !== 'Wed' ? 'white' : '#D2D4CD', },]}>
                <Text style={{ fontSize: 15, color: '#83867C', textAlign: 'center' }}>{item.day}</Text>
                <Text style={{ color: '#44463F', fontSize: 15, textAlign: 'center' }}>{item.date}</Text>
            </TouchableOpacity>
        )
    }



    const searchSlider = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Search recipe from photo</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        nav.navigate('aiscan')
                        setIsSheetVisible(false)
                    }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Describe what you desire</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('aidesire')
                        setIsSheetVisible(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const aiSlider = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Add manually</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        nav.navigate('searchproduct')
                        setIsSheetVisible(false)
                        setAiPopup(false)
                    }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Scan Barcode</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('aibarcode')
                        setIsSheetVisible(false)
                        setAiPopup(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Ai scan</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('aiscan')
                        setIsSheetVisible(false)
                        setAiPopup(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const header = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 20,
                paddingBottom: 20,
            }}>
                <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Blog</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => nav.navigate('peopleview')}>
                        {theme == 'light' ?
                            <Image
                                source={require('../../../../assets/images/profile.png')} // Replace with user's profile image
                                style={{ marginRight: 10, }}
                            /> :
                            <Image
                                source={require('../../../../assets/images/profilewhite.png')} // Replace with user's profile image
                                style={{ marginRight: 10, }}
                            />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('chatview')}>
                        <MaterialIcons name="chat-bubble-outline" size={24} color="grey" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const following = () => {
        return (

            <ScrollView showsVerticalScrollIndicator={false} style={{}} >
                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => setBlogScreen('following')} style={{ padding: 8, borderRadius: 30, backgroundColor: Colors.dark.btn, width: '25%', marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Following</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBlogScreen('community')} style={{ padding: 8, borderRadius: 30, width: '25%' }}>
                            <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Community</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A', borderRadius: 16, width: '100%' }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    {/* <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}> */}
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    {/* </TouchableOpacity> */}
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FEFCE8' : '#26200B', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FEFCE8' : '#26200B', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    {/* <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}> */}
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    {/* </TouchableOpacity> */}
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    {/* <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}> */}
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    {/* </TouchableOpacity> */}
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }

    const community = () => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{}} >
                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity onPress={() => setBlogScreen('following')} style={{ padding: 8, borderRadius: 30, width: '25%', marginLeft: 10 }}>
                            <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Following</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setBlogScreen('community')} style={{ padding: 8, borderRadius: 30, backgroundColor: Colors.dark.btn, width: '25%', marginLeft: 10 }}>
                            <Text style={{ color: 'white', fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Community</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 8, borderRadius: 30, borderWidth: 1, marginLeft: 10, backgroundColor: theme !== 'light' && '#1F1E1E' }}>
                                <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Cooking</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ padding: 8, borderRadius: 30, borderWidth: 1, marginLeft: 10, backgroundColor: theme !== 'light' && '#1F1E1E' }}>
                                <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Eating tips</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ padding: 8, borderRadius: 30, borderWidth: 1, marginLeft: 10, backgroundColor: theme !== 'light' && '#1F1E1E' }}>
                                <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Storage</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ padding: 8, borderRadius: 30, borderWidth: 1, marginLeft: 10, backgroundColor: theme !== 'light' && '#1F1E1E' }}>
                                <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Sustainability</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ padding: 8, borderRadius: 30, borderWidth: 1, marginLeft: 10, backgroundColor: theme !== 'light' && '#1F1E1E' }}>
                                <Text style={{ color: theme == 'light' ? Colors.light.text : Colors.dark.text, fontSize: 14, textAlign: 'center', fontWeight: '500' }}>Sustainability</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A', borderRadius: 16, width: '100%' }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    {/* <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}> */}
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    {/* </TouchableOpacity> */}
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FEFCE8' : '#26200B', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FEFCE8' : '#26200B', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#884F0B" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#884F0B', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    {/* <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}> */}
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    {/* </TouchableOpacity> */}
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: theme == 'light' ? '#FCF5FE' : '#28142A', borderRadius: 16, width: '100%', marginTop: 15 }}>
                        <View style={styles.settingItem}>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Image source={require('../../../../assets/images/Avatar.png')} style={{ width: 40, height: 40, borderRadius: 30 }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{
                                        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                        // fontWeight: '600',
                                        fontSize: 13
                                    }}>Michael Rosenbaum</Text>
                                    <Text style={{ fontSize: 12, color: theme == 'light' ? '#83867C' : '#A6A8A0' }}>Nutriciologist</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                fontWeight: '600',
                                fontSize: 14
                            }}>7 Healthy Eating Tips</Text>
                            <Text style={{
                                lineHeight: 20,
                                color: theme == 'light' ? Colors.light.text : Colors.dark.text,
                                marginTop: 10,
                                // fontWeight: '600',
                                fontSize: 13
                            }}>Healthy eating emphasizes fruits, vegetables, whole grains, dairy, and protein. Dairy recommendations include low-fat or fat-free milk, lactose-free milk, and fortified soy beverages. Other plant-based beverag...more</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 15 }}>
                                    <Image source={require('../../../../assets/images/groupavatarsmall.png')} style={{}} />
                                    {/* <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}> */}
                                    <MaterialIcons name="chat-bubble-outline" size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    {/* </TouchableOpacity> */}
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name='favorite' size={15} color="#AE3BBE" style={{ marginLeft: 10 }} />
                                    <Text style={{ fontSize: 13, color: '#AE3BBE', marginLeft: 5 }}>12</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {/* {(!isSheetVisible && blogScreen === 'community') && <TouchableOpacity */}
            {(blogScreen === 'community') && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}
            {header()}

            {blogScreen === 'following' ? following() : community()}
            {/* <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {searchSlider()}
            </BottomSlider> */}
            {/* <CustomerBottomBar where={'mealplan'} /> */}
        </SafeAreaView >
    );
};

const getStyles = (theme) => StyleSheet.create({
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
        color: theme == 'light' ? Colors.light.text : Colors.dark.text

    },
    recipesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginHorizontal: 10
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
        color: '#44463F',
        // marginBottom: 10
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: Colors.light.btn, // Blue background
        borderRadius: 50,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 10
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 15,
        borderRadius: 8
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
    },
    insideSmallDetailViews: {
        backgroundColor: '#E8EAE3',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginTop: 5
    },
    dateContainer: {
        padding: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E8EAE3',
        marginHorizontal: 10,
        // marginTop: 20,
        width: 53
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        borderColor: '#E8EAE3',
        // borderWidth: 1,
        padding: 10,
        borderRadius: 16
    },
    settingText: {
        // flex: 1,
        color: 'black',
        fontWeight: '600',
        fontSize: 15
    }
});

export default CommunityBlog;