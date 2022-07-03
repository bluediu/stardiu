import React, { useEffect } from 'react';

/* hooks & constants */
import { ROUTE } from '../../constants/auth-routes';
import { useForm } from 'react-hook-form';

/* context */
import { useDispatch } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../../context/actions/auth.action';

/* Components */
import { Link } from 'react-router-dom';
import AuthErrorMessage from './AuthErrorMessage';
import Slide from 'react-reveal/Slide';
import AuthContinue from './AuthContinue';

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
    document.title = 'Stardiu - Regístrate';
  }, []);

  return (
    <form
      className="form-container p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Slide top>
        <h2>Regístrate</h2>

        <section className="form-outline">
          <label htmlFor="name" className="form-label mt-1">
            Nombre
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
            <AuthErrorMessage msg="El nombre no es valido" />
          )}
        </section>

        <section className="form-outline">
          <label htmlFor="email" className="form-label">
            Correo electrónico
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
            <AuthErrorMessage msg="El correo no es valido" />
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
            <AuthErrorMessage msg="La contraseña no es valida, debe tener al menos 6 letras o menos que 22" />
          )}
        </section>

        <AuthContinue />
      </Slide>

      <Link to={ROUTE.LOGIN} className="d-block mt-3">
        Ya tengo un cuenta
      </Link>
    </form>
  );
}

export default AuthSignInScreen;
