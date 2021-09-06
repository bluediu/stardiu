import {
  MDBBadge,
  MDBIcon,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import React from 'react';

function ShoppingCart() {
  return (
    <div>
      <MDBNavbarLink href="#" className="me-3">
        <MDBBadge pill color="danger">
          0
        </MDBBadge>
        <span>
          <MDBIcon fas icon="shopping-cart"></MDBIcon>
        </span>
      </MDBNavbarLink>
    </div>
  );
}

export default ShoppingCart;
