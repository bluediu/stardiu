import { TYPES } from '../types/types';

import { api_enpoint, helpHttp } from '../../helpers';

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
      console.log(res);
      dispatch(setIsLoading(false));
      dispatch(
        getShoppingCart({
          data: res.products,
          thereAreProducts: res.thereAreProducts,
        })
      );
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
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
      });

      const res = await api.post(api_enpoint.addToCart, meta);

      dispatch(addToCart(res.cart));
    } catch (error) {
      console.error(error);
    }
  };
};

/* ----- DELETE SECTION ----- */
/**
 *
 * @param {string} productId product id database
 * @param {string} userId user id
 * @param {true | false} reducer
 * @param {string} reducer product id in Redux store
 */
export const startDeleteOneFromCart = (
  productId,
  userId,
  reducer = false,
  id = ''
) => {
  return async (dispatch) => {
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

      if (reducer) {
        return dispatch(deleteOneFromCart(id));
      }

      return res;
    } catch (error) {
      return error;
    }
  };
};

/* ----- UPDATE SECTION ----- */
export const startUpdateProductInCart = (product) => {
  return async (dispatch) => {
    const { id, counter } = product;

    let meta = {
      body: { quantity: counter },
      headers: {
        'content-type': 'application/json',
      },
    };

    dispatch(updatingQt(true));

    await api.put(`${api_enpoint.updateQt}/${id}`, meta);

    dispatch(updateProductInCart(id, counter));
    dispatch(updatingQt(false));
    dispatch(addItAllUp());
  };
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
export const getShoppingCart = ({ data, thereAreProducts }) => ({
  type: TYPES.GET_USER_CART,
  payload: { data, thereAreProducts },
});

export const addItAllUp = () => ({
  type: TYPES.ADD_IT_ALL_UP,
});

/**
 *
 * @param {string} id product id that want be updated
 * @param {object} product product schema
 * @returns
 */
export const updateProductInCart = (id, quantity) => ({
  type: TYPES.UPDATE_PRODUCT_IN_CART,
  payload: {
    id,
    quantity,
  },
});

/**
 *
 * @param {string} id product id
 */
export const deleteOneFromCart = (id) => ({
  type: TYPES.REMOVE_ONE_FROM_CART,
  payload: id,
});

const updatingQt = (status = false) => ({
  type: TYPES.UPDATING_QT,
  payload: status,
});
