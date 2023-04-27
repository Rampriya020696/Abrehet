import {createSlice, current} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  qty: number;
};

export interface State {
  auth: null | any;
}

const initialState: State = {
  auth: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const {updateAuth} = authSlice.actions;

// Selector
export const authSelector = state => state.auth.auth;

export default authSlice.reducer;
