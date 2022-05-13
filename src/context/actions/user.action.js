import { api_enpoint, helpHttp } from '../../helpers';
import { TYPES } from '../types/types';

import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { startLogout } from './auth.action';

// instance for http helper
const api = helpHttp();

/* ----- USER SECTION ----- */

/**
 * Update user avatar
 * @param {File} file file base64
 */
export const startUpdateUserAvatar = (file) => {
  return async (dispatch, getState) => {
    try {
      const formdata = new FormData();
      formdata.append('file', file, 'file');

      const userId = getState().auth.uid;

      if (userId) {
        fetch(`${api_enpoint.updateAvatar}/${userId}`, {
          method: 'PUT',
          body: formdata,
          redirect: 'follow',
        })
          .then((response) => response.json())
          .then((result) => {
            console.log('DATOS', result);
            toast.success('Imagen subida con éxito', {
              hideProgressBar: false,
              autoClose: 2000,
            });

            return dispatch(updateUserAvatar(result.img));
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    } catch (error) {
      return toast.error('No se pudo subir la foto', {
        hideProgressBar: false,
        autoClose: 2000,
      });
    }
  };
};

/**
 * Update username
 * @param {string} newName new username
 * @returns
 */
export const startUpdateUserName = (newName) => {
  return async (dispatch, getState) => {
    const authUser = getState().auth;

    // eslint-disable-next-line
    const { name, checking, ...rest } = authUser;
    const newUserData = { name: newName, ...rest };

    Swal.fire({
      title: 'Actualizando',
      text: 'Espere por favor 🔨',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    // read the previous token from local storage
    const token = localStorage.getItem('star-token');

    let meta = {
      body: newUserData,
      headers: {
        'content-type': 'application/json',
        'x-token': token,
      },
    };

    try {
      await api.put(
        `${api_enpoint.updateUserData}/${authUser.uid}`,
        meta
      );

      dispatch(updateUserData(newName));
      Swal.close();
    } catch (error) {
      console.error(error);
      Swal.close();
    }
  };
};

/**
 * Update password
 * @param {string} newPassword new password
 */
export const startUpdateUserPassword = (newPassword) => {
  return async (dispatch, getState) => {
    const authUser = getState().auth;

    // eslint-disable-next-line
    const { checking, ...rest } = authUser;
    const newUserData = { password: newPassword, ...rest };

    Swal.fire({
      title: 'Actualizando',
      text: 'Espere por favor 🔨',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    // read the previous token from local storage
    const token = localStorage.getItem('star-token');

    let meta = {
      body: newUserData,
      headers: {
        'content-type': 'application/json',
        'x-token': token,
      },
    };

    try {
      await api.put(
        `${api_enpoint.updateUserData}/${authUser.uid}`,
        meta
      );

      Swal.close();

      await Swal.fire(
        'Contraseña actualizada',
        'Tu sección actual se cerrará, por ingresa de nuevo con tu nueva contraseña',
        'warning'
      );

      dispatch(startLogout());
    } catch (error) {
      console.error(error);
      Swal.close();
    }
  };
};

const updateUserAvatar = (img) => ({
  type: TYPES.UPDATE_AVATAR,
  payload: img,
});

const updateUserData = (data) => ({
  type: TYPES.UPDATE_USER,
  payload: data,
});
