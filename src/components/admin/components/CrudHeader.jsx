import React from 'react';
import {
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

/* components */
import NavbarLogo from '../../stardui/navbar/NavbarLogo';
import NavbarProfile from '../../stardui/navbar/NavbarProfile';

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
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">About</MDBNavbarLink>
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
