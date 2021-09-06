import React from 'react';
import { MDBNavbarBrand } from 'mdb-react-ui-kit';
import STAR_LOGO from '../../../assets/img/stardiuLogo.svg';

function NavbarLogo() {
  return (
    <MDBNavbarBrand>
      <img
        src={STAR_LOGO}
        alt="startdiu"
        height="30"
        loading="lazy"
      />
    </MDBNavbarBrand>
  );
}

export default NavbarLogo;
