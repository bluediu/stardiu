/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Layouts */
import { AuthFormLayout } from '../../layouts';

/* Context */
import { startRegister } from '../../context';

/* Components */
import { ErrorMessage } from '@/apps/UI/components';

/* Hooks */
import { useAppDispatch, useDynamicPageTitle } from '@/hooks';

export const RegisterPage = () => {
  useDynamicPageTitle('Sign up');

  const dispatch = useAppDispatch();

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .matches(/^[a-zA-Z0-9-]*$/, 'Name can only contain letters and numbers')
        .required(),
      email: Yup.string().email().required(),
      password: Yup.string().trim().required('Password is required').min(6),
    }),
    onSubmit: (data) => {
      dispatch(startRegister({ ...data, role: 'USER_ROLE' }));
    },
  });

  return (
    <form onSubmit={handleSubmit} className="form-container p-4">
      <AuthFormLayout register={true}>
        <article>
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

          {/* Password */}
          <section className="form-outline mt-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control border"
              value={values.password}
              onChange={handleChange}
            />

            {errors.password && <ErrorMessage msg={errors.password} />}
          </section>
        </article>
      </AuthFormLayout>
    </form>
  );
};
