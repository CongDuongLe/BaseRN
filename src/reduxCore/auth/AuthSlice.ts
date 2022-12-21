import {createSlice} from "@reduxjs/toolkit";

export interface IAuthSlice {
  accessToken: string,
  csrfToken: string,
  refreshToken: string,
}


const initialState: IAuthSlice = {
  accessToken : '',
  csrfToken : '',
  refreshToken : ''
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
    }
  }
})

export const {
  saveAccessToken,
  saveCsrfToken
} = authSlice.actions


export default authSlice.reducer
