import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: true,
};

const tabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    showTabBar: (state) => {
      state.isVisible = true;
    },
    hideTabBar: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showTabBar, hideTabBar } = tabBarSlice.actions;
export default tabBarSlice.reducer;
