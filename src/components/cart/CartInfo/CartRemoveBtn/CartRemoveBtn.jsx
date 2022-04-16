import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  countProducts,
  startDeleteOneFromCart,
} from '../../../../context/actions/shoppingCart';

/* Components */
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

function CartRemoveBtn({ productId, id }) {
  const dispatch = useDispatch();

  /* Redux: global states */
  const { uid } = useSelector((state) => state.auth);
  const { total } = useSelector((state) => state.shoppingCart);

  const handleDeleteOneFromCart = () => {
    const { _id } = productId;
    dispatch(startDeleteOneFromCart(_id, uid, true, id));
    dispatch(countProducts(total - 1));
  };

  return (
    <MDBBtn
      color="dark"
      size="sm"
      rounded
      outline
      className="mt-2"
      onClick={handleDeleteOneFromCart}
      style={{ border: '1px dashed black' }}
    >
      <MDBIcon fas icon="trash" className="me-2" />
      QUITAR
    </MDBBtn>
  );
}

CartRemoveBtn.propTypes = {
  productId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartRemoveBtn;
