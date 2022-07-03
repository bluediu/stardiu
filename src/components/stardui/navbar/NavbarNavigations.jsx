import React from 'react';
import { ROUTE } from '../../../constants/auth-routes';

/* hooks */
import { NavLink } from 'react-router-dom';

function NavbarNavigations() {
  return (
    <section>
      <article className="row d-flex align-items-center">
        <div className="col-sm-12 col-lg-4">
          <NavLink to="/" className="nav-link">
            Inicio
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
            Acerca
          </NavLink>
        </div>
      </article>
    </section>
  );
}

export default NavbarNavigations;
