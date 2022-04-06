import { TYPES } from '../types/types';

const initialState = {
  isLoading: true,
  cart: [],
  total: 0,
  resume: 0,
};

export const shoppingCartReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.GET_USER_CART:
      return {
        ...state,
        cart: [...action.payload],
      };

    case TYPES.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case TYPES.COUNT_CART:
      return {
        ...state,
        total: action.payload,
      };

    case TYPES.ADD_IT_ALL_UP: {
      let resume = 0;

      state.cart.forEach((item) => {
        resume += item.quantity * item.productId.price;
      });

      return { ...state, resume };
    }

    /*  case TYPES.REMOVE_ONE_FROM_CART:
    return {
      ...state,
      cart: state.cart.map((c) => action.payload.id === )
    } */

    /*    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    } */
    /*     case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    } */
    /*   case CLEAR_CART:
      return initialState; */
    default:
      return state;
  }
};
