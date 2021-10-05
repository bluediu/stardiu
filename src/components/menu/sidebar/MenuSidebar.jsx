import React from 'react';
import { MDBListGroup } from 'mdb-react-ui-kit';

import MenuSidebarItem from './MenuSidebarItem';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function MenuSidebar() {
  const dispatch = useDispatch();
  const { records: categories } = useSelector(
    (state) => state.categories
  );

  /* styles */
  const MenuSidebarStyled = { position: 'sticky', top: '43px' };

  return (
    <nav style={MenuSidebarStyled}>
      <section>
        <h4>Categories</h4>
        <MDBListGroup>
          {categories.map((d) => (
            <MenuSidebarItem key={d.id} />
          ))}
        </MDBListGroup>
      </section>
    </nav>
  );
}

export default MenuSidebar;
