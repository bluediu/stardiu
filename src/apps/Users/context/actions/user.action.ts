/* Libs */
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

/* Context */
import { AppThunk } from '@/context/store';
import { Dispatch } from '@reduxjs/toolkit';

import { userActions } from '../slices';

/* Interfaces */
import { IUser, IUserUpdate } from '../../interfaces';

/* Api */
import { userApi } from '../../api';

/* Utils */
import { fn } from '@/utils';

export const startUpdateUser = (
  userArgs: IUserUpdate
): AppThunk<Promise<boolean>> => {
  return async (dispatch: Dispatch, getState) => {
    try {
      const formData = fn.createFormData(userArgs);

      const { user } = getState().user;

      dispatch(userActions.setIsUpdatingUser(true));
      const { data } = await userApi.patch<IUser>(
        `update/${user.uid}`,
        formData,
        fn.getSessionToken()
      );
      dispatch(userActions.setIsUpdatingUser(false));

      // Update user in the state
      dispatch(userActions.onUpdateUser(data));

      // Show success message
      toast.success('User updated successfully!');

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || 'Error updating avatar');
      } else {
        toast.error('An unexpected error occurred while updating the avatar');
      }
      return false;
    }
  };
};

export const startRemoveAvatar = (): AppThunk<Promise<boolean>> => {
  return async (dispatch: Dispatch, getState) => {
    try {
      const { user } = getState().user;

      dispatch(userActions.setIsUpdatingUser(true));
      await userApi.delete<IUser>(
        `remove/image/${user.uid}`,
        fn.getSessionToken()
      );
      dispatch(userActions.setIsUpdatingUser(false));

      // Remove avatar from the state
      dispatch(userActions.onRemoveAvatar());

      // Show success message
      toast.info('Avatar removed!');

      return true;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message || 'Error updating avatar');
      } else {
        toast.error('An unexpected error occurred while updating the avatar');
      }
      return false;
    }
  };
};
