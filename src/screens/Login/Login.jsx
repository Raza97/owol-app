import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../../routes/ThemeContext';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../constants/GlobalCustomerStyles';
import Typhography from '../../components/Typhography';
import Button from '../../components/Button';
import { api } from '../../services/api';
import ToastMessage from '../../../utlis/ToastMessage';
import { tokenStorage } from '../../utils/tokenStorage';
import { useUser } from '../../contexts/UserContext';


const Login = () => {
    const { screen, roleId, roleTitle } = useRoute().params
    console.log('Login params:', { screen, roleId, roleTitle })
    const nav = useNavigation()
    const { theme, toggleTheme } = useTheme(); // Get theme state
    const ggStyles = useCustomerStyles()
    const styles = getStyles(theme, ggStyles)
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { updateUser } = useUser();

    // Handle login with API
    const handleLogin = async () => {
        if (!email || !password) {
            ToastMessage('error', 'top', 'Please enter both email and password');
            return;
        }

        try {
            setLoading(true);
            console.log('Login attempt with roleId:', roleId, 'roleTitle:', roleTitle);
            const response = await api.login(email, password, roleId);
            console.log('Login response:', response);
            
            // Validate role match (only if roleTitle is provided)
            if (roleTitle && response.user.role.toLowerCase() !== roleTitle.toLowerCase()) {
                console.log('Role mismatch - expected:', roleTitle, 'got:', response.user.role);
                ToastMessage('error', 'top', `This account isn't registered as ${roleTitle}.`);
                return;
            }

            // Store token securely
            tokenStorage.setToken(response.token);
            // Update user context with user data
            updateUser(response.user);
            console.log('Login successful, token stored');
            
            // Navigate to appropriate screen based on user's actual role
            if (response.user.role.toLowerCase() === 'customer' || response.user.role.toLowerCase() === 'consumer' || response.user.role.toLowerCase() === 'user') {
                nav.navigate('customerhome');
            } else if (response.user.role.toLowerCase() === 'earner') {
                nav.navigate('cookbookhome');
            } else {
                // Fallback to screen parameter if role doesn't match expected values
                if (screen === 'customer') {
                    nav.navigate('customerhome');
                } else if (screen === 'earner') {
                    nav.navigate('cookbookhome');
                }
            }
            
        } catch (error) {
            console.error('Login error:', error);
            if (error.message.includes('403')) {
                ToastMessage('error', 'top', 'Invalid role for this account.');
            } else if (error.message.includes('401')) {
                ToastMessage('error', 'top', 'Invalid email or password.');
            } else {
                ToastMessage('error', 'top', 'Login failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={() => nav.goBack()}>
                    <View style={{ alignItems: 'center', backgroundColor: theme == 'light' ? '#E6F4D3' : ggStyles.greenBg.backgroundColor, borderRadius: 30 }}>
                        <MaterialIcons name="chevron-left" size={30} color={Colors.dark.btn} />
                    </View>
                </TouchableOpacity>
                <Typhography size={24} style={styles.heading}>Welcome Back</Typhography>
                {/* <View style={styles.progressIndicators}>
                    {renderProgressIndicators()}
                </View> */}
                <View><Text style={{ color: 'transparent' }}>Skip</Text></View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 20 }}>
            {header()}
                {/* <Text style={styles.heading}>First, let's create an account</Text> */}



                <Typhography style={styles.label}>Email</Typhography>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor={theme == 'light' ? '#9B9C96' : ggStyles.subTextColor.color}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Typhography style={styles.label}>Password</Typhography>
                <View style={styles.inputContainer}>
                    {/* <View style={styles.passwordContainer}> */}
                    <TextInput
                        style={styles.input}
                        placeholder="Enter password"
                        secureTextEntry
                        placeholderTextColor={theme == 'light' ? '#9B9C96' : ggStyles.subTextColor.color}
                        value={password}
                        onChangeText={setPassword}
                    />
                    {/* <TouchableOpacity style={styles.eyeButton}>
                              {/* Add eye icon for password visibility */}
                    {/* </TouchableOpacity> */}
                    {/* </View> */}
                </View>
                <Text style={styles.orText}>OR</Text>

                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}>
                        <Image
                            source={require('../../../assets/images/OwOLLogo.png')} // Apple logo placeholder
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}>
                        <Image
                            source={require('../../../assets/images/google.png')} // Replace with your Google logo
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}>
                        <Image
                            source={require('../../../assets/images/facebook.png')} // Replace with your Facebook logo
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View >
            <View style={{marginBottom: 20}}>
                <Typhography style={{ color: theme == 'light' ? '#9B9C96' : ggStyles.subTextColor.color, fontSize: 13, marginTop: 40, alignSelf: 'center' }}>By continuing, you agree to OwOL's {<Typhography style={{ color: Colors.dark.btn, textAlignVertical: 'center' }}>Terms & Conditions</Typhography>} and {<TouchableOpacity><Typhography style={{ color: Colors.dark.btn }}>Privacy Policy</Typhography></TouchableOpacity>}.</Typhography>

                {/* <TouchableOpacity style={[styles.button, { backgroundColor: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}
                    onPress={() => {
                        if (screen === 'customer')
                            nav.navigate('customerhome')
                        else if (screen === 'earner')
                            nav.navigate('cookbookhome')
                    }}
                >
                    <Typhography style={styles.buttonText}>Log in</Typhography>
                </TouchableOpacity> */}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Button 
                        title={loading ? 'Logging in...' : 'Log in'} 
                        style={{width: width / 1.1}} 
                        onPress={handleLogin}
                        disabled={loading}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Typhography style={styles.loginText}>Don't have an account? </Typhography>
                    <TouchableOpacity style={{ marginTop: 19 }} onPress={() => nav.goBack()}>
                        <Typhography style={[styles.loginLink, { color: theme == 'light' ? Colors.light.btn : Colors.dark.btn }]}>Sign Up</Typhography>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >

    )
}

export default Login;

const getStyles = (theme, gg) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gg.basicContainer.backgroundColor,
        justifyContent: 'space-between'
    },
    heading: {
        // fontSize: 24,
        fontWeight: 'bold',
        // marginBottom: 15,
        textAlign: 'center',
        // color: gg.textColor.color,
        textAlignVertical: 'center'
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
        color: '#79B939'
    },
    socialButton: {
        flex: 1,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    socialIcon: {
        width: 20,
        height: 20,
        // marginRight: 10,
    },
    socialButtonText: {
        color: gg.textColor.color,
    },
    signupButton: {
        backgroundColor: '#007aff',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        marginTop: 20,
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
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: width / 1.1,
        marginTop: 15,
        alignSelf: 'center',
    },
    inputContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: "#79B939",
        borderRadius: 8,
        padding: 7,
        color: 'black',
        width: width / 1.1,
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
        // borderWidth: 1,
        backgroundColor: '#EFF0ED',
        // borderColor: '#ccc',
        borderRadius: 12,
        padding: 10,
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
        width: 100,
        height: 100,
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
    // inputContainer: {
    //     marginBottom: 20,
    // },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: gg.textColor.color,
        fontWeight: '600',
    },
    input: {
        // borderWidth: 1,
        // borderColor: '#ccc',
        // borderRadius: 5,
        // paddingHorizontal: 10,
        // paddingVertical: 12,
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
        marginBottom: 10,
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
});