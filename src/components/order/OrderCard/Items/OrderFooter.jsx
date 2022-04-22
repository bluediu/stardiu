import React from 'react';
import { formatPrice } from '../../../../helpers';

/* Components */
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

function OrderFooter({
  total,
  amount,
  toggleShow,
  order,
  modal = false,
}) {
  return (
    <>
      <div className="order-footer">
        <div className="order-footer-1">
          <small>X{total} Items</small>
          <span>{formatPrice.format(amount)}</span>
        </div>
        {!modal && (
          <MDBBtn
            size="sm"
            outline
            color="dark"
            style={{
              borderColor: '#92bdaa',
              color: '#92bdaa',
              height: '2.2rem',
              borderRadius: '8px',
            }}
            onClick={() => {
              toggleShow(order);
            }}
          >
            <MDBIcon fas icon="check" className="me-2" />
            Detalles
          </MDBBtn>
        )}
      </div>
    </>
  );
}

OrderFooter.propTypes = {
  total: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  toggleShow: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
  isModal: PropTypes.bool,
};

export default OrderFooter;
