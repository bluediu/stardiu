import React from 'react';
import { useHistory } from 'react-router-dom';
import IMG_LOGO from '../../assets/img/stardiuLogo.svg';

/* Components */
import { MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';

function AuthLogo() {
  let history = useHistory();

  return (
    <div>
      <MDBNavbar light bgColor="light">
        <MDBContainer
          onClick={() => history.push('/')}
          style={{ cursor: 'pointer' }}
        >
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
