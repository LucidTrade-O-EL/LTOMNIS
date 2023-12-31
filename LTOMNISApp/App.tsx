/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import Tabs from './navigation/Tabs';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {setHasViewedOnboarding, setIsSignedIn} from './ReduxStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from './screens/SelectLanguage/i18n'; // Adjust the import path based on your project structure
import {AppState} from './rootReducer'; // Ensure this is correctly imported
import OfferSent from './screens/MyFeed/Lender/OfferSent';
import TransactionHistoryDetails from './screens/TransactionHistory/TransactionHistoryDetails';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TransactionHistoryTax from './screens/TransactionHistory/TransactionHistoryTax';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import IdVerify from './PlaidAPI/IdVerify';
import PlaidLinkButton from './PlaidAPI/PlaidLinkButton';
import CreditScoreDisplay from './PlaidAPI/creditScoreDisplay';
import WithdrawMoneyScreen from './screens/WithdrawMoney/WithdrawMoneyScreen';
import OnboardingManager from './screens/onboarding/OnboardingManager';
import LanguagesSettings from './screens/MyProfile/LanguagesSettings';
import SelectLang from './screens/onboarding/SelectLang';
import {
  RootStackParamList,
  HomeStackNavigatorProps,
  FeedStackNavigatorProps,
  SpotlightStackNavigatorProps,
} from './types';
import {SplashScreenProps} from './types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import './screens/SelectLanguage/i18n';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import OfferTransactionHistory from './screens/NewOffers/Borrower/ClosedOffers/OfferTransactionHistory';
import IdentityVerificationScreen from './screens/SignUp/IdentityVerificationScreen';
import CreateLinkToken from './screens/SignUp/CreateLinkToken';
import OfferScreenLender from './screens/NewOffers/Lender/OfferScreenLender';
import ActiveOfferDetails from './screens/NewOffers/Lender/SentOffers/ActiveOfferDetails';
import ActiveOfferLenderDetails from './screens/NewOffers/Lender/ActiveOffersLenders/ActiveOfferLenderDetails';
import ClosedOfferGiftAccepted from './screens/NewOffers/Lender/ClosedOfferLenders/ClosedOfferGiftAccepted';
import LoanDetailsScreen from './screens/NewOffers/Borrower/ActiveOffers/LoanDetailsScreen';
import MyFeedScreen from './screens/MyFeed/MyFeedScreen';
import PostDetails from './screens/MyFeed/Lender/PostDetails';
import PostOffer from './screens/MyFeed/Lender/PostOffer';
import FeedSummary from './screens/MyFeed/Borrower/FeedSummary';
import OfferSentSuccessful from './screens/MyFeed/OfferSentSuccessful';
import FriendsProfile from './screens/FriendsProfile/FriendsProfile';
import LevelsScreen from './screens/OMNISScore/ScoreBreakDown/Levels/LevelsScreen';
import SpotlightScreen from './screens/Spotlight/SpotlightScreen';
import OfferScreen from './screens/NewOffers/Borrower/NewOffersBorrower/OfferScreen';
import NewOfferDetails from './screens/NewOffers/Borrower/NewOffersBorrower/NewOfferDetails';
import ChoosePaymentPlanScreen from './screens/NewOffers/Borrower/NewOffersBorrower/ChoosePaymentPlanScreen';
import PaymentChosenScreen from './screens/NewOffers/Borrower/NewOffersBorrower/PaymentChosenScreen';

type MainStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const FeedStack = createNativeStackNavigator();
const CombinedStack = createNativeStackNavigator();
const SpotlightStack = createNativeStackNavigator();

// Define a combined stack

let value: unknown;
// If you are sure value is a string
let stringValue = value as string;

