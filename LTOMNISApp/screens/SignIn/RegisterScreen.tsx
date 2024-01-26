import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import {Divider} from '@rneui/themed';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {setId} from '../../Redux/actions/idActions';
import appleAuth, {
  AppleButton,
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function RegisterScreen() {

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true); // State to track loading status
  // const id = useSelector((state) => state.id.id);
  // const linkToken = useSelector(state => state.linkToken.linkToken);
  // const dispatch = useDispatch();

  const register = async () => {
    const passwordRegex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 8 characters, contain a number and a special character.',
      );
      setInvalidPassword(true);
      return;
    } else {
      setInvalidPassword(false);
    }


    if (errorMessage) {
      Alert.alert('Error', errorMessage);
      return;
    }

    setErrorMessage(null);

    try {
      const res = await axios.post(
        'http://localhost:8080/api/omnis/account/register_login',
        {
          email,
          password,
        },
      );

      const user = res.data; // Use `res.data` to access the response data
      console.log('This is our response data', user);

      if (user) {
        navigation.navigate('CreateLinkToken', {userId: user.userId});
        dispatch(setId(user.userId));
        console.log('User ID', user.userId);

        // Navigate to CreateLinkToken screen with the user ID
      } else {
        console.log('No user data received');
      }
    } catch (error) {
      console.error('An error occurred Type2:', error);
    }
  };

  const onAppleButtonPress = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });

      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === appleAuth.State.AUTHORIZED) {
        // Extract user data
        const {email, fullName} = appleAuthRequestResponse;
        const userData = {
          email,
          fullName,
          phoneNumber,
          appleIdToken: appleAuthRequestResponse.identityToken, // This is important for backend verification
        };

        // Send data to backend for verification and user record creation/updation
        const res = await axios.post(
          'http://localhost:8080/api/omnis/account/register_login',
          userData,
        );
        const {sessionToken} = res.data;

        // Store sessionToken securely, e.g., in AsyncStorage
        // Handle navigation or other logic
      }
    } catch (error) {
      console.error('Apple Sign-In error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text}>Lets Get Started</Text>
      <Text style={styles.smallText}>Create Your Account</Text>
      <View style={styles.view1}>
        {/* input boxes */}
        <Text style={styles.boxSpacing}>Email</Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={email}
          onChangeText={text => setEmail(text)}
          aria-label="Email"
          placeholder="kanyewest@gmail.com"
          placeholderTextColor={'#fff'}
        />
        <Text style={styles.boxSpacing}>Password</Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={password}
          onChangeText={text => {
            if (text.length < 8) {
              setInvalidPassword(true);
            } else {
              setInvalidPassword(false);
            }
            setPassword(text);
          }}
          aria-label="Password"
          placeholder="password"
          placeholderTextColor={'#fff'}
        />
        {invalidPassword ? (
          <Text style={[styles.smallText, {color: 'red'}]}>
            password Length Warning
          </Text>
        ) : (
          <Text> </Text>
        )}
        <Text style={styles.boxSpacing}>Confirm Password</Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)} // Use setConfirmPassword instead of getConfirmPassword
          aria-label="Confirm Password"
          placeholder="password"
          placeholderTextColor={'#fff'}
        />
      </View>

      {/* signup  */}
      <View style={styles.view2}>
        <Pressable style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        {/* or Register with */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
              height: 50,
              marginVertical: 30,
            }}>
            <Divider style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
            <Text style={{marginHorizontal: 10, color: '#fff', fontSize: 12}}>
              or Register With
            </Text>
            <Divider style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
          </View>
        </View>

        {/* google and apple */}
        <View style={styles.view3}>
          <Pressable style={styles.googleAndApple}>
            <Image
              source={require('../../assets/google.png')}
              style={styles.image}
            />
          </Pressable>
          <Pressable style={styles.googleAndApple}>
            <View style={styles.image}>
              {appleAuth.isSupported && (
                <AppleButton
                  style={styles.imageApple}
                  buttonStyle={AppleButton.Style.BLACK}
                  buttonType={AppleButton.Type.SIGN_IN}
                  onPress={() => onAppleButtonPress()}
                />
              )}
            </View>
          </Pressable>
        </View>

        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={{color: 'white', fontSize: 14}}>
            Already Have Account
          </Text>
          <View>
            <Text style={{color: '#BDAE8D', fontSize: 14}}> login</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    height: '100%',
  },

  button: {
    width: '90%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  googleAndApple: {
    alignItems: 'center',
  },

  image: {
    // margin: 10,
    resizeMode: 'contain',
    width: '65%',
    aspectRatio: 1, // This keeps image square while adjusting to screen width
    height: 'auto',
  },

  imageApple: {
    width: '95%',
    height: 60,
    marginTop: 52,
  },

  login: {
    flexDirection: 'row',
  },

  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  smallText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'normal',
  },

  textImputBox: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 16,
    height: 50,
    width: '90%',
    paddingLeft: 10,
    marginVertical: 15,
    // marginTop: 5,
  },

  view1: {
    alignItems: 'center',
    marginTop: 20,
    color: '#fff',
    width: '100%',
  },

  view2: {
    alignItems: 'center',
    marginTop: '40%',
    color: '#fff',
    width: '100%',
  },

  view3: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxSpacing: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
});
