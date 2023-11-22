import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('username'),
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginOk: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.error = null;
    },
    loginError: (state, { payload }) => {
      state.loading = false;
      state.user = null;
      state.error = payload;
    },

    loginOut: (state) => {
      state.loading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const {
  loginStart,
  loginOk,
  loginError,
  loginOut,
} = authSlice.actions;

