import { createStore } from 'redux';

// Initial State
const initialState = {
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

// Reducer
const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_HAS_VIEWED_ONBOARDING':
      return { ...state, hasViewedOnboarding: action.payload };
    case 'SET_IS_SIGNED_IN':
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(appReducer);

export default store;
