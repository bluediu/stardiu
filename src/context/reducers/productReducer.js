import { TYPES } from '../types/types';

const initialRecords = {
  products: [],
  active: null,
};

export const productReducer = (
  state = initialRecords,
  action
) => {
  switch (action.type) {
    case TYPES.PRODUCT_GET:
      return {};

    default:
      return state;
  }
};
