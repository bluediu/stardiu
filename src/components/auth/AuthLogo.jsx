import React from 'react';
import { MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';
import IMG_LOGO from '../../assets/img/stardiuLogo.svg';

function AuthLogo() {
  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer>
          <div className="p-2">
            <img
              src={IMG_LOGO}
              height="30"
              alt=""
              loading="lazy"
            />
            <span className="ms-3">Stardiu</span>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default AuthLogo;
