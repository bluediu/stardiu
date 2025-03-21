/* Libs */
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

/* Api */
import { productApi } from '../../api';

/* Context */
import { productActions } from '../slides';
import { Dispatch } from '@reduxjs/toolkit';

/* Interfaces */
import { IProductResponse } from '../../interfaces';

/* Constants */
import { LIMIT } from '../../constants';

/* Utils */
import { fn } from '@/utils';

export const startListProducts = (props: { page: number; perPage: number }) => {
  return async (dispatch: Dispatch) => {
    dispatch(productActions.onCleanProducts());
    dispatch(productActions.onSetLoading(true));

    try {
      const params = fn.generateUrlParams(props);

      const { data } = await productApi.get<IProductResponse>(
        `/list/${params}`
      );

      const totalPages = Math.ceil(data.total / props.perPage);

      const payload = {
        itemsPerPage: data.itemsPerPage,
        limit: LIMIT,
        page: data.page,
        products: data.products,
        total: data.total,
        totalPages,
      };

      dispatch(productActions.onSetData(payload));
    } catch (err: unknown) {
      console.log(err);

      if (err instanceof AxiosError) {
        toast.error(err.response?.data.msg);
      }
    }
  };
};

export const startSetCurrentPage = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(productActions.onSetCurrentPage(page));
  };
};
