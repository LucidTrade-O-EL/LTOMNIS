// actions.tsx
export const SET_CURRENT_DOT = 'SET_CURRENT_DOT';

export const setCurrentDot = (currentDot: number) => ({
  type: SET_CURRENT_DOT,
  payload: currentDot,
});


// actions.ts
export const SET_TOKEN = 'SET_TOKEN';

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  payload: token,
});
