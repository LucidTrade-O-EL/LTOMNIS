// reducers.tsx
import { SET_CURRENT_DOT } from './actions';

const initialState = {
  currentDot: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_DOT:
      return { ...state, currentDot: action.payload };
    default:
      return state;
  }
};

export default reducer;
