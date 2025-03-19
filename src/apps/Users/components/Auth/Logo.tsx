/* Components */
import { Link } from 'react-router-dom';
import { MDBContainer, MDBNavbar } from 'mdb-react-ui-kit';

/* Constants */
import { usersPath } from '../../constants';

/* Statics */
import LOGO from '/img/logo.svg';

export const Logo = () => {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer>
        <Link to={usersPath.HOME} className="url-no-style cursor-pointer">
          <section className="p-2 d-flex align-items-center">
            <img src={LOGO} height={30} alt="stardiu logo" />
            <span className="ms-3">Stardiu</span>
          </section>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
};
