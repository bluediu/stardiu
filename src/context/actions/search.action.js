import { api_enpoint, helpHttp } from '../../helpers';
import { TYPES } from '../types/types';
import { setIsLoading, setError } from './shared.action';

// instance for http helper
const api = helpHttp();

/**
 * @param {string} searchTerm: product name
 * @param {string} type: indicate which table should do the search
 */
export const startSearchByName = (searchTerm, type) => {
  return async (dispatch) => {
    try {
      // show loading
      dispatch(setIsLoading(true));

      const res = await api.get(
        `${api_enpoint.search}/${type}/${searchTerm}`
      );

      dispatch(setIsLoading(false));

      if (!res.err && searchTerm !== '') {
        // delete user object
        delete res.user;

        dispatch(
          searchedProducts({
            products: res.results,
            thereAreProducts: res.thereAreProducts,
          })
        );
      } else {
        dispatch(setError(res));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

const searchedProducts = ({ products, thereAreProducts }) => ({
  type: TYPES.PRODUCT_SEARCH,
  payload: {
    products,
    thereAreProducts,
  },
});
