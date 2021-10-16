import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function CreateBtn() {
  return (
    <div>
      <MDBBtn color="dark" outline>
        <MDBIcon fas icon="plus" /> Create
      </MDBBtn>
    </div>
  );
}

export default CreateBtn;
