import React from 'react';
import { ROUTE } from '../../../../constants/auth-routes';

/* context */
import { useDispatch } from 'react-redux';
import { startLogout } from '../../../../context/actions/auth.action';

/* Components */
import { MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function NavbarProfileOptionsBody() {
  /* styles */
  const bodyStyled = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  };

  const dispatch = useDispatch();

  const handleLogout = () => dispatch(startLogout());

  return (
    <section className="toast-body">
      <div className="toast-links">
        <Link className="text-dark exit" to={ROUTE.PROFILE}>
          <div style={bodyStyled}>
            <MDBIcon fas icon="user" />
            <span className="mx-3">Perfil</span>
          </div>
        </Link>

        <Link className="text-dark exit mt-2" to={ROUTE.LOGIN}>
          <div style={bodyStyled} onClick={handleLogout}>
            <MDBIcon fas icon="sign-out-alt" />
            <span className="mx-3">Cerrar sección</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavbarProfileOptionsBody;
