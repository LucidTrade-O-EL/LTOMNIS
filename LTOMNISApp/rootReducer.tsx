import { combineReducers } from 'redux';
import dotReducer from './dotSlice'; 
import tokenReducer, { TokenState } from './tokenReducer';
import appReducer, { AppState } from './appReducer'; 
import languageReducer from './Redux/Reducers/languageReducer';


export interface RootState {
  token: TokenState; // TokenState as defined in your tokenReducer
  app: AppState; // AppState as defined in your appReducer
  language: {
    language: string; // Assuming this is the structure of your language state
  };
}

const rootReducer = combineReducers({
  dot: dotReducer,
  token: tokenReducer,
  app: appReducer,
  language: languageReducer, // You need to import and define languageReducer
});

export default rootReducer;
