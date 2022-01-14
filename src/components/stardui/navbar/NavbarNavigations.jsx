import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function NavbarNavigations() {
  return (
    <section>
      <article className="row d-flex align-items-center">
        <div className="col-sm-12 col-lg-4">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </div>

        <div className="col-sm-12 col-lg-4">
          <NavLink
            to={ROUTE.MENU_BASE}
            className="nav-link"
            activeClassName="active"
          >
            Menu
          </NavLink>
        </div>

        <div className="col-sm-12 col-lg-4">
          <NavLink
            to={ROUTE.ABOUT}
            className="nav-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </div>
      </article>
    </section>
  );
}

export default NavbarNavigations;
