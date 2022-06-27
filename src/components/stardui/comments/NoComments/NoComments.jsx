import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';

function NoComments() {
  return (
    <div className="alert alert-info text-center">
      <MDBIcon fas icon="exclamation-circle me-2" />
      No hay comentarios
    </div>
  );
}

export default NoComments;
