import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Interfaces */
import { ICategory, IProduct } from '../../interfaces';

interface IProps {
  loading: boolean;
  loadingProducts: boolean;
  categories: ICategory[];
  productsByCategory: IProduct[];
}

const initialState: IProps = {
  loading: true,
  loadingProducts: true,
  categories: [],
  productsByCategory: [],
};

type CategoriesData = Pick<IProps, 'categories'>;
type ProductsData = Pick<IProps, 'productsByCategory'>;

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    onSetCategories: (state, action: PayloadAction<CategoriesData>) => {
      Object.assign(state, action.payload, { loading: false });
    },
    onSetProducts: (state, action: PayloadAction<ProductsData>) => {
      Object.assign(state, action.payload, { loadingProducts: false });
    },
    onCleanProducts: (state) => {
      state.productsByCategory = [];
    },
    onSetCtgsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    onSetPdtsLoading: (state, action: PayloadAction<boolean>) => {
      state.loadingProducts = action.payload;
    },
  },
});

export const {
  onSetCategories,
  onSetProducts,
  onCleanProducts,
  onSetCtgsLoading,
  onSetPdtsLoading,
} = categorySlice.actions;
