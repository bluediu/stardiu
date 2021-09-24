import { MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarProfileOptionsBody() {
  return (
    <section className="toast-body">
      <div className="mt-3">
        <Link className="text-dark exit" to="/auth/login">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <MDBIcon fas icon="sign-out-alt" />
            <span className="mx-3">Salir</span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavbarProfileOptionsBody;
