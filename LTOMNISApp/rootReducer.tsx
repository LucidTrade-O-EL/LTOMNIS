import {combineReducers} from 'redux';
import tokenReducer, {TokenState} from './tokenReducer';
import appReducer from './appReducer';
import languageReducer from './Redux/Reducers/languageReducer';

export interface AppState {
  token: TokenState;
  app: ReturnType<typeof appReducer>;
  language: LanguageData;
  // Include other slices of state...
}

const rootReducer = combineReducers({
  token: tokenReducer,
  app: appReducer,
  language: languageReducer, // You need to import and define languageReducer
});

export default rootReducer;
