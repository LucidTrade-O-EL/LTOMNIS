// tokenReducer.ts
import { AnyAction } from 'redux';

// Initial state
const initialState = {
  hasViewedOnboarding: false,
  token: '',
};

// State type
export type TokenState = typeof initialState;

// Reducer function
export default function tokenReducer(state = initialState, action: AnyAction): TokenState {
  switch (action.type) {
    // handle your actions here
    default:
      return state;
  }
}
