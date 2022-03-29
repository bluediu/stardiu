import { api_enpoint } from '../../helpers/helpApi';
import { helpHttp } from '../../helpers/helpHttp';
import { TYPES } from '../types/types';
import { setIsLoading } from './shared.action';

// instance for http helper
const api = helpHttp();

/* ----- CATEGORIES SECTION ----- */

/* ----- GET SECTION ----- */

/* get all categories */
export const startGetAllCategories = () => {
  return async (dispatch) => {
    try {
      const res = await api.get(`${api_enpoint.getCategories}`);

      dispatch(getCategories(res.categories));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 *
 * @param {string} id category id
 */
export const startGetProductByCategory = (id) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProductsByCategory}/${id}`
      );

      dispatch(getProductsCategory(res.products));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 *
 * @param {Array<object>} data
 */
const getCategories = (data) => ({
  type: TYPES.CATEGORY_GET,
  payload: data,
});

/**
 *
 * @param {Array<object>} data
 */
const getProductsCategory = (data) => ({
  type: TYPES.PRODUCTS_CATEGORY,
  payload: data,
});
