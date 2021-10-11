import React from 'react';
import {
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

function CrudHeader() {
  return (
    <header className="mb-5">
      <MDBNavbar expand="lg" light bgColor="white">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <div
            className="collapse navbar-collapse"
            id="navbarExample01"
          >
            <MDBNavbarNav right className="mb-2 mb-lg-0">
              <NavbarLogo />
              <MDBNavbarItem>
                <Link className="nav-link" to="/">
                  products
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav-link" to="/">
                  categories
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className="nav-link" to="/">
                  customers
                </Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
          <NavbarProfile />
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
}

export default CrudHeader;
