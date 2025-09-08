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
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors';
import { useTheme } from '../../../routes/ThemeContext';
import useCustomerStyles from '../../../../constants/GlobalCustomerStyles';

const KitchenSpaceCookbook = () => {
    const nav = useNavigation()
    const [isSheetVisible, setIsSheetVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // const [aiPopup, setAiPopup] = useState(false)

    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)

    const handleslider = () => {
        setIsSheetVisible(false)
    }

    const searchSlider = () => {
        return (
            <View style={styles.optionsList}>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Add recipe</Text>
                    <TouchableOpacity style={styles.addButton} onPress={() => {
                        // nav.navigate('aiscan')
                        setIsSheetVisible(false)
                    }}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create your own recipe</Text>
                    <TouchableOpacity onPress={() => {
                        nav.navigate('kitchenspacenewrecipe')
                        setIsSheetVisible(false)
                    }} style={styles.addButton}>
                        <MaterialIcons name="add" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.optionContainer}>
                    <Text style={styles.optionText}>Create new collection</Text>
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
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <MaterialIcons name="chevron-left" size={25} color="grey" />
                </TouchableOpacity>

                <Text style={[styles.sectionTitle, { marginBottom: 0, textAlign: 'center' }]}>Cookbook</Text>
                <TouchableOpacity>
                    <MaterialIcons name="bookmark-border" size={24} color="grey" />
                </TouchableOpacity>
            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme == 'light' ? 'white' : Colors.dark.background }]}>
            {!isSheetVisible && <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsSheetVisible(!isSheetVisible)}
            >
                <MaterialIcons name="add" size={30} color="white" />
            </TouchableOpacity>}
            {header()}

            <ScrollView showsVerticalScrollIndicator={false} style={{}} >
                <Text style={[styles.sectionTitle, { marginHorizontal: 20, marginTop: 10, marginBottom: 0 }]}>Cooking Achievements</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.sectionContainer]}>
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


                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.sectionTitle, {}]}>Collections</Text>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/kitchencookbookpic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/mealplanpic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
                </View>

                <View style={[styles.sectionContainer]}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.sectionTitle, {}]}>Own recipes</Text>
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/kitchencookbookpic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/kitchencookbookpic.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}> */}
                        {/* <Image source={require('../../../../assets/images/ai.png')} /> */}
                        <Text style={[styles.sectionTitle, {}]}>Recently saved</Text>
                        {/* </View> */}
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
                    <View style={styles.recipesContainer}>
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.9}
                            likes={120}
                            imageSource={require('../../../../assets/images/kitchencookbookpic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/bread.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/customerhomepic.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/porridge.jpg')} // Replace with your image
                        />
                    </View>
                    {/* Add more CollectionCards here */}
                    {/* </ScrollView> */}
                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/ai.png')} /> */}
                        <Text style={[styles.sectionTitle, {}]}>Recently cooked</Text>
                        {/* </View> */}
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>

                </View>

                <Text style={[styles.sectionTitle, { marginHorizontal: 20, marginTop: 10, marginBottom: 0 }]}>Discover new tastes & skills</Text>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
                            <Image source={require('../../../../assets/images/ai.png')} /> */}
                        <Text style={[styles.sectionTitle, {}]}>Improve your skills</Text>
                        {/* </View> */}
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <CollectionCard
                            title="Time to cook"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Smart Shopping List"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        <CollectionCard
                            title="Seasonal Salads"
                            imageSource={require('../../../../assets/images/salad.jpg')} // Replace with your image
                            recipeCount={25}
                        />
                        {/* Add more CollectionCards here */}
                    </ScrollView>

                </View>

                <View style={styles.sectionContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginTop: 10 }}> */}
                        {/* <Image source={require('../../../../assets/images/ai.png')} /> */}
                        <Text style={[styles.sectionTitle, {}]}>Based on your preferences</Text>
                        {/* </View> */}
                        <TouchableOpacity>
                            <Text style={styles.subText}>View all {'>'}</Text>
                        </TouchableOpacity>

                    </View>
                    {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
                    <View style={styles.recipesContainer}>
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.9}
                            likes={120}
                            imageSource={require('../../../../assets/images/porridge.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/porridge.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/porridge.jpg')} // Replace with your image
                        />
                        <CustomerRecipeCard
                            title="Porridge"
                            rating={4.5}
                            likes={120}
                            imageSource={require('../../../../assets/images/porridge.jpg')} // Replace with your image
                        />
                    </View>
                    {/* Add more CollectionCards here */}
                    {/* </ScrollView> */}
                </View>


            </ScrollView>
            <BottomSlider visible={isSheetVisible} setIsSheetVisible={setIsSheetVisible}>
                {searchSlider()}
            </BottomSlider>
            <CustomerBottomBar where={'kitchenspace'} />
        </SafeAreaView >
    );
};

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        flexWrap: 'wrap'
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
        // borderBottomWidth: 1,
        padding: 5,
        // borderBottomColor: '#E8EAE3'
    },
    optionText: {
        fontSize: 16,
        color: gg.textColor.color,
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: Colors.dark.btn,
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
        backgroundColor: Colors.dark.btn, // Blue background
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
    }
});

export default KitchenSpaceCookbook;