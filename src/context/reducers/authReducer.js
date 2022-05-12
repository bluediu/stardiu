import { TYPES } from '../types/types';

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.AUTH_LOGIN:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };

    case TYPES.AUTH_CHECKING:
      return {
        ...state,
        checking: action.payload,
      };

    case TYPES.AUTH_LOGOUT:
      return {
        checking: true,
      };

    case TYPES.UPDATE_AVATAR:
      return {
        ...state,
        img: action.payload,
      };

    default:
      return state;
  }
};
