import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function NavbarNavigations() {
  return (
    <section>
      <article className="row d-flex align-items-center">
        <div className="col-sm-12 col-lg-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>

        <div className="col-sm-12 col-lg-4">
          <Link to={ROUTE.MENU_BASE} className="nav-link">
            Menu
          </Link>
        </div>

        <div className="col-sm-12 col-lg-4">
          <Link to={ROUTE.ABOUT} className="nav-link">
            About
          </Link>
        </div>
      </article>
    </section>
  );
}

export default NavbarNavigations;
