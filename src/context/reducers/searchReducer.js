import { TYPES } from '../types/types';

const initialState = {
  results: [],
  loading: false,
  error: null,
  thereAreProducts: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.PRODUCT_SEARCH:
      return {
        ...state,
        results: action.payload.products,
        thereAreProducts: action.payload.thereAreProducts,
      };

    case TYPES.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
