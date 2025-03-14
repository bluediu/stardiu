/* Libs */
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

/* Context */
import { AppThunk } from '@/context/store';
import { Dispatch } from '@reduxjs/toolkit';

import { authActions } from '../slices';

/* Api */
import { authApi, userApi } from '../../api';

/* Interfaces */
import { IAuthResponse, ILogin, IRegister } from '../../interfaces';

/* Utils */
import { getSessionToken } from '@/utils';

/* Constants */
import { TOKEN } from '../../constants';

const _saveToken = (token: string): void => {
  localStorage.setItem(TOKEN, token);
};

export const startLogin = (props: ILogin): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await authApi.post<IAuthResponse>('/login', props);
      _saveToken(data.token);

      dispatch(authActions.onLogin(data.user));
      toast.success('Login successful!');
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
        dispatch(authActions.onLogout());
      }
    }
  };
};

export const startRegister = (props: IRegister): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await userApi.post<IAuthResponse>('/create', props);
      _saveToken(data.token);

      dispatch(authActions.onLogin(data.user));
      toast.success('Login successful!');
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
        dispatch(authActions.onLogout());
      }
    }
  };
};

export const startGoogleSignIn = (token: string): AppThunk => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await authApi.post<IAuthResponse>('/google', {
        id_token: token,
      });

      if (data.ok) {
        _saveToken(data.token);
        dispatch(authActions.onLogin(data.user));
        toast.success('Login successful!');
      } else {
        toast.error('Failed to login with Google');
        dispatch(authActions.onLogout());
      }
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
        dispatch(authActions.onLogout());
      }
    }
  };
};

export const startRenewToken = () => {
  return async (dispatch: Dispatch) => {
    const token = localStorage.getItem(TOKEN) ?? '';

    if (!token) return dispatch(authActions.onLogout());

    try {
      const { data } = await authApi.get<IAuthResponse>(
        '/renew',
        getSessionToken()
      );
      _saveToken(data.token);

      dispatch(authActions.onLogin(data.user));
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
        dispatch(authActions.onLogout());
      }
    }
  };
};
