import React from 'react';
import PropTypes from 'prop-types';

import { MDBBtn } from 'mdb-react-ui-kit';

function AuthLoginBtn({ margin }) {
  return (
    <>
      <MDBBtn
        rounded
        outline
        color="dark"
        className={margin ? 'me-2' : ''}
      >
        Log In
      </MDBBtn>
    </>
  );
}

AuthLoginBtn.propTypes = {
  margin: PropTypes.bool.isRequired,
};

export default AuthLoginBtn;
