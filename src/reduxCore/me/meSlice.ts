import { createSlice } from '@reduxjs/toolkit';

interface MeState {
  userInfo: any;
  listMenuItems: [];
}

const initialState: MeState = {
  userInfo: {},
  listMenuItems: [],
};

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {
    getListMenuItemsSuccess: (state: MeState, action) => {
      state.listMenuItems = action.payload;
    },
  },
});

export const { getListMenuItemsSuccess } = meSlice.actions;

export default meSlice.reducer;
