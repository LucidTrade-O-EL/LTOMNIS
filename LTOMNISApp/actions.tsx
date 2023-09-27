// actions.tsx
export const SET_CURRENT_DOT = 'SET_CURRENT_DOT';

export const setCurrentDot = (currentDot: number) => ({
  type: SET_CURRENT_DOT,
  payload: currentDot,
});
