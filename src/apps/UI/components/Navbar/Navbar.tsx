import { useState } from 'react';

import {
  MDBIcon,
  MDBNavbar,
  MDBCollapse,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
} from 'mdb-react-ui-kit';

/* Components */
import { NavbarNavigation } from './chunks';

/* Hooks */
import { useDeviceType } from '@/hooks';

import { useNavigate } from 'react-router-dom';

/* Constants */
import { userPaths } from '@/apps/Users/constants';

/* Statics */
import LOGO from '/img/logo.svg';

export const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useDeviceType();

  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" style={{ zIndex: '999' }}>
      <MDBContainer fluid>
        {/* Logo */}
        <MDBNavbarBrand className="d-flex align-items-center">
          <img
            src={LOGO}
            alt="stardiu"
            height="35"
            onClick={() => navigate(userPaths.HOME)}
            style={{ cursor: 'pointer' }}
          />
        </MDBNavbarBrand>

        {/* Mobile menu button */}
        <MDBNavbarToggler
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowSecondary(!showSecondary)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        {isMobile ? (
          <MDBCollapse navbar open={showSecondary}>
            <NavbarNavigation />
          </MDBCollapse>
        ) : (
          <NavbarNavigation />
        )}
      </MDBContainer>
    </MDBNavbar>
  );
};
