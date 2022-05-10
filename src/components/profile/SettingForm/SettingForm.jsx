import { MDBListGroupItem } from 'mdb-react-ui-kit';
import React from 'react';

function SettingForm({ setShowModal }) {
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
      <MDBListGroupItem>Cambiar nombre</MDBListGroupItem>
      <MDBListGroupItem>Cambiar contraseña</MDBListGroupItem>
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

export default SettingForm;
