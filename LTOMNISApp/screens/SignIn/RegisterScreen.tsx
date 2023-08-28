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
import {color} from '@rneui/base';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);

  const getName = (text: React.SetStateAction<string>) => {
    setName(text);
  };
  const getEmail = (text: React.SetStateAction<string>) => {
    setEmail(text);
  };
  const getPassword = (text: React.SetStateAction<string>) => {
    if (text.length < 8) {
      setInvalidPassword(true);
    }
    setPassword(text);
  };
  const getConfirmPassword = (text: React.SetStateAction<string>) => {
    setConfirmPassword(text);
  };

  return (
    <View style={styles.background}>
      <Text style={styles.text}>Let's Get Started!</Text>
      <Text style={styles.smallText}>Create your account</Text>
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
          Full Name
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={name}
          onChangeText={getName}
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
          Email
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={email}
          onChangeText={getEmail}
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
          Password
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={password}
          onChangeText={getPassword}
          aria-label="Password"
          placeholder="password"
          placeholderTextColor={'#fff'}
        />
        {invalidPassword ? (
          <Text style={[styles.smallText, {color: 'red'}]}>
            Password must be atleast 8 characters
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
          Confirm Password
        </Text>
        <TextInput
          style={[styles.textImputBox, styles.smallText]}
          value={confirmPassword}
          onChangeText={getConfirmPassword}
          aria-label=" Confirm Password"
          placeholder="password"
          placeholderTextColor={'#fff'}
        />
      </View>

      {/* signup  */}
      <View style={styles.view2}>
        <Pressable style={styles.button} onPress={() => {}}>
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
              Or Register with
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
            Already have an account?
          </Text>
          <Text style={{color: '#BDAE8D', fontSize: 14}}> Login</Text>
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
