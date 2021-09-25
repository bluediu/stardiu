import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../../constants/auth-routes';
import { startLogout } from '../../../../context/actions/auth.action';

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
      <div className="mt-3">
        <Link className="text-dark exit" to={ROUTE.LOGIN}>
          <div style={bodyStyled} onClick={handleLogout}>
            <MDBIcon fas icon="sign-out-alt" />
            <span className="mx-3">Salir</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavbarProfileOptionsBody;
