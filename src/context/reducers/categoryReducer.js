import { TYPES } from '../types/types';

const initialState = {
  records: [],
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

    default:
      return state;
  }
};
