import {SET_ID, SET_LINK_TOKEN} from './actions';

// appReducer.ts
export interface AppState {
  hasViewedOnboarding: boolean;
  isSignedIn: boolean;
  id: string;
  linkToken: string;
}

// Initial state
const initialState: AppState = {
  hasViewedOnboarding: false,
  isSignedIn: false,
  id: 'string',
  linkToken: 'string',
};

// Action types
const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';
const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';

// Reducer function
const appReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case SET_HAS_VIEWED_ONBOARDING:
      return {...state, hasViewedOnboarding: action.payload};
    case SET_IS_SIGNED_IN:
      return {...state, isSignedIn: action.payload};
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SET_LINK_TOKEN:
      return {
        ...state,
        linkToken: action.payload, // Ensure this expects a string
      };
    default:
      return state;
  }
};

export default appReducer;
