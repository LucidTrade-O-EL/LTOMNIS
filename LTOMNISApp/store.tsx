// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Adjust the import path as needed

const store = configureStore({
  reducer: rootReducer,
});

export default store;
