// actions.tsx
export const SET_CURRENT_DOT = 'SET_CURRENT_DOT';

export const setCurrentDot = (currentDot: number) => ({
  type: SET_CURRENT_DOT,
  payload: currentDot,
});


// actions.ts
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};

// actions.ts
export const setHasViewedOnboarding = (value: boolean) => ({
  type: 'SET_HAS_VIEWED_ONBOARDING',
  payload: value,
});

export const setIsSignedIn = (value: boolean) => ({
  type: 'SET_IS_SIGNED_IN',
  payload: value,
});

