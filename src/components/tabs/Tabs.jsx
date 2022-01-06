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
            All products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/categories"
            activeClassName="active"
          >
            Categories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/seach"
            activeClassName="active"
          >
            Search
          </NavLink>
        </li>
      </ul>

      {/*     <div className="tab-content" id="ex2-content">
        <div
          className="tab-pane fade show active"
          id="ex2-tabs-1"
          role="tabpanel"
          aria-labelledby="ex2-tab-1"
        >
          Tab 1 content
        </div>
        <div
          className="tab-pane fade"
          id="ex2-tabs-2"
          role="tabpanel"
          aria-labelledby="ex2-tab-2"
        >
          Tab 2 content
        </div>
        <div
          className="tab-pane fade"
          id="ex2-tabs-3"
          role="tabpanel"
          aria-labelledby="ex2-tab-3"
        >
          Tab 3 content
        </div>
      </div> */}
    </div>
  );
}

export default Tabs;
