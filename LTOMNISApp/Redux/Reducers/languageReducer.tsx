// languageReducer.tsx
import {AnyAction} from 'redux';
import {SET_LANGUAGE, SetLanguageAction} from '../../types';

const initialState = {
  language: 'en', // default language
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
