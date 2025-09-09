import { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    ScrollView,
    Switch
} from 'react-native';
import { StackActions, useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../../constants/Colors';
const { width, height } = Dimensions.get('window');
import useCustomerStyles from '../../../constants/GlobalCustomerStyles';
import { useTheme } from '../../routes/ThemeContext';
import Typhography from '../../components/Typhography';
import Button from '../../components/Button';
import { api } from '../../services/api';
import ToastMessage from '../../../utlis/ToastMessage';
import { useUser } from '../../contexts/UserContext';
import { tokenStorage } from '../../utils/tokenStorage';

const socialIcons = {
  apple: require('../../../assets/images/apple.png'),
  google: require('../../../assets/images/google.png'),
  facebook: require('../../../assets/images/facebook.png'),
};
const Signup = () => {
    const { screen, roleId, roleTitle } = useRoute().params;
    const nav = useNavigation();
    const { theme, toggleTheme } = useTheme();
    const { updateUser } = useUser();
    const ggStyles = useCustomerStyles();
    const styles = getStyles(theme, ggStyles);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle signup with API
    const handleSignup = async () => {
        if (!userName || !email || !password) {
            ToastMessage('error', 'top', 'Please fill in all fields');
            return;
        }

        if (!roleId) {
            ToastMessage('error', 'top', 'Role information missing. Please try again.');
            return;
        }

        console.log('Signup attempt with roleId:', roleId, 'roleTitle:', roleTitle);

        try {
            setLoading(true);
            const response = await api.signup(userName, email, password, roleId);
            
            // Store token first
            tokenStorage.setToken(response.token);
            // Then store user data
            updateUser(response.user);
            console.log('Signup successful, token and user data stored');
            
            // Navigate to onboarding starter
            nav.navigate('onboardstarter', { 
                selection: screen,
                roleId: roleId,
                roleTitle: roleTitle
            });
            
        } catch (error) {
            console.error('Signup error:', error);
            if (error.message.includes('409')) {
                ToastMessage('error', 'top', 'Email already exists. Please use a different email.');
            } else if (error.message.includes('400')) {
                ToastMessage('error', 'top', 'Invalid signup data. Please check your information.');
            } else {
                ToastMessage('error', 'top', 'Signup failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: ggStyles.basicContainer.backgroundColor }]}>
            <View style={{ marginHorizontal: 20, marginTop: 50 }}>
                <Typhography size={22} style={styles.heading}>Create an account</Typhography>

                <Text style={styles.label}>User name</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="User name"
                        placeholderTextColor="#9B9C96"
                        value={userName}
                        onChangeText={setUserName}
                    />
                </View>

                <Text style={styles.label}>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        placeholderTextColor="#9B9C96"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter password"
                            placeholderTextColor="#9B9C96"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                </View>

                <Text style={styles.orText}>OR</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 5, marginBottom: 20 }}>
                    {['apple', 'google', 'facebook'].map((provider) => (
                        <TouchableOpacity
                            key={provider}
                            style={[styles.socialButton, { backgroundColor: ggStyles.greenBg.backgroundColor }]}
                        >
                            <Image
                                source={socialIcons[provider]}
                                style={styles.socialIcon}
                                accessible
                                accessibilityLabel={`${provider} logo`}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

            </View>
                <View style={{ justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <Typhography size={14} style={styles.text}>
                            By continuing, you agree to OwOL's&nbsp;
                            <Typhography size={14} style={{ color: '#79B939', fontWeight: 'bold' }}>
                                Terms & conditions
                            </Typhography>{' '}
                            and{' '}
                            <Typhography size={14} style={{ color: '#79B939', fontWeight: 'bold' }}>
                                Privacy Policy
                            </Typhography>.
                        </Typhography>
                    </View>

                    <Button
                        title={loading ? 'Creating account...' : 'Sign up for free'}
                        style={{ width: width / 1.1 }}
                        onPress={handleSignup}
                        disabled={loading}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Typhography size={16} style={styles.loginText}>
                            Already have an account?{' '}
                        </Typhography>
                        <TouchableOpacity style={{ marginTop: 19 }} onPress={() => nav.navigate('login', { screen })}>
                            <Typhography
                                size={16}
                                style={[styles.loginLink, { color: theme === 'light' ? Colors.light.btn : Colors.dark.btn }]}
                            >
                                Log in
                            </Typhography>
                        </TouchableOpacity>
                    </View>
                </View>
        </SafeAreaView>
    );
};

const getStyles = (theme, gg) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            height: height,
            justifyContent: 'space-between'
        },
        heading: {
            fontWeight: 'bold',
            marginBottom: 15,
            textAlign: 'center',
            color: gg.textColor.color,
        },
        passwordContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        orText: {
            color: '#79B939',
            marginTop: 20,
            marginBottom: 20,
            textAlign: 'center',
        },
        socialButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 15,
            width: '33%',
            marginBottom: 10,
        },
        socialIcon: {
            width: 20,
            height: 20,
        },
        loginText: {
            marginTop: 20,
            textAlign: 'center',
            color: gg.textColor.color,
        },
        loginLink: {
            color: 'blue',
        },
        inputContainer: {
            marginBottom: 20,
            borderBottomWidth: 1,
            borderColor: '#79B939',
            borderRadius: 8,
            padding: 7,
            width: width / 1.1,
        },
        label: {
            fontSize: 16,
            marginBottom: 5,
            color: gg.textColor.color,
        },
        input: {
            color: gg.textColor.color,
        },
    });

export default Signup;
