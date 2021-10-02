import { api_enpoint } from '../../helpers/helpApi';
import { helpHttp } from '../../helpers/helpHttp';
import { TYPES } from '../types/types';

// import Swal from 'sweetalert2';

// instance for http helper
const api = helpHttp();

/* ----- PRODUCTS SECTION ----- */

/* ----- GET SECTION ----- */

/* get all products */
export const startGetAllProducts = () => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProducts}/?page=1&limit=3`
      );
      dispatch(getAllProducts(res.products));
    } catch (err) {
      console.error(err);
    }
  };
};

export const startGetProductsByPage = (page = 1) => {
  return async (dispatch) => {
    try {
      const res = await api.get(
        `${api_enpoint.getProducts}/?page=${page}&limit=6`
      );

      console.log('Pagina ', page, res.products);
      dispatch(getAllProducts(res.products));
    } catch (err) {
      console.error(err);
    }
  };
};

/**
 * @param {*} data object
 */
const getAllProducts = (data) => ({
  type: TYPES.PRODUCT_GET,
  payload: data,
});

/* const getAllProductsByPage = (data) => ({
  type: TYPES.PRODUCT_GET_BY_PAGE,
  payload: data,
}); */

/* ----- CREATE SECTION ----- */

/* ----- UPDATE SECTION ----- */

/* ----- DELETE SECTION ----- */
