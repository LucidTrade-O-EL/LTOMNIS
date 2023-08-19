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
import SplashScreen from './screens/SplashScreen/SplashScreen';
import NFCDone from './screens/NFC/NFCDone';
import RegisterScreen from './screens/auth/RegisterScreen';
import OnboardingScreen1 from './screens/onboarding/OnboardingScreen1';
import HomeScreen from './screens/HomeScreen';
import NFCFaceId from './screens/NFC/NFCFaceId';
import SignInScreen from './screens/auth/SignInScreen';
import ForgotPassword from './screens/auth/ForgotPassword';
import Verification from './screens/auth/Verification';
import CreateNewPassword from './screens/auth/CreateNewPassword';
import OnboardingScreen4 from './screens/onboarding/OnboardingScreen4';
import OnboardingScreen3 from './screens/onboarding/OnboardingScreen3';
import OnboardingScreen2 from './screens/onboarding/OnboardingScreen2';
import InternationalCreditReportAccess from './screens/add_post/InternationalCreditReportAccess';
import NFCHoldNearReader from './screens/NFC/NFCHoldNearReader';
import SignUpScreen from './screens/auth/SignUpScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
        {/*  */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen
          name="InternationalCreditReportAccess"
          component={InternationalCreditReportAccess}
        /> */}

        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        {/* <Stack.Screen name="Onboarding1" component={OnboardingScreen1} /> */}
        {/* <Stack.Screen name="Onboarding2" component={OnboardingScreen2} /> */}
        {/* <Stack.Screen name="Onboarding3" component={OnboardingScreen3} /> */}
        {/* <Stack.Screen name="Onboarding4" component={OnboardingScreen4} /> */}
        {/* <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} /> */}
        {/* <Stack.Screen name="Verification" component={Verification} /> */}
        {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
        {/* <Stack.Screen name="NFCFaceId" component={NFCFaceId} /> */}
        {/* <Stack.Screen name="NFCHoldNearReader" component={NFCHoldNearReader} /> */}
        {/* <Stack.Screen name="NFCDone" component={NFCDone} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
