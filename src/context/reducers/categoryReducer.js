import { TYPES } from '../types/types';

const initialState = {
  records: [],
  productsCategory: [],
  isLoading: true,
};

export const categoryReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.CATEGORY_GET:
      return {
        ...state,
        records: [...action.payload],
      };

    case TYPES.PRODUCTS_CATEGORY:
      return {
        ...state,
        productsCategory: [...action.payload],
      };

    case TYPES.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
