import { TYPES } from '../types/types';

const initialState = {
  results: [],
  loading: false,
  error: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.PRODUCT_SEARCH:
      return {
        ...state,
        results: action.payload,
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
