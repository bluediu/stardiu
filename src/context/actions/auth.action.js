import { api_enpoint } from '../../helpers/helpApi';
import { helpHttp } from '../../helpers/helpHttp';
import { TYPES } from '../types/types';

import Swal from 'sweetalert2';

// instance for http helper
const api = helpHttp();

/* ----- AUTH SECTION ----- */

/***
  action when the user log in
  @params -> email:string, password: string
*/
export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      let data = {
        body: { email, password },
        headers: { 'content-type': 'application/json' },
      };

      const res = await api.post(api_enpoint.login, data);

      if (!res.err) {
        const { user } = res;
        localStorage.setItem('token', res.token);
        return dispatch(
          authAction({ uid: user.uid, name: user.name })
        );
      } else {
        return Swal.fire(
          'Error',
          'Email / password are incorred',
          'error'
        );
      }
    } catch (error) {
      console.error(error.msg);
    }
  };
};

/***
  action for register a new user
  @params -> email:string, password: string, name: string
*/
export const startRegisterWithEmailPasswordName = (
  name,
  email,
  password
) => {
  return async (dispatch) => {
    try {
      let data = {
        body: {
          name,
          email,
          password,
          role: 'USER_ROLE',
          google: false,
        },
        headers: { 'content-type': 'application/json' },
      };

      const res = await api.post(api_enpoint.createUser, data);

      if (!res.err) {
        const { uid, name } = res;
        localStorage.setItem('token', res.token);

        dispatch(authAction({ uid, name }));
      } else {
        return Swal.fire(
          'Error',
          'That email already was taken, please try another',
          'error'
        );
      }
    } catch (error) {
      console.error(error);
    }
  };
};

/***
  reducer action for login and sign in
  @params -> uid: string, name: string
*/
export const authAction = (user) => ({
  type: TYPES.AUTH_LOGIN,
  payload: user,
});