// Combined Stack Navigator
function CombinedStackNavigator() {
  return (
    <CombinedStack.Navigator screenOptions={{headerShown: false}}>
      {/* Onboarding Screens */}
      {/* <CombinedStack.Screen name="SplashScreen" component={SplashScreen} />
      <CombinedStack.Screen name="SelectLang" component={SelectLang} />
      <CombinedStack.Screen
        name="OnboardingManager"
        component={OnboardingManager}
      />
      <CombinedStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <CombinedStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <CombinedStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
      <CombinedStack.Screen
        name="OnboardingScreen4"
        component={OnboardingScreen4}
      /> */}

      {/* <CombinedStack.Screen name="SignInScreen" component={SignInScreen} />
      <CombinedStack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
      <CombinedStack.Screen
        name="CreateLinkToken"
        component={CreateLinkToken}
      />
      {/* <CombinedStack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
      {/* <CombinedStack.Screen name="Verification" component={Verification} />
      <CombinedStack.Screen
        name="CreateNewPassword"
        component={CreateNewPassword}
      />
      <CombinedStack.Screen name="PlaidLink" component={PlaidLinkButton} /> */}
      <CombinedStack.Screen
        name="IdentityVerificationScreen"
        component={IdentityVerificationScreen}
      />
      {/* <CombinedStack.Screen
        name="CreditScoreDisplay"
        component={CreditScoreDisplay}
      /> */}
    </CombinedStack.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Tabs" component={Tabs} />
    </MainStack.Navigator>
  );
}

const App = () => {
  const [hasViewedOnboarding, setHasViewedOnboarding] = useState(false);

  const isTabBarVisible = useSelector((state: AppState) => state.tabBar?.isVisible);


  // const hasCompletedVerify = useSelector(state => state.verify.hasCompletedOnboarding);

  useEffect(() => {
    const checkOnboarding = async () => {
      const viewedOnboarding = await AsyncStorage.getItem(
        'hasViewedOnboarding',
      );
      if (viewedOnboarding !== null) {
        setHasViewedOnboarding(viewedOnboarding === 'true');
      }
    };

    checkOnboarding();
  }, []);

  const onOnboardingFinish = async () => {
    await AsyncStorage.setItem('hasViewedOnboarding', 'true');
    setHasViewedOnboarding(true);
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        {hasViewedOnboarding && isTabBarVisible ? (
          // {!hasViewedOnboarding && !token ? (
          // Use CombinedStackNavigator here
          <RootStack.Screen
            name="CombinedStack"
            component={CombinedStackNavigator}
          />
        ) : (
          <RootStack.Screen
            name="MainStackNavigator"
            component={MainStackNavigator}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default function Root() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <App />
      </GestureHandlerRootView>
    </Provider>
  );
}

export {App};

export type HomeStackParamList = {
  HomeScreen: undefined;
  TransactionHistoryDetails: undefined;
  TransactionHistoryTax: undefined;
  OfferScreenLender: undefined;
  OfferTransactionHistory: undefined;
  WithdrawMoneyScreen: undefined;
  ActiveOfferDetails: undefined;
  ActiveOfferLenderDetails: undefined;
  ClosedOfferGiftAccepted: undefined;
  LoanDetailsScreen: undefined;
  OfferScreen: undefined;
  NewOfferDetails: undefined;
  ChoosePaymentPlanScreen: undefined;
  PaymentChosenScreen: undefined;
  OfferSentSuccessful: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigator({
  navigation,
  route,
}: HomeStackNavigatorProps) {
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'FeedScreen';
    const hideTabBarScreens = ['OfferTransactionHistory',]; // Add other screen names as needed
    const tabBarVisible = !hideTabBarScreens.includes(routeName);

    navigation.getParent()?.setOptions({tabBarVisible});
  }, [navigation, route]);

  return (
    <HomeStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="WithdrawMoneyScreen"
        component={WithdrawMoneyScreen}

      />
      <HomeStack.Screen
        name="OfferTransactionHistory"
        component={OfferTransactionHistory}
      />
      <HomeStack.Screen
        name="OfferScreenLender"
        component={OfferScreenLender}
      />
      <HomeStack.Screen
        name="ActiveOfferDetails"
        component={ActiveOfferDetails}
      />
      <HomeStack.Screen
        name="ActiveOfferLenderDetails"
        component={ActiveOfferLenderDetails}
      />
      <HomeStack.Screen
        name="ClosedOfferGiftAccepted"
        component={ClosedOfferGiftAccepted}
      />
      <HomeStack.Screen
        name="TransactionHistoryDetails"
        component={TransactionHistoryDetails}
      />
      <HomeStack.Screen
        name="TransactionHistoryTax"
        component={TransactionHistoryTax}
        options={{ tabBarVisible: false }}
      />
      <HomeStack.Screen
        name="LoanDetailsScreen"
        component={LoanDetailsScreen}
      />
      <HomeStack.Screen name="OfferScreen" component={OfferScreen} />
      <HomeStack.Screen name="NewOfferDetails" component={NewOfferDetails} />
      <HomeStack.Screen
        name="ChoosePaymentPlanScreen"
        component={ChoosePaymentPlanScreen}
      />
      <HomeStack.Screen
        name="PaymentChosenScreen"
        component={PaymentChosenScreen}
      />
      <HomeStack.Screen
        name="OfferSentSuccessful"
        component={OfferSentSuccessful}
      />
    </HomeStack.Navigator>
  );
}

//  Feed Screen

export type FeedStackParamList = {
  MyFeedScreen: undefined;
  PostDetails: undefined;
  PostOffer: undefined;
  FeedSummary: undefined;
  OfferSent: undefined;
  OfferSentSuccessful: undefined;
  FriendsProfile: undefined;
  LevelsScreen: undefined;
  SpotlightScreen: undefined;
  SpotlightStackNavigator: undefined;
};

export function FeedStackNavigator({
  navigation,
  route,
}: FeedStackNavigatorProps) {
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'MyFeedScreen';
    const hideTabBarScreens = ['OfferTransactionHistory']; // Add other screen names as needed
    const tabBarVisible = !hideTabBarScreens.includes(routeName);

    navigation.getParent()?.setOptions({tabBarVisible});
  }, [navigation, route]);

  return (
    <FeedStack.Navigator
      initialRouteName="MyFeedScreen"
      screenOptions={{headerShown: false}}>
      <FeedStack.Screen name="MyFeedScreen" component={MyFeedScreen} />
      <FeedStack.Screen name="PostDetails" component={PostDetails} />
      <FeedStack.Screen name="PostOffer" component={PostOffer} />
      <FeedStack.Screen name="FeedSummary" component={FeedSummary} />
      <FeedStack.Screen name="OfferSent" component={OfferSent} />
      <FeedStack.Screen name="FriendsProfile" component={FriendsProfile} />
      <FeedStack.Screen name="LevelsScreen" component={LevelsScreen} />
      <FeedStack.Screen
        name="SpotlightStackNavigator"
        component={SpotlightStackNavigator}
      />
      <FeedStack.Screen
        name="OfferSentSuccessful"
        component={OfferSentSuccessful}
      />
    </FeedStack.Navigator>
  );
}

