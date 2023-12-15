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
import InternationalCreditReportAccess from './screens/add_post/InternationalCreditReportAccess';
import NFCHoldNearReader from './screens/NFC/NFCHoldNearReader';
import SignUpScreen from './screens/SignUp/SignUpScreen';
import Tabs from './navigation/Tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import NFCAcceptFriend from './screens/NFC/NFCAcceptFriend';
import MyFeedScreen from './screens/MyFeed/MyFeedScreen';
import ChoosePaymentPlanScreen from './screens/NewOffers/Borrower/NewOffersBorrower/ChoosePaymentPlanScreen';

import ActiveOffers from './screens/NewOffers/Borrower/ActiveOffers/ActiveOffers';
import ActiveOfferMakePayment from './screens/NewOffers/Borrower/ActiveOffers/ActiveOfferMakePayment';
import LoanDetailsScreen from './screens/NewOffers/Borrower/ActiveOffers/LoanDetailsScreen';
import TransactionHistory from './assets/constants/Components/CustomTransactionButton';
import OfferTransactionHistory from './screens/NewOffers/Borrower/ClosedOffers/OfferTransactionHistory';
import OfferDetailsAccepted from './screens/NewOffers/Borrower/ClosedOffers/OfferDetailsAccepted';
import BorrowerClosedOffers from './screens/NewOffers/Borrower/ClosedOffers/BorrowerClosedOffers';
import OfferScreen from './screens/NewOffers/Borrower/NewOffersBorrower/OfferScreen';
import NewOfferDetails from './screens/NewOffers/Borrower/NewOffersBorrower/NewOfferDetails';
import OfferScreenLender from './screens/NewOffers/Lender/OfferScreenLender';
import ActiveOfferDetails from './screens/NewOffers/Lender/SentOffers/ActiveOfferDetails';
import ActiveOfferLenderDetails from './screens/NewOffers/Lender/ActiveOffersLenders/ActiveOfferLenderDetails';
import ClosedOfferGiftAccepted from './screens/NewOffers/Lender/ClosedOfferLenders/ClosedOfferGiftAccepted';
import OfferScreenTopTabs from './screens/NewOffers/Borrower/NewOffersBorrower/OfferScreenTopTabs';
import TransactionHistoryFilter from './screens/TransactionHistory/TransactionHistoryFilter';
import DepositMoneyScreen from './screens/DepositMoney/DepositMoneyScreen';
import DepositSuccessful from './screens/DepositMoney/DepositSuccessful';
import AddPostScreen from './screens/add_post/AddPostScreen';
import SpotlightScreen from './screens/Spotlight/SpotlightScreen';
import SpotlightNavOne from './assets/constants/Components/SpotlightNavOne';
import AddFriendScreen from './screens/Spotlight/Friends/AddFriendScreen';
import MakeAGroupScreen from './screens/Spotlight/Groups/MakeAGroupScreen';
import GroupDetailsScreen from './screens/Spotlight/Groups/GroupDetailsScreen';
import GroupBill from './screens/Spotlight/Groups/GroupBill';
import ChooseFriends from './screens/Spotlight/Friends/ChooseFriends';
import GroupDetailsHistoryScreen from './screens/Spotlight/Groups/GroupDetailsHistoryScreen';
import PaymentStatus from './screens/Spotlight/PaymentStatus';
import OMNISScoreScreen from './screens/OMNISScore/OMNISScoreScreen';
import ScoreBreakDown from './screens/OMNISScore/ScoreBreakDown/ScoreBreakDown';
import LevelsScreen from './screens/OMNISScore/ScoreBreakDown/Levels/LevelsScreen';
import LevelDetails from './screens/OMNISScore/ScoreBreakDown/Levels/LevelDetails';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {setHasViewedOnboarding, setIsSignedIn} from './ReduxStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from './rootReducer';
import OfferSent from './screens/MyFeed/Lender/OfferSent';
import TransactionHistoryDetails from './screens/TransactionHistory/TransactionHistoryDetails';
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import TransactionHistoryTax from './screens/TransactionHistory/TransactionHistoryTax';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import IdVerify from './PlaidAPI/IdVerify';
import PlaidLinkButton from './PlaidAPI/PlaidLinkButton';
import CreateLinkToken from './PlaidAPI/CreateLinkToken';
import CreditScoreDisplay from './PlaidAPI/creditScoreDisplay';
import WithdrawMoneyScreen from './screens/WithdrawMoney/WithdrawMoneyScreen';
import OnboardingManager from './screens/onboarding/OnboardingManager';

type MainStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type RootStackParamList = {
  Tabs: undefined;
  SignInScreen: undefined;
  Register: undefined;
  OMNISScoreScreen: undefined;
  LevelDetails: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  HomeScreen: undefined;

  // ... and so on for each screen
};

// Stack Imports

const MainStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();

function AppContent() {
  const token = useSelector((state: AppState) => state.token.token);
  const hasViewedOnboarding = useSelector(
    (state: AppState) => state.app.hasViewedOnboarding,
  );

  useEffect(() => {
    const initializeApp = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      const storedOnboardingStatus = await AsyncStorage.getItem(
        'hasViewedOnboarding',
      );
      store.dispatch(setHasViewedOnboarding(storedOnboardingStatus === 'true'));
      store.dispatch(setIsSignedIn(!!storedToken));
    };
    initializeApp();
  }, []);

  // if (!hasViewedOnboarding) {
  //   return <OnboardingStackNavigator />;
  // }

  return token ? <MainStackNavigator /> : <AuthStackNavigator />;
}

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <NavigationContainer>
        <MainStack.Navigator screenOptions={{headerShown: false}}>
          <MainStack.Screen
            name="OnboardingStack"
            component={OnboardingStackNavigator}
          />
          <MainStack.Screen name="Auth" component={AuthStackNavigator} />
          <MainStack.Screen name="Tabs" component={Tabs} />
        </MainStack.Navigator>
      </NavigationContainer>
    </MainStack.Navigator>
  );
}

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator 
      initialRouteName="SignInScreen"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="PlaidLink" component={PlaidLinkButton} />
      <AuthStack.Screen name="CreateLinkToken" component={CreateLinkToken} />
      <AuthStack.Screen
        name="CreditScoreDisplay"
        component={CreditScoreDisplay}
      />
    </AuthStack.Navigator>
  );
}


function OnboardingStackNavigator() {
  return (
    <OnboardingStack.Navigator
      initialRouteName="OnboardingManager"
      screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen
        name="OnboardingManager"
        component={OnboardingManager}
      />
      <OnboardingStack.Screen
        name="Onboarding1"
        component={OnboardingScreen1}
      />
      <OnboardingStack.Screen
        name="Onboarding2"
        component={OnboardingScreen2}
      />
      <OnboardingStack.Screen
        name="Onboarding3"
        component={OnboardingScreen3}
      />
      <OnboardingStack.Screen
        name="Onboarding4"
        component={OnboardingScreen4}
      />
    </OnboardingStack.Navigator>
  );
}

type HomeStackParamList = {
  HomeScreen: undefined;
  TransactionHistoryDetails: undefined;
  TransactionHistoryTax: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

type HomeStackNavigatorProps = {
  navigation: StackNavigationProp<HomeStackParamList>;
  route: RouteProp<HomeStackParamList, keyof HomeStackParamList>;
};

export function HomeStackNavigator({
  navigation,
  route,
}: HomeStackNavigatorProps) {
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName !== 'HomeScreen') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
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
        name="TransactionHistoryDetails"
        component={TransactionHistoryDetails}
      />
      <HomeStack.Screen
        name="TransactionHistoryTax"
        component={TransactionHistoryTax}
      />
    </HomeStack.Navigator>
  );
}

const getFocusedRouteNameFromRoute = (route: any): string => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'HomeScreen';
  return routeName;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delayed loading can be replaced with actual initialization logic
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  );
}

// This is the root component
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
