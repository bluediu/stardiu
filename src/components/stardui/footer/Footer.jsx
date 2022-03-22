import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';
import Social from '../social/Social';

function Footer() {
  return (
    <div>
      <MDBFooter
        backgroundColor="light"
        className="text-center text-lg-left"
      >
        <MDBContainer className="p-4 pb-0">
          <hr />
          <small>Contactos</small>
          <Social />
          <hr />
          <div
            className="text-center p-3"
            style={{
              backgroundColor: 'white',
            }}
          >
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a
              className="text-dark"
              href="https://mdbootstrap.com/"
            >
              Stardiu Coffee Company. Todos los derechos
              reservados.
            </a>
          </div>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Footer;
