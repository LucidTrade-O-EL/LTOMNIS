import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {REMOVE_TOKEN, SET_LINK_TOKEN} from './actions';
import {
  FeedStackParamList,
  HomeStackParamList,
  MainStackParamList,
  OMNISScoreStackParamList,
  SpotlightStackParamList,
} from './App';

// Navigation Prop Type
export type NavigationPropType = {
  navigation: {
    navigate: (routeName: string, params?: object) => void;
  };
};

// User Type
export type User = {
  id: number;
  name: string;
  email: string;
};

// Action Interfaces
export interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: string;
}

export interface SetLinkTokenAction {
  type: typeof SET_LINK_TOKEN;
  payload: string;
}

export interface SetTokenAction {
  type: typeof SET_TOKEN;
  payload: string;
}

export interface RemoveTokenAction {
  type: typeof REMOVE_TOKEN;
}

export interface SetHasViewedOnboardingAction {
  type: typeof SET_HAS_VIEWED_ONBOARDING;
  payload: boolean;
}

export interface SetIsSignedInAction {
  type: typeof SET_IS_SIGNED_IN;
  payload: boolean;
}

export type AuthStackParamList = {
  SignInScreen: undefined;
  // ... other screens in AuthStack
};

// Union Action Types

export type OnboardingActionTypes = SetHasViewedOnboardingAction;
export type SignInActionTypes = SetIsSignedInAction;
export type LanguageActionTypes = SetLanguageAction;
export type LinkTokenActionTypes = SetLinkTokenAction;
export type TokenActionTypes = SetTokenAction | RemoveTokenAction;
export type AppActionTypes = SetHasViewedOnboardingAction | SetIsSignedInAction;
export type OnboardingScreen4NavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'SignInScreen'
>;
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';
export const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';
0;

// Root Stack Param List Type
export type RootStackParamList = {
  Tabs: undefined;
  SignInScreen: undefined;
  RegisterScreen: undefined;
  SplashScreen: undefined;
  OnboardingManager: undefined; // Add this line if it's missing
  SelectLang: undefined; // Add this line if it's missing
  OnboardingScreen1: OnboardingScreen1Props;
  OfferSent: undefined;
  HomeScreen: undefined;
  HomeStackNavigator: NavigatorScreenParams<HomeStackParamList>;
  FeedStackNavigator: NavigatorScreenParams<FeedStackParamList>;
  OMNISScoreStackNavigator: NavigatorScreenParams<OMNISScoreStackParamList>;
  SpotlightStackNavigator: NavigatorScreenParams<SpotlightStackParamList>;
  IdentityVerificationScreen: {
    linkToken: string;
  };
  MainStackNavigator: NavigatorScreenParams<MainStackParamList>;
  TabsStackNavigator: undefined;
};


// Tabs Stack Navigator Props Type
export type MainStackNavigatorProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof MainStackParamList
  >;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  activeScreenName: string;
};

// Tabs Stack Navigator Props Type
export type TabsStackNavigatorProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  activeScreenName: string;
};

// Home Stack Navigator Props Type
export type HomeStackNavigatorProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

// Feed Stack Navigator Props Type
export type FeedStackNavigatorProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

export type OMNISScoreStackNavigatorProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

// Spotlight Stack Navigator Props Type
export type SpotlightStackNavigatorProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList
  >;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

// SplashScreenProps
export type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
};
// Add additional types and interfaces as needed for your application

export type OnboardingStackParamList = {
  OnboardingScreen2: OnboardingScreen2Props;
  OnboardingScreen3: OnboardingScreen3Props;
  OnboardingScreen4: OnboardingScreen4Props;
  // Add other screens if needed
};

export type OnboardingScreen1Props = {
  // Define props for OnboardingScreen1 here
};

export type OnboardingScreen2Props = {
  // Define props for OnboardingScreen2 here
};

export type OnboardingScreen3Props = {
  // Define props for OnboardingScreen3 here
};

export type OnboardingScreen4Props = {
  // Define props for OnboardingScreen4 here
};