// Spotlight

export type SpotlightStackParamList = {
  SpotlightStackNavigator: undefined;
  PostDetails: undefined;
  PostOffer: undefined;
  FeedSummary: undefined;
  OfferSent: undefined;
  OfferSentSuccessful: undefined;
  FriendsProfile: undefined;
  LevelsScreen: undefined;
  SpotlightScreen: undefined;
};

export function SpotlightStackNavigator({
  navigation,
  route,
}: SpotlightStackNavigatorProps) {
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'MyFeedScreen';
    const hideTabBarScreens = ['OfferTransactionHistory']; // Add other screen names as needed
    const tabBarVisible = !hideTabBarScreens.includes(routeName);

    navigation.getParent()?.setOptions({tabBarVisible});
  }, [navigation, route]);

  return (
    <SpotlightStack.Navigator
      initialRouteName="SpotlightScreen"
      screenOptions={{headerShown: false}}>
      <SpotlightStack.Screen
        name="SpotlightScreen"
        component={SpotlightScreen}
      />
      <SpotlightStack.Screen name="PostDetails" component={PostDetails} />
      <SpotlightStack.Screen name="PostOffer" component={PostOffer} />
      <SpotlightStack.Screen name="FeedSummary" component={FeedSummary} />
      <SpotlightStack.Screen name="OfferSent" component={OfferSent} />
      <SpotlightStack.Screen name="FriendsProfile" component={FriendsProfile} />
      <SpotlightStack.Screen name="LevelsScreen" component={LevelsScreen} />
      <SpotlightStack.Screen
        name="OfferSentSuccessful"
        component={OfferSentSuccessful}
      />
    </SpotlightStack.Navigator>
  );
}
