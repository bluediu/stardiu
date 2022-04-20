import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function OrderFooter() {
  return (
    <>
      <div className="order-footer">
        <div className="order-footer-1">
          <small>X2 Items</small>
          <span>$10.40</span>
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
        >
          <MDBIcon fas icon="check" className="me-2" />
          Detalles
        </MDBBtn>
      </div>
    </>
  );
}

export default OrderFooter;
