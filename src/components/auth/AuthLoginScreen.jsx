import React, { useEffect } from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AuthFormContainer from './AuthFormContainer';
import Fade from 'react-reveal/Fade';

import { ROUTE } from '../../constants/auth-routes';
import GoogleButton from './googleButton/GoogleButton';

function AuthLoginScreen() {
  useEffect(() => {
    document.title = 'Stardui - Login';
  }, []);

  return (
    <div>
      <AuthFormContainer>
        <Fade left cascade>
          <h3 className="mt-3 mb-4">Log In</h3>
        </Fade>
        <GoogleButton />

        <Fade>
          <MDBInput
            label="Email address"
            id="email"
            type="email"
          />
          <MDBInput
            label="Password"
            id="password"
            type="password"
            className="mt-4"
          />
        </Fade>
        <MDBBtn rounded className="mt-4" color="dark">
          Log In
        </MDBBtn>

        <Link to={ROUTE.SIGN_IN} className="d-block mt-3">
          Create an account
        </Link>
      </AuthFormContainer>
    </div>
  );
}

export default AuthLoginScreen;
