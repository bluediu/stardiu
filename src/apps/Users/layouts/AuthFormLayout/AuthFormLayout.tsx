/* Components */
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

import { GoogleButton } from '../../components/Auth';

/* Hooks */
import { useAppSelector } from '@/hooks';

/* Interfaces */
import { IReactNodeProps } from '@/interfaces';

/* Constants */
import { usersPath } from '../../constants';

interface IProps extends IReactNodeProps {
  register: boolean;
}

export const AuthFormLayout = (props: IProps) => {
  const { children, register } = props;

  const { checking } = useAppSelector((state) => state.auth);

  return (
    <>
      <h3 className="mt-3 mb-4 text-center">
        {register ? 'Create Account' : 'Login'}
      </h3>

      <section className="mt-2 text-center">
        <span className="text-secondary-emphasis">
          {register ? 'Already have a account?' : "Don't have an account?"}
        </span>
        <Link
          to={register ? usersPath.LOGIN : usersPath.REGISTER}
          className="ms-1"
        >
          {register ? 'Sign in' : 'Sign up'}
        </Link>
      </section>

      <GoogleButton />

      {children}

      <MDBBtn rounded className="mt-4" color="dark" block disabled={checking}>
        {register ? 'SIGN UP' : 'LOGIN'}
      </MDBBtn>
    </>
  );
};
