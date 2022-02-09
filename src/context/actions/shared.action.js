import { TYPES } from '../types/types';

export const setError = (error = null) => ({
  type: TYPES.ERROR_TO_FETCH,
  payload: error,
});

/**
 *
 * @param {boolean} state
 */
export const setIsLoading = (state = true) => ({
  type: TYPES.IS_LOADING,
  payload: state,
});
