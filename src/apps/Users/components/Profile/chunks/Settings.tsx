/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Context */
import { startLogout, startUpdateUser } from '@/apps/Users/context';

/* Components */
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { ErrorMessage } from '@/apps/UI/components';

/* Hooks */
import { useAppDispatch } from '@/hooks';

interface IProps {
  user: { name: string; email: string };
}

export const Settings = (props: IProps) => {
  const { user } = props;

  const dispatch = useAppDispatch();

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email || '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .matches(/^[a-zA-ZÀ-ÿ\s]+$/, 'Name can only contain letters and spaces')
        .required(),
      email: Yup.string().email().optional(),
    }),
    onSubmit: (data) => {
      dispatch(startUpdateUser(data)).then(() => {
        if (user.email !== data.email) {
          dispatch(startLogout());
        }
      });
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 ">
        <article>
          <div className="alert alert-primary ">
            <MDBIcon fas icon="exclamation-triangle" className="me-2" />
            <small>
              If you change you e-mail, you will need to sign up again.
            </small>
          </div>
          {/* E-mail */}
          <section className="form-outline">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control border"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorMessage msg={errors.name} />}
          </section>

          {/* E-mail */}
          <section className="form-outline">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className="form-control border"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage msg={errors.email} />}
          </section>

          <MDBBtn rounded className="mt-4" color="dark" type="submit" block>
            Save
          </MDBBtn>
        </article>
      </form>
    </>
  );
};
