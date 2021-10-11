import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from 'react-hook-form';
import { ROUTE } from '../../constants/auth-routes';

import Slide from 'react-reveal/Slide';

import GoogleButton from './googleButton/GoogleButton';
import AuthErrorMessage from './AuthErrorMessage';
import { useDispatch } from 'react-redux';
import {
  startLoginWithEmailPassword,
  startLoginWithGoogle,
} from '../../context/actions/auth.action';

/* GOOGLE AUTH */
import { GoogleLogin } from 'react-google-login';

function AuthLoginScreen() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const responseGoogle = ({ $b }) => {
    const { id_token } = $b;
    dispatch(startLoginWithGoogle(id_token));
  };

  useEffect(() => {
    document.title = 'Stardui - Login';
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container p-4"
      >
        <Slide top>
          <h3 className="mt-3 mb-4">Log In</h3>

          <GoogleLogin
            // eslint-disable-next-line no-undef
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <GoogleButton
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              />
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

          <section className="form-outline">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue="josuerivas@gmail.com"
              className="form-control border"
              {...register('email', {
                required: true,
                maxLength: 20,
                pattern: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
              })}
            />
            {errors.email && (
              <AuthErrorMessage msg="The email is not valid" />
            )}
          </section>

          <section className="form-outline">
            <label
              htmlFor="password"
              className="form-label mt-1"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              defaultValue="kernel@panic2311"
              className="form-control border"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 22,
              })}
            />

            {errors.password && (
              <AuthErrorMessage msg="The password is not valid, must at least 6 letter or less that 22" />
            )}
          </section>

          <MDBBtn rounded className="mt-4" color="dark">
            Log In
          </MDBBtn>
        </Slide>

        <Link to={ROUTE.SIGN_IN} className="d-block mt-3">
          Create an account
        </Link>
      </form>
    </div>
  );
}

export default AuthLoginScreen;
