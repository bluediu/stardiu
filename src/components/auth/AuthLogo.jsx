import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';
import React from 'react';
import IMG_LOGO from '../../assets/img/stardiuLogo.svg';

function AuthLogo() {
  //className="auth-img-center"
  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer>
          <MDBNavbarBrand href="#">
            <img
              src={IMG_LOGO}
              height="30"
              alt=""
              loading="lazy"
            />
            <span>Stardiu</span>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default AuthLogo;
