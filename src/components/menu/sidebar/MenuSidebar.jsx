import {
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

import React from 'react';

function MenuSidebar() {
  return (
    <nav>
      <section>
        <h4>Test</h4>
        <MDBListGroup>
          <MDBListGroupItem>Test one</MDBListGroupItem>
          <MDBListGroupItem>Test two</MDBListGroupItem>
          <MDBListGroupItem>Test three</MDBListGroupItem>
          <MDBListGroupItem>Test three</MDBListGroupItem>
          <MDBListGroupItem>Test three</MDBListGroupItem>
          <MDBListGroupItem>Test three</MDBListGroupItem>
        </MDBListGroup>
      </section>
    </nav>
  );
}

export default MenuSidebar;
