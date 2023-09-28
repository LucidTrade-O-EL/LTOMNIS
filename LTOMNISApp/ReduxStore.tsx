import { createStore, combineReducers } from 'redux';

// Initial State for appReducer
const appInitialState = {
  hasViewedOnboarding: false,
  isSignedIn: false,
};

// Actions
export const setHasViewedOnboarding = (value: boolean) => ({
  type: 'SET_HAS_VIEWED_ONBOARDING',
  payload: value,
});

export const setIsSignedIn = (value: boolean) => ({
  type: 'SET_IS_SIGNED_IN',
  payload: value,
});

// appReducer
const appReducer = (state = appInitialState, action: any) => {
  switch (action.type) {
    case 'SET_HAS_VIEWED_ONBOARDING':
      return { ...state, hasViewedOnboarding: action.payload };
    case 'SET_IS_SIGNED_IN':
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};

// Initial State for tokenReducer
const tokenInitialState = {
  token: null,
};

// Redux action
export const setToken = (token: string) => {
  return {
    type: 'SET_TOKEN',
    payload: token,
  };
};

// tokenReducer
const tokenReducer = (state = tokenInitialState, action: any) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

// Combine the reducers
const rootReducer = combineReducers({
  app: appReducer,
  token: tokenReducer,
});

// Store
const store = createStore(rootReducer);

export default store;
