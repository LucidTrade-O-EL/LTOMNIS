// combinedReducer.ts
import { SET_CURRENT_DOT, SET_TOKEN } from './actions';

const initialState = {
  currentDot: 0,
  token: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_DOT:
      return { ...state, currentDot: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default reducer;
