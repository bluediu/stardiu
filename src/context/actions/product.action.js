import { api_enpoint } from '../../helpers/helpApi';
import { helpHttp } from '../../helpers/helpHttp';
import { TYPES } from '../types/types';
import { setError, setIsLoading } from './shared.action';

// import Swal from 'sweetalert2';

// instance for http helper
const api = helpHttp();

/* ----- PRODUCTS SECTION ----- */

/* ----- GET SECTION ----- */

const limit = 6;

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
 * @param {*} page:int
 */
export const startGetProductsByPage = (page = 1) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProducts}/?page=${page}&limit=${limit}`
      );

      let pagesNumber = Math.ceil(res.total / limit);

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
 * @param {*} data:object
 * @param {*} total:number
 * @param {*} limit:number
 * @returns
 */
const getProducts = (
  data,
  total = 0,
  limit,
  pagesNumber = 0
) => ({
  type: TYPES.PRODUCT_GET,
  payload: { data, total, limit, pagesNumber },
});

/* ----- CREATE SECTION ----- */

/* ----- UPDATE SECTION ----- */

/* ----- DELETE SECTION ----- */
