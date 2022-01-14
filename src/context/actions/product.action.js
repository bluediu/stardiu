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

/**
 *
 * @param {*} searchTerm: string
 * @param {*} type: string -> indicate which table should do the search
 */
export const startSearchByName = (searchTerm, type) => {
  return async (dispatch) => {
    try {
      // clean store when the user type a term
      // show loading
      dispatch(setIsLoading(true));

      const res = await api.get(
        `${api_enpoint.search}/${type}/${searchTerm}`
      );

      dispatch(setIsLoading(false));

      if (!res.err && searchTerm !== '') {
        // delete user object
        delete res.user;

        dispatch(searchedProducts(res));
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
 * @param {*} data:object
 */
const detailsItem = (data) => ({
  type: TYPES.PRODUCT_GET_DETAILS,
  payload: data,
});

const searchedProducts = (data) => ({
  type: TYPES.PRODUCT_SEARCH,
  payload: data,
});

/* const cleanProduct = () => ({
  type: TYPES.PRODUCT_CLEAN,
}); */

/* ----- CREATE SECTION ----- */

/* ----- UPDATE SECTION ----- */

/* ----- DELETE SECTION ----- */
