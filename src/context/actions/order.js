import {
  alertOptions,
  api_enpoint,
  helpHttp,
} from '../../helpers';

import { TYPES } from '../types/types';
import { setIsLoading } from './shared.action';

import Swal from 'sweetalert2';

// instance for http helper
const api = helpHttp();

/* ----- ORDERS SECTION ----- */

/* ----- CREATE SECTION ----- */

/**
 *  Create users orders
 * @param {object} orderDate
 */
export const startCreateOrder = (orderDate) => {
  return async (dispatch, getState) => {
    try {
      /* user data */
      const userId = getState().auth.uid;
      const { cart: products, resume: amount } =
        getState().shoppingCart;
      const { number, name, expiry, cvc, address, time } =
        orderDate;

      // order object
      const order = {
        userId,
        products,
        amount,
        address,
        deliveryTime: time,
        creditCartNumber: number,
        creditCartOwnerName: name,
        expiry,
        cvc,
      };

      const options = {
        text: '¿Estas seguro que quieres realizar este pedido?',
        icon: 'question',
      };
      const action = await alertOptions(options);

      if (action) {
        // read the previous token from local storage
        const token = localStorage.getItem('star-token');

        const data = {
          body: order,
          headers: {
            'content-type': 'application/json',
            'x-token': token,
          },
        };

        await api.post(api_enpoint.createOrder, data);

        Swal.fire(
          'Pago realizado',
          'Tu pedido se ha hecho de manera satisfactoria',
          'success'
        );
      }
    } catch (err) {
      Swal.fire(
        'Pago no completado',
        'Hubo un problema al realizar el pedido, por favor intente más tarde',
        'error'
      );
      console.error(err);
    }
  };
};

export const startGetOrders = (userId) => {
  return async (dispatch) => {
    try {
      // read token from local storage
      const token = localStorage.getItem('star-token');

      let meta = {
        headers: {
          'content-type': 'application/json',
          'x-token': token,
        },
      };

      const res = await api.get(
        `${api_enpoint.getOrders}/${userId}`,
        meta
      );

      dispatch(setIsLoading(false));
      return dispatch(getOrders(res));
    } catch (error) {
      console.error(error);
    }
  };
};

/**
 * Get orders by user
 * @param {Array<object>} data
 */
const getOrders = (data) => ({
  type: TYPES.GET_ORDERS,
  payload: data,
});

/**
 * Set active order selected
 * @param {Array<object>} data
 */
export const activeOrder = (data) => ({
  type: TYPES.SHOW_ACTIVE_ORDER,
  payload: data,
});
