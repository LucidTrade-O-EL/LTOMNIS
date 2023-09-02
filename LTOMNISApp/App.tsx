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
import RegisterScreen from './screens/SignIn/RegisterScreen';
import OnboardingScreen1 from './screens/onboarding/OnboardingScreen1';
import HomeScreen from './screens/HomeScreen';
import NFCFaceId from './screens/NFC/NFCFaceId';
import SignInScreen from './screens/SignIn/SignInScreen';
import ForgotPassword from './screens/auth/ForgotPassword';
import Verification from './screens/auth/Verification';
import CreateNewPassword from './screens/auth/CreateNewPassword';
import OnboardingScreen4 from './screens/onboarding/OnboardingScreen4';
import OnboardingScreen3 from './screens/onboarding/OnboardingScreen3';
import OnboardingScreen2 from './screens/onboarding/OnboardingScreen2';
import InternationalCreditReportAccess from './screens/add_post/InternationalCreditReportAccess';
import NFCHoldNearReader from './screens/NFC/NFCHoldNearReader';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import Tabs from './navigation/Tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NewOffersScreen from './screens/NewOffers/NewOffersScreen';
import OfferScreen from './screens/NewOffers/OfferScreen';
import OfferScreenTopTabs from './screens/NewOffers/OfferScreenTopTabs';
import NFCAcceptFriend from './screens/NFC/NFCAcceptFriend';
import NewOfferDetails from './screens/NewOffers/NewOfferDetails';
import ChoosePaymentPlanScreen from './screens/NewOffers/ChoosePaymentPlanScreen';
import PaymentChosenScreen from './screens/NewOffers/PaymentChosenScreen';
import SuccessOffer from './screens/NewOffers/SuccessOffer';
import ActiveOffers from './screens/NewOffers/ActiveOffers/ActiveOffers';
import ActiveOfferMakePayment from './screens/NewOffers/ActiveOffers/ActiveOfferMakePayment';
import LoanDetailsScreen from './screens/NewOffers/ActiveOffers/LoanDetailsScreen';
import TransactionHistory from './assets/constants/Components/CustomTransactionButton';
import OfferTransactionHistory from './screens/NewOffers/ClosedOffers/OfferTransactionHistory';
import OfferDetailsAccepted from './screens/NewOffers/ClosedOffers/OfferDetailsAccepted';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <GestureHandlerRootView style={{ flex: 1 }}>
        <Tabs  />
      </GestureHandlerRootView> */}

        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
        {/*  */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen
          name="InternationalCreditReportAccess"
          component={InternationalCreditReportAccess}
        /> */}
        {/* <Stack.Screen name="OfferScreenTopTabs" component={OfferScreenTopTabs} /> */}
        {/* <Stack.Screen name="NewOffersScreen" component={NewOffersScreen} /> */}
        {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        {/* <Stack.Screen name="NewOffersScreen" component={NewOffersScreen} /> */}
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        {/* <Stack.Screen name="Onboarding1" component={OnboardingScreen1} /> */}
        {/* <Stack.Screen name="Onboarding2" component={OnboardingScreen2} /> */}
        {/* <Stack.Screen name="Onboarding3" component={OnboardingScreen3} /> */}
        {/* <Stack.Screen name="Onboarding4" component={OnboardingScreen4} /> */}
        {/* <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} /> */}
        {/* <Stack.Screen name="Verification" component={Verification} /> */}
        {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
        {/* <Stack.Screen name="SuccessOffer" component={SuccessOffer} /> */}
        {/* <Stack.Screen name="PaymentChosenScreen" component={PaymentChosenScreen} /> */}
        {/* <Stack.Screen name="ChoosePaymentPlanScreen" component={ChoosePaymentPlanScreen} /> */}
        {/* <Stack.Screen name="NewOfferDetails" component={NewOfferDetails} /> */}
        <Stack.Screen name="OfferDetailsAccepted" component={OfferDetailsAccepted} />
        {/* <Stack.Screen name="OfferTransactionHistory" component={OfferTransactionHistory} /> */}
        {/* <Stack.Screen name="LoanDetailsScreen" component={LoanDetailsScreen} /> */}
        {/* <Stack.Screen name="ActiveOfferMakePayment" component={ActiveOfferMakePayment} /> */}
        {/* <Stack.Screen name="OfferScreen" component={OfferScreen} /> */}
        {/* <Stack.Screen name="ActiveOffers" component={ActiveOffers} /> */}
        {/* <Stack.Screen name="NFCFaceId" component={NFCFaceId} /> */}
        {/* <Stack.Screen name="NFCHoldNearReader" component={NFCHoldNearReader} /> */}
        {/* <Stack.Screen name="NFCDone" component={NFCDone} /> */}

        {/* </Stack.Navigator> */}
{/* 
        <Stack.Screen name="NFCAcceptFriend" component={NFCAcceptFriend} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
