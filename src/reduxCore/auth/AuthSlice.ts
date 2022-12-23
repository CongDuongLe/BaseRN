import {createSlice} from "@reduxjs/toolkit";

export interface IAuthSlice {
  accessToken: string,
  csrfToken: string,
  refreshToken: string,
  isAuthenticated: boolean,
}


const initialState: IAuthSlice = {
  accessToken : '',
  csrfToken : '',
  refreshToken : '',
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name : 'auth',
  initialState,
  reducers : {
    saveAccessToken : (state, action) => {
      state.accessToken = action.payload
    },
    saveCsrfToken : (state, action) => {
      state.csrfToken = action.payload
    },
    changeIsAuthenticated : (state, action) => {
      state.isAuthenticated = action.payload
    }
  }
})

export const {
  saveAccessToken,
  saveCsrfToken,
  changeIsAuthenticated
} = authSlice.actions


export default authSlice.reducer
