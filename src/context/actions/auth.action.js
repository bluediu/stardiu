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
        dispatch(authAction({ uid: user.uid, name: user.name }));
      } else {
        Swal.fire(
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
  email,
  password,
  name
) => {
  return async (dispath) => {
    const options = {
      email,
      password,
      name,
    };
    const res = await api.post(api_enpoint.createUser, options);
  };
};

/***
  reducer action for multiple purposes
  @params -> uid: string, name: string
*/
export const authAction = (user) => ({
  type: TYPES.AUTH_LOGIN,
  payload: user,
});
