// verifyReducer.ts

interface VerifyState {
    hasCompletedVerify: boolean;
  }
  
  const initialState: VerifyState = {
    hasCompletedVerify: false,
  };
  
  const verifyReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'SET_HAS_COMPLETED_verify':
        return {
          ...state,
          hasCompletedVerify: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default verifyReducer;
  