// combinedReducer.ts
import { SET_CURRENT_DOT, SET_TOKEN, REMOVE_TOKEN } from './actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  currentDot: 0,
  token: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_DOT:
      return { ...state, currentDot: action.payload };
    case SET_TOKEN:
      AsyncStorage.setItem('token', action.payload);
      return { ...state, token: action.payload };
    case REMOVE_TOKEN:
      AsyncStorage.removeItem('token');
      return { ...state, token: '' };
    default:
      return state;
  }
};

export default reducer;
