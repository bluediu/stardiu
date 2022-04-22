import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { formatPrice } from '../../../../helpers';

function OrderFooter({ total, amount, toggleShow, order }) {
  return (
    <>
      <div className="order-footer">
        <div className="order-footer-1">
          <small>X{total} Items</small>
          <span>{formatPrice.format(amount)}</span>
        </div>
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
      </div>
    </>
  );
}

export default OrderFooter;
