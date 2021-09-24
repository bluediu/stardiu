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
        localStorage.setItem('star-token', res.token);
        return dispatch(
          authAction({
            uid: user.uid,
            name: user.name,
            img: user.img,
          })
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
        const { uid, name, img } = res;
        localStorage.setItem('star-token', res.token);

        return dispatch(authAction({ uid, name, img }));
      } else {
        dispatch(checkingFinish());

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

/* ----- VALIDATE JWT SECTION ----- */

/***
  action for renew the previous token and create a new token for the user section
  @return new token in localstore
*/

export const startCheckingRenewToken = () => {
  return async (dispatch) => {
    try {
      // read the previous token from local storage
      const token = localStorage.getItem('star-token') || '';
      const data = {
        headers: {
          'content-type': 'application/json',
          'x-token': token,
        },
      };
      const body = await api.get(api_enpoint.renew, data);

      if (body.ok) {
        const { uid, name, img } = body;
        localStorage.setItem('star-token', body.token);

        return dispatch(authAction({ uid, name, img }));
      } else {
        return dispatch(checkingFinish());
      }
    } catch (error) {
      dispatch(checkingFinish());
      console.error(error);
    }
  };
};

/***
 * verified if there is authenticated user
 * @return boolean
 */
const checkingFinish = (checking = true) => ({
  type: TYPES.AUTH_CHECKING,
  payload: checking,
});

/***
  reducer action for login and sign in
  @params -> uid: string, name: string
  @return object
*/
const authAction = (user) => ({
  type: TYPES.AUTH_LOGIN,
  payload: user,
});
