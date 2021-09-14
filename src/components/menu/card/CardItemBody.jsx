import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from 'mdb-react-ui-kit';
import React from 'react';

function CardItemBody() {
  return (
    <div>
      <MDBCardBody style={{ backgroundColor: '#FBFCFC' }}>
        <MDBCardTitle>American Coffee</MDBCardTitle>
        <MDBCardText>
          <small className="fw-lighter">Coffee</small>
        </MDBCardText>

        <MDBCardText>
          <p>$1.50 US</p>
        </MDBCardText>

        {/* TODO: Planificar la logica del carrirto */}
        <MDBBtn size="sm" rounded outline color="dark">
          <MDBIcon fas icon="cart-plus" className="me-2" />
          {/* <MDBIcon fas icon="minus" /> */}
          Add to cart
        </MDBBtn>
      </MDBCardBody>
    </div>
  );
}

export default CardItemBody;
