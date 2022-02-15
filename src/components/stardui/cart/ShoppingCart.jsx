import React from 'react';
import {
  MDBBadge,
  MDBIcon,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTE } from '../../../constants/auth-routes';

function ShoppingCart() {
  let history = useHistory();
  const { total } = useSelector((state) => state.shoppingCart);

  return (
    <div>
      <MDBNavbarLink
        className="me-3 pointer"
        onClick={() => history.push(ROUTE.CART)}
      >
        <MDBBadge pill color="danger">
          {total ? total : '0'}
        </MDBBadge>
        <span>
          <MDBIcon fas icon="shopping-cart"></MDBIcon>
        </span>
      </MDBNavbarLink>
    </div>
  );
}

export default ShoppingCart;
