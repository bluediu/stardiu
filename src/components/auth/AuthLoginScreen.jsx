import React from 'react';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import AuthFormContainer from './AuthFormContainer';
import { ROUTE } from '../../constants/auth-routes';

function AuthLoginScreen() {
  return (
    <div>
      <AuthFormContainer>
        <h3 className="mt-3 mb-4">Log In</h3>

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

        <Link to={ROUTE.SIGN_IN} className="d-block mt-3">
          Create an account
        </Link>
      </AuthFormContainer>
    </div>
  );
}

export default AuthLoginScreen;
