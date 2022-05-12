import { api_enpoint, helpHttp } from '../../helpers';
import { TYPES } from '../types/types';

import { toast } from 'react-toastify';

// instance for http helper
const api = helpHttp();

/* ----- USER SECTION ----- */

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

const updateUserAvatar = (img) => ({
  type: TYPES.UPDATE_AVATAR,
  payload: img,
});
