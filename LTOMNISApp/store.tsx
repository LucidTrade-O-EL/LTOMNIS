// store.ts
import { configureStore } from '@reduxjs/toolkit';
import dotReducer from './dotSlice';

// Additional imports or configurations can be added here

const store = configureStore({
    reducer: {
      dot: dotReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
  

// Additional codes or exports can be added here

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
