import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCurrentUser,
  loginFoo,
  logoutFoo,
  signupFoo,
  token,
} from 'helpers/API';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await signupFoo(credentials);
      token.set(response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await loginFoo(credentials);
      token.set(response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const store = thunkAPI.getState();

      token.set(store.auth.token);
      const response = await getCurrentUser();

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const response = await logoutFoo();
      token.unset();
      console.log('response', response);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
