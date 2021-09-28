import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from 'mdb-react-ui-kit';
import React from 'react';
import { formatPrice } from '../../../helpers/format-price';

function CardItemBody({ price, name, category }) {
  return (
    <div>
      <MDBCardBody style={{ backgroundColor: '#FBFCFC' }}>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          <small className="fw-lighter">{category}</small>
        </MDBCardText>

        <MDBCardText>
          <p>{formatPrice.format(price)} USD</p>
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
