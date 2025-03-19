/* Components */
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';
import { JackInTheBox } from 'react-awesome-reveal';

/* Context */
import { startLogout } from '@/apps/Users/context';

/* Hooks */
import { useAppDispatch } from '@/hooks';

/* Constants */
import { usersPath } from '@/apps/Users/constants';

export const ProfileOptions = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="toast-container end-0 py-1 pe-1">
      <JackInTheBox duration={400} triggerOnce>
        <article className="toast show mt-3">
          <section className="toast-header">
            <strong className="me-auto">Account</strong>
            <button type="button" className="btn-close ms-2 mb-1"></button>
          </section>

          <section className="toast-body">
            <div className="toast-links">
              <Link className="text-dark exit" to={'/'}>
                <MDBIcon fas icon="user" />
                <span className="mx-3">Perfil</span>
              </Link>
              <hr />
              <Link
                className="text-dark exit"
                to={usersPath.LOGIN}
                onClick={() => dispatch(startLogout())}
              >
                <MDBIcon fas icon="sign-out-alt" />
                <span className="mx-3">Logout</span>
              </Link>
            </div>
          </section>
        </article>
      </JackInTheBox>
    </div>
  );
};
