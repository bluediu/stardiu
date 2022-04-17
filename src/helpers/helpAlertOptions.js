import Swal from 'sweetalert2';

/**
 * Function that will show an alert with option
 * @param {{title, text, icon}} options
 * @return {Promise} Return an alert to confirm or cancel an action
 */
export const alertOptions = async (options) => {
  const { title, text, icon } = options;

  let { isConfirmed } = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#66A593',
    cancelButtonColor: '#FF9DA1',
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
  });

  return isConfirmed;
};
