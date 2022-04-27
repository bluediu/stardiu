import { TYPES } from '../types/types';

const initialState = {
  isLoading: true,
  orders: [],
  active: null,
  thereAreOrdersDone: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_ORDERS:
      return {
        ...state,
        orders: [...action.payload],
      };

    case TYPES.SHOW_ACTIVE_ORDER:
      return {
        ...state,
        active: {
          ...action.payload,
        },
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
