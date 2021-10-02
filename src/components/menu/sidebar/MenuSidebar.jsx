import React, { useState } from 'react';
import {
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

import MenuSidebarItem from './MenuSidebarItem';

let dataTest = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

function MenuSidebar() {
  const [data, setData] = useState(dataTest);
  //  className="sidebar-none"
  return (
    <nav>
      <section>
        <h4>Categories</h4>
        <MDBListGroup>
          {data.map((d) => (
            <MenuSidebarItem key={d.id} />
          ))}
        </MDBListGroup>
      </section>
    </nav>
  );
}

export default MenuSidebar;
