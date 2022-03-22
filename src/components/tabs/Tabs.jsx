import React from 'react';
import { NavLink } from 'react-router-dom';

function Tabs() {
  return (
    <div>
      <ul
        className="nav nav-tabs nav-fill mb-3"
        id="ex1"
        role="tablist"
      >
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/menu"
            activeClassName="active"
          >
            Todos los productos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/categories"
            activeClassName="active"
          >
            Categorias
          </NavLink>
        </li>
        {/*   <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/search"
            activeClassName="active"
          >
            Search
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default Tabs;
