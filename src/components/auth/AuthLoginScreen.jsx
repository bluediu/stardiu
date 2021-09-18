import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useForm } from 'react-hook-form';
import { ROUTE } from '../../constants/auth-routes';

import Slide from 'react-reveal/Slide';

import GoogleButton from './googleButton/GoogleButton';
import AuthErrorMessage from './AuthErrorMessage';
import { useDispatch } from 'react-redux';
import { startLoginWithEmailPassword } from '../../context/actions/auth.action';

function AuthLoginScreen() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ email, password }) => {
    // TODO: BORAR DATOS POR DEFECTO
    dispatch(startLoginWithEmailPassword(email, password));
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

          <GoogleButton />

          <section className="form-outline">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue="test1@gmail.com"
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
              defaultValue="123456"
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
