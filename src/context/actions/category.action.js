import { api_enpoint } from '../../helpers/helpApi';
import { helpHttp } from '../../helpers/helpHttp';
import { TYPES } from '../types/types';

// import Swal from 'sweetalert2';

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
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 *
 * @param {*} data: array
 * @returns
 */
const getCategories = (data) => ({
  type: TYPES.CATEGORY_GET,
  payload: data,
});
