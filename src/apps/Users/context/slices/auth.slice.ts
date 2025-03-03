/* Redux */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Types */
import { IAuthState } from '../../types';

/* Interfaces */
import { IUser } from '../../interfaces';

const initialState: IAuthState = {
  status: 'not-authenticated',
  user: {},
  checking: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthChecking: (state: IAuthState, action: PayloadAction<boolean>) => {
      state.checking = action.payload;
    },
    onLogin: (state: IAuthState, action: PayloadAction<IUser>) => {
      state.status = 'authenticated';
      state.user = action.payload || {};
      state.checking = false;
    },
    onLogout: (state: IAuthState) => {
      state.status = 'not-authenticated';
      state.user = {};
      state.checking = false;
    },
  },
});

export const { setAuthChecking, onLogin, onLogout } = authSlice.actions;
