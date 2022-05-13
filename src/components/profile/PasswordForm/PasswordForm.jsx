import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { startUpdateUserPassword } from '../../../context/actions/user.action';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import AuthErrorMessage from '../../auth/AuthErrorMessage';

function PasswordForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdatePassword = ({ password }) => {
    dispatch(startUpdateUserPassword(password));
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdatePassword)}
      className="p-4"
    >
      <section className="form-outline">
        <label htmlFor="password" className="form-label mt-1">
          Nueva contraseña
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

      <MDBBtn
        rounded
        className="my-2"
        size="sm"
        color="dark"
        outline
      >
        Actualizar
      </MDBBtn>
    </form>
  );
}

export default PasswordForm;
