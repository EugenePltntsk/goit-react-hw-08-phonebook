import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, signupFoo } from "helpers/API";



export const registerThunk = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const response = await signupFoo(credentials);
        return response;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );