import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from '@reduxCore/main/slice';
import authSlice from '@reduxCore/auth/AuthSlice';

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  main: mainSlice,
  auth: authSlice
});
