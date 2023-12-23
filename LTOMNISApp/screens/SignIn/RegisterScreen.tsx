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
import { useDispatch } from 'react-redux';
import { setId } from '../../Redux/actions/idActions';


export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

    if (name.length < 2) {
      setErrorMessage('Name must be at least 2 characters long.');
      return;
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
          name,
          email,
          password,
        },
      );
    
      const user = res.data; // Use `res.data` to access the response data
      console.log("This is our response data", user);
    
      if (user) {
        navigation.navigate('CreateLinkToken', {userId: user.userId});
        dispatch(setId(user.userId));
        console.log('User ID', user.userId)
        // Navigate to CreateLinkToken screen with the user ID
      } else {
        console.log('No user data received');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }    

  return (
    <View style={styles.background}>
      <Text style={styles.text}>lets Get Started</Text>
      <Text style={styles.smallText}>create Your Account</Text>
      <View style={styles.view1}>
        {/* input boxes */}
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            opacity: 0.6,
            textAlign: 'left',
            alignSelf: 'flex-start',
            paddingLeft: 20,
          }}>
          fullName
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={name}
          onChangeText={text => setName(text)}
          aria-label="Name"
          placeholder="Kayne West"
          placeholderTextColor={'#fff'}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            opacity: 0.6,
            textAlign: 'left',
            alignSelf: 'flex-start',
            paddingLeft: 20,
          }}>
          email
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={email}
          onChangeText={text => setEmail(text)}
          aria-label="Email"
          placeholder="kanyewest@gmail.com"
          placeholderTextColor={'#fff'}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            opacity: 0.6,
            textAlign: 'left',
            alignSelf: 'flex-start',
            paddingLeft: 20,
          }}>
          password
        </Text>
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
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            opacity: 0.6,
            textAlign: 'left',
            alignSelf: 'flex-start',
            paddingLeft: 20,
          }}>
          confirm Password
        </Text>
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
            <Image
              source={require('../../assets/apple.png')}
              style={styles.image}
            />
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
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    paddingTop: 75,
    height: '100%',
  },

  button: {
    width: '90%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 20,
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
    marginBottom: 20,
    marginTop: 10,
  },

  view1: {
    alignItems: 'center',
    marginTop: 50,
    color: '#fff',
    width: '100%',
  },

  view2: {
    alignItems: 'center',
    marginTop: '2%',
    color: '#fff',
    width: '100%',
  },

  view3: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

