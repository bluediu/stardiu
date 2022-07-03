import React from 'react';
import { ROUTE } from '../../../constants/auth-routes';

/* hooks */
import { useHistory } from 'react-router-dom';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';

function AuthSignInBtn() {
  let history = useHistory();

  return (
    <>
      <MDBBtn
        rounded
        color="dark"
        onClick={() => history.push(ROUTE.SIGN_IN)}
      >
        Regístrate
      </MDBBtn>
    </>
  );
}

export default AuthSignInBtn;
