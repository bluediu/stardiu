import { TYPES } from '../types/types';

import { api_enpoint } from '../../helpers/helpApi';
import { helpHttp } from '../../helpers/helpHttp';

import { toast } from 'react-toastify';
import { setIsLoading } from './shared.action';

// instance for http helper
const api = helpHttp();

/* ----- SHOPPING CART SECTION ----- */

/* ----- GET SECTION ----- */

/**
 *
 * @param {{userId}} userId user id when has been logged
 */
export const startGetShoppingCart = (userId) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getShoppingCart}/${userId}`
      );

      dispatch(setIsLoading(false));
      dispatch(getShoppingCart(res.products));
      dispatch(addItAllUp());
    } catch (error) {
      console.error(error);
    }
  };
};

/**
 *
 * @param {{userId}} userId user id
 */
export const startCountProducts = (userId) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.countShoppingCart}/${userId}`
      );

      dispatch(countProducts(res.total));
    } catch (error) {
      console.error(error);
    }
  };
};

/**
 *
 * @param {string} productId
 * @param {string} userId
 */
export const startIsProductAddedToCart = async (
  productId,
  userId
) => {
  try {
    const res = await api.get(
      `${api_enpoint.productExistInShoppingCart}/${productId}/${userId}`
    );

    return res;
  } catch (error) {
    return error;
  }
};

/* ----- CREATE SECTION ----- */

/**
 *
 * @param {{userId: string, productId: string, quanitity: number}} data
 * @returns
 */
export const startAddToCart = (cartData) => {
  return async (dispatch) => {
    try {
      // read token from local storage
      const token = localStorage.getItem('star-token') || '';

      let meta = {
        body: cartData,
        headers: {
          'content-type': 'application/json',
          'x-token': token,
        },
      };

      toast.success('Se agregó el producto correctamente', {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
      });

      const res = await api.post(api_enpoint.addToCart, meta);

      console.log(res, token);

      dispatch(addToCart(res.cart));
    } catch (error) {
      console.error(error);
    }
  };
};

/* ----- DELETE SECTION ----- */
/**
 *
 * @param {string} productId
 * @param {string} userId
 */
export const startDeleteOneFromCart = async (
  productId,
  userId
) => {
  try {
    // read token from local storage
    const token = localStorage.getItem('star-token') || '';

    let meta = {
      headers: {
        'content-type': 'application/json',
        'x-token': token,
      },
    };

    const res = await api.del(
      `${api_enpoint.deleteOneFromShoppingCart}/${productId}/${userId}`,
      meta
    );

    toast.error('Borrando del carrito', {
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
    });

    return res;
  } catch (error) {
    return error;
  }
};

/* ----- ACTIONS SECTION ----- */

export const addToCart = (data) => ({
  type: TYPES.ADD_TO_CART,
  payload: data,
});

/**
 *
 * @param {number} quantity
 */
export const countProducts = (quantity = 0) => ({
  type: TYPES.COUNT_CART,
  payload: quantity,
});

/**
 *
 * @param {Array<object>} data
 * @returns
 */
export const getShoppingCart = (data) => ({
  type: TYPES.GET_USER_CART,
  payload: data,
});

export const addItAllUp = () => ({
  type: TYPES.ADD_IT_ALL_UP,
});
