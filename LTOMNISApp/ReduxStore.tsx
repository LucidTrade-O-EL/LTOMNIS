import { createStore, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppActionTypes, SetLinkTokenAction, TokenActionTypes } from './types'; // Adjust the import path
import tabBarReducer, { TabBarInitialState } from './tabBarSlice';
import languageReducer, { LanguageInitialState } from './Redux/Reducers/languageReducer';
import ActionItemList from './screens/OMNISScore/ScoreBreakDown/Levels/ActionItem';

// Action Types
const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';
const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';
const SET_TOKEN = 'SET_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const SET_LINK_TOKEN = 'SET_LINK_TOKEN';
const REMOVE_LINK_TOKEN = 'REMOVE_LINK_TOKEN';
const SET_USER_ID = 'SET_USER_ID';


export interface AppInitialState {
  hasViewedOnboarding: boolean
  isSignedIn: boolean,
}

// App State and Reducer
//This is what we see in the terminal
const appInitialState: AppInitialState = {
  hasViewedOnboarding: false,
  isSignedIn: false,
};

export const setId = (id: string) => ({
  type: SET_ID,
  payload: id,
});

const UserInitialState = {
  userId: null,
};

export const setUserId = (userId: string) => ({
  type: SET_USER_ID,
  payload: userId,
});

// Token State and Reducer

export interface TokenInitialState {
  token: string | null
}


const tokenInitialState: TokenInitialState  = {
  token: null,
};

const LinkTokenInitialState: LinkTokenInitialState  = {
  token: null,
};

export interface LinkTokenInitialState {
  token: string | null
}

export interface AppState {
  app: AppInitialState,
  token: TokenInitialState,
  language: LanguageInitialState,
  tabBar: TabBarInitialState,
  linkToken: LinkTokenInitialState,
  id: string | null,
  userId: string | null,
  //verify: ReturnType<typeof verifyReducer>; // Add this line
}

const SET_ID = 'SET_ID';

export interface IdInitialState {
  id: string | null;
}

const idInitialState: IdInitialState = {
  id: null,
};

const idReducer = (state = idInitialState, action: any) => {
  switch (action.type) {
    case SET_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

const userReducer = (state = UserInitialState, action: any) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

const linkTokenReducer = (state = LinkTokenInitialState, action: SetLinkTokenAction) => {
  switch (action.type) {
    case SET_LINK_TOKEN:
      return {...state, LinkToken: action.payload};
    default:
      return state;
  }
}


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
  tabBar: tabBarReducer,
  language: languageReducer,
  linkToken: linkTokenReducer,
  id: idReducer,
  user: userReducer,
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

