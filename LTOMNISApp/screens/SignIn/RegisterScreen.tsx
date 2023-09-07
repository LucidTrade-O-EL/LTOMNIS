import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Divider} from '@rneui/themed';
import axios from 'axios';
import i18n from '../../assets/constants/Transaltion/i18n';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);

  const register = async () => {
    try {
      const options = {
        method: 'POST',

        url: 'https://api.lucidtrades.com/api/Account/register',

        data: {name, email, password, confirmPassword},

        headers: {
          Accept: 'application/json',

          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);

      console.log('data payload ', res.data, res.headers);

      const user = res.data;

      if (user == null) {
        console.log('No user data recieved');
      }

      console.log('user: ', user);
    } catch (error: any) {
      console.error('An error occured:', error);
    }
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>{i18n.t('letsGetStarted')}</Text>
      <Text style={styles.smallText}>{i18n.t('createYourAccount')}</Text>
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
          {i18n.t('fullName')}
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
          {i18n.t('email')}
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
          {i18n.t('password')}
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={password}
          onChangeText={text => {
            // changed to inline function to handle password length check
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
            {i18n.t('passwordLengthWarning')}
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
          {i18n.t('confirmPassword')}
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
          <Text style={styles.buttonText}>{i18n.t('signUp')}</Text>
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
              {i18n.t('orRegisterWith')}
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

        <Pressable style={styles.login} onPress={() => {}}>
          <Text style={{color: 'white', fontSize: 14}}>
            {i18n.t('alreadyHaveAccount')}
          </Text>
          <Text style={{color: '#BDAE8D', fontSize: 14}}>
            {' '}
            {i18n.t('login')}
          </Text>
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
