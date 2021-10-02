import React from 'react';
import {
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { formatPrice } from '../../../helpers/format-price';
import PropTypes from 'prop-types';

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

CardItemBody.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CardItemBody;
