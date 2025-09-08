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
import { useNavigation } from '@react-navigation/native';
import CollectionCard from '../CustomerHome/CollectionCard';
import CustomerRecipeCard from '../CustomerRecipeCard';
import CustomerLessonCard from '../CustomerLessonCard';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';

const DiscoverHome = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [aiPopup, setAiPopup] = useState(false)


    const { theme, toggleTheme } = useTheme(); // Get theme state
    const styles = getStyles(theme)

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
                <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Discover</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="favorite" size={24} color="grey" />
                    <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'following' })}>
                        <MaterialIcons name="chat-bubble-outline" size={24} color="grey" style={{ marginLeft: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {/* {!isSheetVisible && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>} */}
            {header()}

            <ScrollView showsVerticalScrollIndicator={false} style={{}} >
                <Text style={[styles.sectionTitle, { marginHorizontal: 20, marginTop: 10 }]}>What would you like to learn today?</Text>

                <View style={styles.searchBar}>
                    <MaterialIcons name="search" size={24} color={'#9B9C96'} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search lessons, quizzes, articles"
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


                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            {/* <Image source={require('../../../../assets/images/ai.png')} /> */}
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>Badges</Text>
                        </View>
                        <TouchableOpacity onPress={() => nav.navigate('badgenotification')}>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    <Image
                                        source={require('../../../../assets/images/cookselect.png')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#13100D' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center', }}>10 Recipes</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    {theme == 'light' ?
                                        <Image
                                            source={require('../../../../assets/images/cookwhite.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../assets/images/cook.png')}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#A6A8A0' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center' }}>5 skills</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    {theme == 'light' ?
                                        <Image
                                            source={require('../../../../assets/images/cookwhite.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../assets/images/cook.png')}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#A6A8A0' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center' }}>20 recipes</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    {theme == 'light' ?
                                        <Image
                                            source={require('../../../../assets/images/cookwhite.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../assets/images/cook.png')}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#A6A8A0' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center' }}>20 recipes</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    {theme == 'light' ?
                                        <Image
                                            source={require('../../../../assets/images/cookwhite.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../assets/images/cook.png')}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#A6A8A0' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center' }}>10 skills</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    {theme == 'light' ?
                                        <Image
                                            source={require('../../../../assets/images/cookwhite.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../assets/images/cook.png')}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#A6A8A0' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center' }}>30 recipes</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <TouchableOpacity style={{ borderRadius: 30, marginHorizontal: 10 }}>
                                    {theme == 'light' ?
                                        <Image
                                            source={require('../../../../assets/images/cookwhite.png')}
                                        /> :
                                        <Image
                                            source={require('../../../../assets/images/cook.png')}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ color: theme == 'light' ? '#A6A8A0' : Colors.dark.text, marginTop: 2, fontSize: 12, textAlign: 'center' }}>20 skills</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>


                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/aipurple.png')} />
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>Daily suggestions</Text>
                        </View>


                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Quiz of the day"
                            imageSource={require('../../../../assets/images/discoverpic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Quiz of the day"
                            imageSource={require('../../../../assets/images/quizoftheday.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Quiz of the day"
                            imageSource={require('../../../../assets/images/quizoftheday.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Quiz of the day"
                            imageSource={require('../../../../assets/images/quizoftheday.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Quiz of the day"
                            imageSource={require('../../../../assets/images/quizoftheday.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/aipurple.png')} />
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>Featured Events</Text>
                        </View>
                        <TouchableOpacity onPress={() => nav.navigate('discovereventhome')}>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Perfect Steak"
                            imageSource={require('../../../../assets/images/perfectsteak.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Perfect Steak"
                            imageSource={require('../../../../assets/images/perfectsteak.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Perfect Steak"
                            imageSource={require('../../../../assets/images/perfectsteak.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>Complete lessons</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CustomerLessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                        <CustomerLessonCard
                            title="Homemade italian pasta"
                            imageSource={require('../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                        <CustomerLessonCard
                            title="Mastering Knife Skills"
                            imageSource={require('../../../../assets/images/knife_skills.jpg')} // Replace with your image
                            lessonCount={120}
                        />
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>Quizzes</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={[styles.settingItem, { backgroundColor: theme == 'light' ? '#FEFCE8' : '#26200B' }]}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../../../../assets/images/discoverquiz.jpg')} style={{ width: 50, height: 50, borderRadius: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.settingText}>Nutrition Mythbusters</Text>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : '#D2D4CD' }}>10 questions</Text>
                            </View>
                        </View>
                        <MaterialIcons name="chevron-right" size={24} color={theme == 'light' ? '#EFB903' : '#884F0B'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => nav.navigate('homelearningquizzes')} style={[styles.settingItem, { backgroundColor: theme == 'light' ? '#F3FAEB' : '#131B0E' }]}>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Image source={require('../../../../assets/images/discoverquiz.jpg')} style={{ width: 50, height: 50, borderRadius: 30 }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.settingText}>Sustainable Food IQ Test</Text>
                                <Text style={{ fontSize: 12, color: theme == 'light' ? '#5C5D58' : '#D2D4CD' }}>10 questions</Text>
                            </View>
                        </View>
                        <MaterialIcons name="chevron-right" size={24} color={theme == 'light' ? '#385420' : '#8AC44F'} />
                    </TouchableOpacity>

                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            {/* <Image source={require('../../../../assets/images/ai.png')} /> */}
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>New in community</Text>
                        </View>
                        <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'community' })}>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Perfect Steak"
                            imageSource={require('../../../../assets/images/perfectsteak.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Perfect Steak"
                            imageSource={require('../../../../assets/images/perfectsteak.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Perfect Steak"
                            imageSource={require('../../../../assets/images/perfectsteak.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                    </ScrollView>
                </View>

                <View style={[styles.sectionContainer, { marginBottom: 30 }]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            {/* <Image source={require('../../../../assets/images/ai.png')} /> */}
                            <Text style={[styles.sectionTitle, { marginBottom: 0, marginLeft: 5 }]}>What to read?</Text>
                        </View>
                        <TouchableOpacity onPress={() => nav.navigate('communityblog', { screen: 'community' })}>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>
                    </View>
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
                </View>

            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {searchSlider()}
            </BottomSlider>
            <CustomerBottomBar where={'discover'} />
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
        color: Colors.light.btn,
        // marginBottom: 10
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
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: '#f5f5f5',
        marginHorizontal: 15,
        borderRadius: 8,
        backgroundColor: theme === 'light' ? '#f5f5f5' : '#141514',

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
        color: theme == 'light' ? Colors.light.text : Colors.dark.text,
        fontWeight: '600',
        fontSize: 15
    }
});

export default DiscoverHome;