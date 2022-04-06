import { TYPES } from '../types/types';

/**
 * check for errors while making FETCH requests
 * @param {null | object} error
 * @returns
 */
export const setError = (error = null) => ({
  type: TYPES.ERROR_TO_FETCH,
  payload: error,
});

/**
 * Verify yet if FETCH request is loading
 * @param {boolean} state
 */
export const setIsLoading = (state = true) => ({
  type: TYPES.IS_LOADING,
  payload: state,
});
