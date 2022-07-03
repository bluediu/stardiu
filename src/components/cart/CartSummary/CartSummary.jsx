import React, { useState } from 'react';

/* helpers */
import { formatPrice } from '../../../helpers';

/* hooks */
import { useSelector } from 'react-redux';

/* Components */
import { MDBBtn } from 'mdb-react-ui-kit';
import Payment from '../../payment/Payment';

/* styles */
import './CartSummary.css';

import PropTypes from 'prop-types';

function CartSummary({ userName, total }) {
  const { resume, thereAreProducts } = useSelector(
    (state) => state.shoppingCart
  );
  const [showModal, setShowModal] = useState(false);

  const toggleShow = () => setShowModal(!showModal);

  return (
    <div className="summary">
      <h2 className="summary-title">RESUMEN</h2>

      <div className="summary-sub-item">
        <span className="summary-item-text font-weight-bold">
          Productos
        </span>
        <span className="summary-item-price">{total}</span>
      </div>

      <div className="summary-sub-item">
        <span className="summary-item-text font-weight-bold">
          Propietario
        </span>
        <span className="summary-item-price">{userName}</span>
      </div>

      <div className="summary-item">
        <span className="summary-item-text">Total</span>
        <span className="summary-item-price">
          {formatPrice.format(resume)}
        </span>
      </div>

      <Payment show={showModal} toggleShow={toggleShow} />
      <div className="d-grid gap-2">
        <MDBBtn
          color="dark"
          disabled={!thereAreProducts}
          onClick={toggleShow}
        >
          Ordenar ahora
        </MDBBtn>
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  userName: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartSummary;
