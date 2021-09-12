import React, { useEffect } from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/auth-routes';
import Fade from 'react-reveal/Fade';
import AuthFormContainer from './AuthFormContainer';

function AuthSignInScreen() {
  useEffect(() => {
    document.title = 'Stardui - SingIn';
  }, []);

  return (
    <div>
      <AuthFormContainer>
        <Fade left cascade>
          <h2>Sign In</h2>
        </Fade>

        <Fade>
          <MDBInput
            label="Name"
            id="name"
            type="text"
            className="mb-4 mt-4"
          />

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

        <Link to={ROUTE.LOGIN} className="d-block mt-3">
          I have an account
        </Link>
      </AuthFormContainer>
    </div>
  );
}

export default AuthSignInScreen;
