import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';

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
