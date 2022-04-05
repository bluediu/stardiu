import React from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

function CartSummary({ userName, total }) {
  return (
    <div className="summary">
      <h2 className="summary-title">RESUMEN</h2>

      <div className="summary-sub-item">
        <span className="summary-item-text font-weight-bold">
          Productos
        </span>
        <span className="summary-item-price">{total}</span>
      </div>

      <div className="summary-sub-item ">
        <span className="summary-item-text font-weight-bold">
          Propietario
        </span>
        <span className="summary-item-price">{userName}</span>
      </div>

      <div className="summary-item">
        <span className="summary-item-text">Total</span>
        <span className="summary-item-price">$000</span>
      </div>

      <div className="d-grid gap-2">
        <MDBBtn color="dark">Ordenar ahora</MDBBtn>
      </div>
    </div>
  );
}

CartSummary.propTypes = {
  userName: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default CartSummary;