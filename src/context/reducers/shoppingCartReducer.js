import { TYPES } from '../types/types';

const initialState = {
  cart: [],
  total: 0,
};

export const shoppingCartReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
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
