import React from 'react';
import STAR_LOGO from '../../../assets/img/stardiuLogo.svg';
import { useHistory } from 'react-router';

/* Components */
import { MDBNavbarBrand } from 'mdb-react-ui-kit';

function NavbarLogo() {
  let history = useHistory();
  return (
    <MDBNavbarBrand>
      <img
        src={STAR_LOGO}
        alt="startdiu"
        height="30"
        onClick={() => history.push('/')}
        loading="lazy"
      />
    </MDBNavbarBrand>
  );
}

export default NavbarLogo;
