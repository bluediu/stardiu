import {
  MDBBadge,
  MDBIcon,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function ShoppingCart() {
  let history = useHistory();

  return (
    <div>
      <MDBNavbarLink
        className="me-3 pointer"
        onClick={() => history.push(ROUTE.CART)}
      >
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
