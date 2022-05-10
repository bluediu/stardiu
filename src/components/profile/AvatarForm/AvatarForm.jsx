import {
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import React from 'react';

function AvatarForm({ setShowModal }) {
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
      <MDBListGroupItem className="text-body">
        Cargar foto
      </MDBListGroupItem>
      <MDBListGroupItem className="text-danger">
        Borrar foto actual
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

export default AvatarForm;
