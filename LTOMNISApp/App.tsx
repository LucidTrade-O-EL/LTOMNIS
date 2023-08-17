/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import NFCDone from './screens/NFC/NFCDone';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen
          name='SignUp'
          component={SignUpScreen}
        /> */}
        {/*  */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen
          name="InternationalCreditReportAccess"
          component={InternationalCreditReportAccess} />
          */}
        {/* <Stack.Screen
          name='Register'
          component={RegisterScreen}
        /> */}
        {/* <Stack.Screen
          name='ForgotPassword'
          component={HomeScreen}
        />  */}
        {/* <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
        />  */}
        {/* <Stack.Screen
          name='SignIn'
          component={SignInScreen}
        /> */}
        {/* <Stack.Screen
          name='Onboarding1'
          component={OnboardingScreen1}
        /> */}
        {/* <Stack.Screen
          name='Onboarding2'
          component={OnboardingScreen2}
        /> */}
        {/* <Stack.Screen
          name='Onboarding3'
          component={OnboardingScreen3}
        /> */}
        {/* <Stack.Screen
          name='Onboarding4'
          component={OnboardingScreen4}
        /> */}
        {/* <Stack.Screen
          name='CreateNewPassword'
          component={CreateNewPassword}
        /> */}
        {/* <Stack.Screen
          name='Verification'
          component={Verification}
        /> */}
        {/* <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
        /> */}
        {/* <Stack.Screen
          name='SignIn'
          component={SignInScreen}
        /> */}
        {/* <Stack.Screen
          name='NFCFaceId'
          component={NFCFaceId}
        /> */}
        {/* <Stack.Screen
          name='NFCHoldNearReader'
          component={NFCHoldNearReader}
        /> */}
        {/* <Stack.Screen name="NFCDone" component={NFCDone} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
