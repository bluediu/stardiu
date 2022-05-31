import { api_enpoint, helpHttp } from '../../helpers';
import { TYPES } from '../types/types';
import { setIsLoading } from './shared.action';

// instance for http helper
const api = helpHttp();

/* ----- CATEGORIES SECTION ----- */

/* ----- GET SECTION ----- */

/**
 * It's an async function that returns a function that dispatches an action to get all categories from
 * the API and then dispatches an action to set the loading state to false.
 * @returns An object with a function as a property.
 */
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
 * It's an async function that takes in an id, and then dispatches two actions, one to get the products
 * by category, and the other to set the loading state to false.
 * @param {string} id - the id of the category
 */
export const startGetProductByCategory = (id) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProductsByCategory}/${id}`
      );

      dispatch(getProductsByCategory(res.products));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 * It returns an object with a type and a payload property.
 * @param {Array<object>} data - the data that you want to pass to the reducer
 */
const getCategories = (data) => ({
  type: TYPES.CATEGORY_GET,
  payload: data,
});

/**
 * This function returns an object with a type and a payload property.
 * @param {Array<object>} data - the data that you want to pass to the reducer
 */
const getProductsByCategory = (data) => ({
  type: TYPES.PRODUCTS_CATEGORY,
  payload: data,
});
