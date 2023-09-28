// appReducer.ts
export interface AppState {
    hasViewedOnboarding: boolean;
    isSignedIn: boolean;
  }
  
  // Initial state
  const initialState: AppState = {
    hasViewedOnboarding: false,
    isSignedIn: false,
  };
  
  // Action types
  const SET_HAS_VIEWED_ONBOARDING = 'SET_HAS_VIEWED_ONBOARDING';
  const SET_IS_SIGNED_IN = 'SET_IS_SIGNED_IN';
  
  // Reducer function
  const appReducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
      case SET_HAS_VIEWED_ONBOARDING:
        return { ...state, hasViewedOnboarding: action.payload };
      case SET_IS_SIGNED_IN:
        return { ...state, isSignedIn: action.payload };
      default:
        return state;
    }
  };
  
  export default appReducer;
  