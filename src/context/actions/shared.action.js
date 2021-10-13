import { TYPES } from '../types/types';

/**
 *
 * @param {*} error: object
 */
export const setError = (error = null) => ({
  type: TYPES.ERROR_TO_FETCH,
  payload: error,
});

export const setIsLoading = (state = true) => ({
  type: TYPES.IS_LOADING,
  payload: state,
});
