import { TYPES } from '../types/types';

const initialRecords = {
  records: [],
  search: [],
  total: 0,
  limit: 0,
  pagesNumber: 0,
  error: null,
  isLoading: true,
  detailsData: null,
};

export const productReducer = (
  state = initialRecords,
  action
) => {
  switch (action.type) {
    case TYPES.PRODUCT_GET:
      return {
        ...state,
        records: [...action.payload.data],
        total: action.payload.total,
        limit: action.payload.limit,
        pagesNumber: action.payload.pagesNumber,
      };

    case TYPES.PRODUCT_GET_DETAILS:
      return {
        ...state,
        detailsData: action.payload,
      };

    case TYPES.ERROR_TO_FETCH:
      return {
        ...state,
        error: action.payload,
      };

    case TYPES.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case TYPES.PRODUCT_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case TYPES.CLEAN_ERRORS:
      return {
        ...state,
        error: null,
      };

    case TYPES.CLEAN_SEARCH:
      return {
        ...state,
        search: [],
      };

    default:
      return state;
  }
};
