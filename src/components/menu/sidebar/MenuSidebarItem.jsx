import React from 'react';
import { MDBListGroupItem } from 'mdb-react-ui-kit';

function MenuSidebarItem({ name }) {
  return (
    <>
      <MDBListGroupItem style={{ border: '0' }}>
        <span className="text-capitalize">
          {name.toLowerCase()}
        </span>
      </MDBListGroupItem>
    </>
  );
}

export default MenuSidebarItem;
