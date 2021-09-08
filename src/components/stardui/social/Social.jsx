import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';

function Social() {
  return (
    <div>
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: '#3b5998' }}
        href="#"
        target="_blank"
      >
        <MDBIcon fab icon="facebook-f" />
      </MDBBtn>
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: '#55acee' }}
        href="#"
        target="_blank"
      >
        <MDBIcon fab icon="twitter" />
      </MDBBtn>
      <MDBBtn
        floating
        className="m-1"
        style={{ backgroundColor: '#ac2bac' }}
        href="#"
        target="_blank"
      >
        <MDBIcon fab icon="instagram" />
      </MDBBtn>
    </div>
  );
}

export default Social;
