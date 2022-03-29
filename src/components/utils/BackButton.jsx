import React from 'react';
import { useHistory } from 'react-router';

/* Components */
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function BackButton() {
  let history = useHistory();

  return (
    <MDBBtn
      onClick={() => history.goBack()}
      size="sm"
      color="dark"
      rounded
    >
      <MDBIcon fas icon="caret-left" /> Regresar
    </MDBBtn>
  );
}

export default BackButton;
