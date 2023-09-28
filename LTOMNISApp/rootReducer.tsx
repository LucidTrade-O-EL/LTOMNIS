// rootReducer.ts
import { combineReducers } from 'redux';
import dotReducer from './reducer'; 
import tokenReducer, { TokenState } from './tokenReducer'; 

const rootReducer = combineReducers({
  dot: dotReducer,
  token: tokenReducer,
});

export interface RootState {
  dot: any; // replace 'any' with your dot state type
  token: TokenState;
}

export default rootReducer;
