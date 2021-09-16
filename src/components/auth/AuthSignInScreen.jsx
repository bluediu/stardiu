import React, { useEffect } from 'react';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { ROUTE } from '../../constants/auth-routes';
import { Link } from 'react-router-dom';

import AuthFormContainer from './AuthFormContainer';
import Slide from 'react-reveal/Slide';

function AuthSignInScreen() {
  useEffect(() => {
    document.title = 'Stardui - Sing In';
  }, []);

  return (
    <div>
      <AuthFormContainer>
        <Slide top>
          <h2>Sign In</h2>

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

          <MDBBtn rounded className="mt-4" color="dark">
            Log In
          </MDBBtn>
        </Slide>

        <Link to={ROUTE.LOGIN} className="d-block mt-3">
          I have an account
        </Link>
      </AuthFormContainer>
    </div>
  );
}

export default AuthSignInScreen;
