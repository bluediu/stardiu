import React from 'react';
import { ROUTE } from '../../../constants/auth-routes';

/* hooks */
import { useHistory } from 'react-router-dom';

/* context */
import { useSelector } from 'react-redux';

/* Components */
import {
  MDBBadge,
  MDBIcon,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

function ShoppingCart({ isAuth }) {
  let history = useHistory();
  const { total } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <MDBNavbarLink
        disabled={isAuth}
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
    </>
  );
}

ShoppingCart.propTypes = {
  isAuth: PropTypes.bool,
};

export default ShoppingCart;
