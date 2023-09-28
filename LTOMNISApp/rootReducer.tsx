// rootReducer.ts
import { combineReducers } from 'redux';
import dotReducer from './dotSlice'; 
import tokenReducer, { TokenState } from './tokenReducer';
import appReducer, { AppState } from './appReducer'; 

export interface RootState {
  dot: any; // replace 'any' with your dot state type
  app: AppState;
  token: {
    token: string;
  };
}


const rootReducer = combineReducers({
  dot: dotReducer,
  token: tokenReducer,
  app: appReducer,
});

export default rootReducer;

