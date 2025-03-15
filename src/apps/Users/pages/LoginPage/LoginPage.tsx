/* Forms */
import * as Yup from 'yup';
import { useFormik } from 'formik';

/* Layouts */
import { AuthFormLayout } from '../../layouts';

/* Context */
import { startLogin } from '../../context';

/* Components */
import { ErrorMessage } from '@/apps/UI/components';

/* Hooks */
import { useAppDispatch, useDynamicPageTitle } from '@/hooks';

export const LoginPage = () => {
  useDynamicPageTitle('Sign in');

  const dispatch = useAppDispatch();

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    }),
    onSubmit: (data) => {
      dispatch(startLogin(data));
    },
  });

  return (
    <form onSubmit={handleSubmit} className="form-container p-4">
      <AuthFormLayout register={false}>
        <article>
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
