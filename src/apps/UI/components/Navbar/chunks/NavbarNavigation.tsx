/* Components */
import { MDBNavbarNav } from 'mdb-react-ui-kit';

import { NavbarOptions } from './NavbarOptions';

import { Link } from 'react-router-dom';

/* Hooks */
import { useDeviceType } from '@/hooks';

export const NavbarNavigation = () => {
  const isMobile = useDeviceType();

  const styles = 'd-flex w-100 justify-content-between';

  return (
    <MDBNavbarNav
      className={`${styles} ${
        isMobile ? 'align-items-start' : 'align-items-center'
      }`}
    >
      <li className={!isMobile ? 'd-flex' : ''}>
        <article className="ms-1">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </article>
        <article className="ms-1">
          <Link className="nav-link" to="/">
            Menu
          </Link>
        </article>
        <article className="ms-1">
          <Link className="nav-link" to="/">
            About us
          </Link>
        </article>
      </li>

      <li className={`d-flex ${isMobile ? 'mt-3' : 'mt-0'}`}>
        <section className="d-flex justify-content-end align-items-center">
          <NavbarOptions />
        </section>
      </li>
    </MDBNavbarNav>
  );
};
