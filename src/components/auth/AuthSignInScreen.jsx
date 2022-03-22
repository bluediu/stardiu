import React, { useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { ROUTE } from '../../constants/auth-routes';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Slide from 'react-reveal/Slide';
import AuthErrorMessage from './AuthErrorMessage';
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../context/actions/auth.action';

function AuthSignInScreen() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, email, password }) => {
    dispatch(
      startRegisterWithEmailPasswordName(name, email, password)
    );
  };

  useEffect(() => {
    document.title = 'Stardui - Sing In';
  }, []);

  return (
    <form
      className="form-container p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Slide top>
        <h2>Sign In</h2>

        <section className="form-outline">
          <label htmlFor="name" className="form-label mt-1">
            Name
          </label>

          <input
            type="text"
            id="name"
            defaultValue=""
            className="form-control border"
            {...register('name', {
              required: true,
              maxLength: 22,
              pattern: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
            })}
          />

          {errors.name && (
            <AuthErrorMessage msg="the name is not valid" />
          )}
        </section>

        <section className="form-outline">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            defaultValue=""
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
          <label htmlFor="password" className="form-label mt-1">
            Password
          </label>

          <input
            type="password"
            id="password"
            defaultValue=""
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

      <Link to={ROUTE.LOGIN} className="d-block mt-3">
        I have an account
      </Link>
    </form>
  );
}

export default AuthSignInScreen;
