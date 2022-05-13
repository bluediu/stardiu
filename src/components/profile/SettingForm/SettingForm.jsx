import React from 'react';

/* Components */
import { MDBListGroupItem } from 'mdb-react-ui-kit';
import NameForm from '../NameForm';
import PasswordForm from '../PasswordForm';

import PropTypes from 'prop-types';

function SettingForm({
  setShowModal,
  setTitleModal,
  setClidrenModal,
}) {
  const onChangeName = () => {
    setTitleModal('Cambia tu nombre');
    setClidrenModal(<NameForm />);
  };

  const onChangePassword = () => {
    setTitleModal('Cambia tu contraseña');
    setClidrenModal(<PasswordForm />);
  };
  return (
    <ul
      style={{
        border: '0',
        padding: '8px',
        margin: '0',
        width: '100%',
      }}
      className="pointer list-group-flush"
    >
      <MDBListGroupItem onClick={onChangeName}>
        Cambiar nombre
      </MDBListGroupItem>
      <MDBListGroupItem onClick={onChangePassword}>
        Cambiar contraseña
      </MDBListGroupItem>
      <MDBListGroupItem className="text-danger">
        Cerrar sección
      </MDBListGroupItem>
      <MDBListGroupItem
        onClick={() => setShowModal(false)}
        className="text-black-50"
      >
        Cancelar
      </MDBListGroupItem>
    </ul>
  );
}

SettingForm.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  setTitleModal: PropTypes.func.isRequired,
  setClidrenModal: PropTypes.func.isRequired,
};

export default SettingForm;
