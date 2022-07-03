import React from 'react';
import { ROUTE } from '../../../constants/auth-routes';

/* hooks */
import { useHistory } from 'react-router-dom';

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
        Inicia
      </MDBBtn>
    </>
  );
}

export default AuthLoginBtn;
