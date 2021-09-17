import { TYPES } from '../types/types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_LOGIN:
      return {};

    case TYPES.AUTH_SINGIN:
      return {};

    case TYPES.AUTH_CHECKING:
      return {};

    default:
      return state;
  }
};
