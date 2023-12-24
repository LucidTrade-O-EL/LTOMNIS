import {combineReducers} from 'redux';
import tokenReducer, {TokenState} from './tokenReducer';
import appReducer from './appReducer';
import languageReducer from './Redux/Reducers/languageReducer';
import tabBarReducer from './tabBarSlice';
import verifyReducer from './verifyReducer';
export interface AppState {
  token: TokenState;
  app: ReturnType<typeof appReducer>;
  language: ReturnType<typeof languageReducer>;
  tabBar: ReturnType<typeof tabBarReducer>;
  verify: ReturnType<typeof verifyReducer>; // Add this line
  // Include other slices of state...
}

const rootReducer = combineReducers({
  token: tokenReducer,
  app: appReducer,
  language: languageReducer, // You need to import and define languageReducer
  tabBar: tabBarReducer,
  verify: verifyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
