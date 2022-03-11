import { TYPES } from '../types/types';

const initialRecords = {
  records: [],
  total: 0,
  limit: 0,
  pagesNumber: 0,
  currentPage: 1,
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

    case TYPES.CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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

    default:
      return state;
  }
};
