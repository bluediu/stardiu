import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces';

interface IProps {
  products: IProduct[];
}

const initialState = {
  products: [],
  isLoading: false,
  errorMessage: null,
  hasProducts: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {},
});
