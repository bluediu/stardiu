import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Interfaces */
import { IProductResponse } from '../../interfaces';

interface IProps extends IProductResponse {
  limit: number;
  loading: boolean;
  totalPages: number;
}

const initialState: IProps = {
  products: [],

  itemsPerPage: 0,
  limit: 0,
  loading: true,
  page: 0,
  total: 0,
  totalPages: 0,
};

type SetData = Omit<IProps, 'loading'>;

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onSetData: (state, action: PayloadAction<SetData>) => {
      Object.assign(state, action.payload, { loading: false });
    },
    onSetCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    onCleanProducts: (state) => {
      state.products = [];
    },
    onSetLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { onSetData, onSetCurrentPage, onCleanProducts, onSetLoading } =
  productSlice.actions;
