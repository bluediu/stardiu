/* Libs */
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

/* Api */
import { categoryApi, productApi } from '../../api';

/* Context */
import { Dispatch } from '@reduxjs/toolkit';
import { categoryActions } from '../slides';

/* Interfaces */
import { ICategoryResponse, IProductByCtgyResponse } from '../../interfaces';

export const startListCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryActions.onSetCtgsLoading(true));
    try {
      const { data } = await categoryApi.get<ICategoryResponse>('/list/');

      const payload = { categories: data.categories };
      dispatch(categoryActions.onSetCategories(payload));
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
      }
    }
  };
};

export const startListProductByCtgy = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryActions.onSetPdtsLoading(true));
    dispatch(categoryActions.onCleanProducts());

    try {
      const { data } = await productApi.get<IProductByCtgyResponse>(
        `category/${id}/`
      );

      dispatch(
        categoryActions.onSetProducts({ productsByCategory: data.products })
      );
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
      }
    }
  };
};
