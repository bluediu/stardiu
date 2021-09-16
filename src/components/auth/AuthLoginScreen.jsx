import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from 'react-hook-form';
import { ROUTE } from '../../constants/auth-routes';

import Slide from 'react-reveal/Slide';

import AuthFormContainer from './AuthFormContainer';
import GoogleButton from './googleButton/GoogleButton';

function AuthLoginScreen() {
  const { register, handleSubmit, watch } = useForm();

  console.log(watch('test'));

  useEffect(() => {
    document.title = 'Stardui - Login';
  }, []);

  return (
    <div>
      <AuthFormContainer>
        <Slide top>
          <h3 className="mt-3 mb-4">Log In</h3>

          <GoogleButton />

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

        <Link to={ROUTE.SIGN_IN} className="d-block mt-3">
          Create an account
        </Link>
      </AuthFormContainer>
    </div>
  );
}

export default AuthLoginScreen;
