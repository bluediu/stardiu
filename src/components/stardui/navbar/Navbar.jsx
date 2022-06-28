import React, { useState } from 'react';

/* components */
import {
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

import NavbarLogo from './NavbarLogo';
import NavbarNavigations from './NavbarNavigations';
import NavbarOptions from './NavbarOptions';

function Navbar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="light"
      style={{ zIndex: '999' }}
    >
      <MDBContainer fluid>
        <NavbarLogo />

        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar center show={showNavSecond}>
          <MDBNavbarNav className="justify-content-between">
            <NavbarNavigations />

            <NavbarOptions />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
