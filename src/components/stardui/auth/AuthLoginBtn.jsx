import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function AuthLoginBtn({ margin }) {
  let history = useHistory();

  return (
    <>
      <MDBBtn
        rounded
        outline
        color="dark"
        className={margin ? 'me-2' : ''}
        onClick={() => history.push(ROUTE.LOGIN)}
      >
        Log In
      </MDBBtn>
    </>
  );
}

export default AuthLoginBtn;
