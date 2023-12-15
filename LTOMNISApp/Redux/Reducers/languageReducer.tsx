// languageReducer.ts
import {AnyAction} from 'redux';
import {SET_LANGUAGE, SetLanguageAction} from '../../types';

const initialState = {
  language: 'en', // or any default language code
};

// Type guard to check if an action is SetLanguageAction
const isSetLanguageAction = (action: AnyAction): action is SetLanguageAction =>
  action.type === SET_LANGUAGE;

const languageReducer = (state = initialState, action: AnyAction) => {
  if (isSetLanguageAction(action)) {
    // Now TypeScript knows this is SetLanguageAction
    return {...state, language: action.payload};
  }

  return state;
};

export default languageReducer;
