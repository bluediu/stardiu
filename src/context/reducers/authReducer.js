import { TYPES } from '../types/types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_LOGIN:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };

    case TYPES.AUTH_CHECKING:
      return {
        ...state,
        checking: false,
      };

    default:
      return state;
  }
};
