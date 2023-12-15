// types.ts

export type NavigationPropType = {
  navigation: {
    navigate: (routeName: string, params?: object) => void;
  };
};

export type User = {
  id: number;
  name: string;
  email: string;
};

// Action Types Constants
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';
export const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';

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

export type RootStackParamList = {
  Tabs: undefined;
  SignInScreen: undefined;
  RegisterScreen: undefined;
  // ... add other routes as needed
};

// Type for HomeStackNavigatorProps
export type HomeStackNavigatorProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
};

// Union Action Types
export type LanguageActionTypes = SetLanguageAction;
export type TokenActionTypes = SetTokenAction | RemoveTokenAction;
export type OnboardingActionTypes = SetHasViewedOnboardingAction;


// You can continue to add other action types and interfaces as needed.
