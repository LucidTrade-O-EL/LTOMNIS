import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

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

// Action Types Constants
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';
export const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';

// Action Interfaces
export interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
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
export type TokenActionTypes = SetTokenAction | RemoveTokenAction;
export type AppActionTypes = SetHasViewedOnboardingAction | SetIsSignedInAction;
export type OnboardingScreen4NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignInScreen'>;

// Root Stack Param List Type
export type RootStackParamList = {
  Tabs: undefined;
  SignInScreen: undefined;
  RegisterScreen: undefined;
  SplashScreen: undefined;
  OnboardingManager: undefined; // Add this line if it's missing
  SelectLang: undefined; // Add this line if it's missing
  OnboardingScreen1: OnboardingScreen1Props;
};

// Home Stack Navigator Props Type
export type HomeStackNavigatorProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
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
