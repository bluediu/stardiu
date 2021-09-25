import { TYPES } from '../types/types';

const initialRecords = {
  records: [],
  active: null,
};

export const productReducer = (
  state = initialRecords,
  action
) => {
  switch (action.type) {
    case TYPES.PRODUCT_GET:
      return {
        ...state,
        records: [...action.payload],
      };

    default:
      return state;
  }
};
