import { createStore, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppActionTypes, TokenActionTypes } from './types'; // Adjust the import path

// Action Types
const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';
const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';
const SET_TOKEN = 'SET_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';

// App State and Reducer
const appInitialState = {
  hasViewedOnboarding: false,
  isSignedIn: false,
};

// Token State and Reducer
const tokenInitialState = {
  token: null,
};


const appReducer = (state = appInitialState, action: AppActionTypes) => {
  switch (action.type) {
    case SET_HAS_VIEWED_ONBOARDING:
      return { ...state, hasViewedOnboarding: action.payload };
    case SET_IS_SIGNED_IN:
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};

const tokenReducer = (state = tokenInitialState, action: TokenActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case REMOVE_TOKEN:
      return { ...state, token: null };
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  app: appReducer,
  token: tokenReducer,
});

// Store
const store = createStore(rootReducer);

export default store;

// Actions (Consider moving these to a separate file)
export const setHasViewedOnboarding = (value: boolean) => ({
  type: SET_HAS_VIEWED_ONBOARDING,
  payload: value,
});

export const setIsSignedIn = (value: boolean) => ({
  type: SET_IS_SIGNED_IN,
  payload: value,
});

export const setToken = (token: string) => {
  AsyncStorage.setItem('token', token);
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const removeToken = () => {
  AsyncStorage.removeItem('token');
  return {
    type: REMOVE_TOKEN,
  };
};
