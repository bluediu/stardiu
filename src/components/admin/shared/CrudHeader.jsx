import React, { useState } from 'react';
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

/* components */
import NavbarLogo from '../../stardui/navbar/NavbarLogo';
import NavbarProfile from '../../stardui/navbar/NavbarProfile';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function CrudHeader() {
  return (
    <header className="mb-5">
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <div id="navbarHeader">
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <NavbarLogo />
              <section className="d-flex flex-md-row gap-3">
                <MDBNavbarItem>
                  <Link
                    className="nav-link"
                    to={ROUTE.ADMIN_PRODUCTS}
                  >
                    products
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link
                    className="nav-link"
                    to={ROUTE.ADMIN_CATEGORIES}
                  >
                    categories
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link
                    className="nav-link"
                    to={ROUTE.ADMIN_CUSTOMERS}
                  >
                    customers
                  </Link>
                </MDBNavbarItem>
              </section>
            </MDBNavbarNav>
          </div>
          <NavbarProfile />
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default CrudHeader;
