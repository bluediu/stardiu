import { api_enpoint, helpHttp } from '../../helpers';
import { TYPES } from '../types/types';
import { setError, setIsLoading } from './shared.action';

// instance for http helper
const api = helpHttp();

/* ----- PRODUCTS SECTION ----- */

/* ----- GET SECTION ----- */

const limit = 8;

/* get initial products when the component(CardGrid) load the first time */
export const startGetInitialProducts = () => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProducts}/?page=1&limit=${limit}`
      );

      // calculate total of pages from database
      let pagesNumber = Math.ceil(res.total / limit);

      dispatch(setIsLoading(false));

      if (!res.err) {
        dispatch(
          getProducts(
            res.products,
            res.total,
            limit,
            pagesNumber
          )
        );
      } else {
        dispatch(setError(res));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 * get products by page
 * @param {number} page
 */
export const startGetProductsByPage = (page = 1) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProducts}/?page=${page}&limit=${limit}`
      );

      let pagesNumber = Math.ceil(res.total / limit);

      dispatch(setIsLoading(false));
      if (!res.err) {
        dispatch(
          getProducts(
            res.products,
            res.total,
            limit,
            pagesNumber
          )
        );
      } else {
        dispatch(setError(res));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 *
 * @param {string} id product id
 */
export const startGetProductById = (id) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProducts}/${id}`
      );

      dispatch(setIsLoading(false));

      if (!res.err) {
        // delete user object
        delete res.user;

        dispatch(detailsItem(res));
      } else {
        dispatch(setError(res));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const getLatestProduct = async () => {
  try {
    const res = await api.get(
      `${api_enpoint.getProducts}/latest`
    );

    return res;
  } catch (error) {
    console.error(error);
  }
};

/**
 *
 * @param {Array<object>} data:object
 * @param {number} total
 * @param {number} limit
 */
const getProducts = (
  data,
  total = 0,
  limit = 0,
  pagesNumber = 0
) => ({
  type: TYPES.PRODUCT_GET,
  payload: { data, total, limit, pagesNumber },
});

/**
 *
 * @param {object} data
 */
const detailsItem = (data) => ({
  type: TYPES.PRODUCT_GET_DETAILS,
  payload: data,
});

/**
 * Set the current page products
 * @param {number} current
 */
export const startCurrentPage = (current) => ({
  type: TYPES.CURRENT_PAGE,
  payload: current,
});
