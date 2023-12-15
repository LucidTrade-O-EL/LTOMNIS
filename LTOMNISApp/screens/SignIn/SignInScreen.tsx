import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Divider} from '@rneui/themed';
import PasswordValidation from '../auth/passwordValidation';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setToken} from '../../actions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';

GoogleSignin.configure({
  // You can find the webClientId in your Google Developer Console project
  webClientId:
    '812122915742-6i3lotl64fsunk78ka9f2rfupupal8mk.apps.googleusercontent.com',
  iosClientId:
    '812122915742-3docgp9krobbp8dm3e80vo33k9vroeud.apps.googleusercontent.com', // Your iOS client ID
});

interface SignInScreenProps {
  token: string;
}

const SignInScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<{token?: string}>({});
  const [userToken, setUserToken] = useState('');

  const signIn = async () => {
    try {
      const options = {
        method: 'POST',
        url: 'https://api.lucidtrades.com/api/Account/login',
        data: {email, password},
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);
      if (res.status !== 200) {
        throw new Error('Non-OK status code: ' + res.status);
      }

      console.log('data payload ', res.data, res.headers);

      const user = res.data;
      const token = user.token;

      // Save token to AsyncStorage
      if (token) {
        await AsyncStorage.setItem('token', token);
      }

      if (user != null) {
        setUserToken(token);
        setUser(user);
        return token;
      }

      console.log(`this is the token ${userToken}`);

      setUserToken(token);
      setUser(user);

      console.log('user: ', user);
    } catch (error: any) {
      console.error('An error occured:', error);
    }
  };

  // In your SignInScreen component
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    const token = await signIn();
    if (token) {
      dispatch(setToken(token));
    }
  };

  // In your App component
  React.useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      dispatch(setToken(storedToken!));
    };

    loadToken();
  }, [dispatch]);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;

      // Send the ID token to your backend via HTTPS
      sendTokenToBackend(idToken);
    } catch (error) {
      console.log(error);
    }
  };

  const sendTokenToBackend = async idToken => {
    try {
      const response = await fetch('YOUR_BACKEND_URL/api/verify-google-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token: idToken}),
      });

      if (!response.ok) {
        throw new Error('Response not ok');
      }

      const data = await response.json();
      console.log(data); // Handle the response data as needed
    } catch (error) {
      console.log('Error sending token to backend', error);
    }
  };

// APPLE AUTH

async function onAppleButtonPress() {
  // Start the sign-in request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  // Get the user's identity token
  const identityToken = appleAuthRequestResponse.identityToken;

  // Send the identity token to your server for verification and sign-in
  sendTokenToYourServer(identityToken);
}

  return (
    <SafeAreaView style={styles.Background}>
      <Text style={{color: 'white', fontSize: 20, marginBottom: 168}}>
        Log In
      </Text>

      {/* Email */}
      <View style={styles.buttonContainer}>
        <View style={{marginBottom: 8, alignSelf: 'center', width: '90%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              opacity: 0.6,
              textAlign: 'left',
            }}>
            Email
          </Text>
        </View>
        <View style={styles.emailButton}>
          <TextInput
            style={[styles.textInput, email ? styles.textActive : null]}
            placeholder="Enter your email"
            placeholderTextColor="rgba(255,255,255, 0.6)"
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            value={email}
            // autoCompleteType="email"
          />
        </View>
      </View>

      {/* Password */}
      <View style={styles.passwordButtonContainer}>
        <View style={{marginBottom: 16, alignSelf: 'center', width: '90%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              opacity: 0.6,
              textAlign: 'left',
            }}>
            Password
          </Text>
        </View>
        <View style={styles.passwordButton}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <TextInput
              style={[styles.textInput, password ? styles.textActive : null]}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255,255,255, 0.6)"
              keyboardType="email-address"
              onChangeText={text => setPassword(text)}
              value={password}
              // autoCompleteType="email"
            />
            <Pressable>
              <IonIcon name="eye-outline" size={24} color="#B08766" />
            </Pressable>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{marginTop: 8, alignSelf: 'center', width: '90%'}}>
          <Text
            style={{
              color: '#B08766',
              fontSize: 13,
              opacity: 0.6,
              textAlign: 'right',
            }}>
            Forgot Password?
          </Text>
        </Pressable>
      </View>

      {/* Sign In Button */}
      <Pressable
        onPress={async () => await handleSignIn()}
        style={[styles.SignButton, styles.SignButtonOutlined]}>
        <Text style={[styles.SignButtonText, styles.SignButtonTextOutlined]}>
          Sign In
        </Text>
      </Pressable>

      {/* navigation.navigate('SomeOtherScreen') */}
      {/* Or log in with */}

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Divider style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <Text style={{marginHorizontal: 10, color: 'white'}}>
            Or login with
          </Text>
          <Divider style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
      </View>

      {/* Google and Apple */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Pressable
          style={{
            width: '46%',
            height: 56,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#BDAE8D',
            justifyContent: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
          }}
          onPress={googleSignIn}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '60%',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../assets/google.png')}
              style={{height: 24, width: 24}}
            />
            <Text style={{color: 'white', fontSize: 18}}>Google</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            width: '46%',
            height: 56,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#BDAE8D',
            justifyContent: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '50%',
              alignSelf: 'center',
            }}>
            <IonIcon name="logo-apple" size={24} color="#fff" />
            <Text style={{color: 'white', fontSize: 18}}>Apple</Text>
            {appleAuth.isSupported && (
              <AppleButton
                style={{width: 200, height: 60}}
                buttonStyle={AppleButton.Style.WHITE}
                buttonType={AppleButton.Type.SIGN_IN}
                onPress={() => onAppleButtonPress()}
              />
            )}
          </View>
        </Pressable>
      </View>

      <Pressable
        style={styles.newToOmnisContainer}
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{color: 'white', fontSize: 14}}>New to OMNIS?</Text>
        <Text style={{color: '#BDAE8D', fontSize: 14}}> Register</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  image: {
    // margin: 10,
    resizeMode: 'contain',
    width: '80%',
    aspectRatio: 1, // This keeps image square while adjusting to screen width
    height: 'auto',
  },
  emailButton: {
    width: '90%',
    height: 50,
    borderColor: 'rgba(255,255,255, 0.6)',
    borderWidth: 1,
    color: '#fff',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 20,
  },
  buttonOutlined: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#BDAE8D',
  },
  buttonText: {
    color: 'white',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  buttonTextOutlined: {
    color: '#BDAE8D',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  //   Password Styling

  passwordButtonContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  passwordButton: {
    width: '90%',
    height: 50,
    borderColor: 'rgba(255,255,255, 0.6)',
    borderWidth: 1,
    color: '#fff',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 20,
    flexDirection: 'row',
  },

  //   Sign In styling

  SignButton: {
    width: '90%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 110,
  },
  SignButtonOutlined: {
    borderWidth: 2,
    borderColor: '#BDAE8D',
  },
  SignButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
  SignButtonTextOutlined: {},

  //   New to OMNIS

  newToOmnisContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  // Addtional

  textInput: {
    color: 'rgba(255,255,255, 0.6)', // default color when there is no input
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'center',
    width: '90%',
  },
  textActive: {
    color: 'white', // color when there is input
  },
});

export default SignInScreen;
