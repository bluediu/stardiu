import { MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';

function AuthButtons({ children }) {
  return (
    <div>
      <MDBBtn rounded outline color="dark" className="me-2">
        Log In
      </MDBBtn>
      <MDBBtn rounded color="dark">
        Sign In
      </MDBBtn>
    </div>
  );
}

export default AuthButtons;
