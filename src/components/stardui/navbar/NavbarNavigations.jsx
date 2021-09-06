import React from 'react';
import { MDBNavbarLink } from 'mdb-react-ui-kit';

function NavbarNavigations() {
  return (
    <section>
      <article className="row d-flex align-items-center">
        <div className="col-sm-12 col-lg-4">
          <MDBNavbarLink href="#">Home</MDBNavbarLink>
        </div>

        <div className="col-sm-12 col-lg-4">
          <MDBNavbarLink href="#">Menu</MDBNavbarLink>
        </div>

        <div className="col-sm-12 col-lg-4">
          <MDBNavbarLink href="#">About</MDBNavbarLink>
        </div>
      </article>
    </section>
  );
}

export default NavbarNavigations;
