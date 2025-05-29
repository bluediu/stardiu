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
  updating: false,
};

interface IUpdateUserPayload {
  name?: string;
  email?: string;
  img?: string;
}

export const userSlice = createSlice({
  name: 'user',
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
    onUpdateUser: (
      state: IAuthState,
      action: PayloadAction<IUpdateUserPayload>
    ) => {
      const { name, email, img } = action.payload;
      if (name) state.user.name = name;
      if (email) state.user.email = email;
      if (img) state.user.img = img;
    },
    onRemoveAvatar: (state: IAuthState) => {
      state.user.img = 'NO_IMG';
    },
    setIsUpdatingUser: (state: IAuthState, action: PayloadAction<boolean>) => {
      state.updating = action.payload;
    },
  },
});

export const {
  setAuthChecking,
  onLogin,
  onLogout,
  onUpdateUser,
  onRemoveAvatar,
  setIsUpdatingUser,
} = userSlice.actions;
