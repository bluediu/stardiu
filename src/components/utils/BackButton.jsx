import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { useHistory } from 'react-router';

function BackButton() {
  let history = useHistory();

  return (
    <MDBBtn
      onClick={() => history.goBack()}
      size="sm"
      color="dark"
      rounded
    >
      <MDBIcon fas icon="caret-left" /> Go back
    </MDBBtn>
  );
}

export default BackButton;
