/* Components */
import { MDBNavbarNav } from 'mdb-react-ui-kit';

import { NavbarOptions } from './NavbarOptions';

import { Link, useLocation } from 'react-router-dom';

/* Hooks */
import { useDeviceType } from '@/hooks';

/* Constants */
import { userPaths } from '@/apps/Users/constants';
import { productPaths } from '@/apps/Products/constants';

export const NavbarNavigation = () => {
  const location = useLocation();
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
          <Link
            className={`nav-link ${
              location.pathname === userPaths.HOME ? 'active' : ''
            }`}
            to={userPaths.HOME}
          >
            Home
          </Link>
        </article>
        <article className="ms-1">
          <Link
            className={`nav-link ${
              location.pathname.startsWith(productPaths.MENU) ? 'active' : ''
            }`}
            to={productPaths.MENU}
          >
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
