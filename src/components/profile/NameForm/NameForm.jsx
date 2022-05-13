import React from 'react';
import { useForm } from 'react-hook-form';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import AuthErrorMessage from '../../auth/AuthErrorMessage';
import { useDispatch } from 'react-redux';
import { startUpdateUserName } from '../../../context/actions/user.action';

function NameForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateName = ({ name }) => {
    dispatch(startUpdateUserName(name));
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdateName)}
      className="p-4"
    >
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

export default NameForm;
