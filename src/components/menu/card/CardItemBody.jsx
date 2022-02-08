import React from 'react';
import {
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from 'mdb-react-ui-kit';
import { formatPrice } from '../../../helpers/format-price';
import PropTypes from 'prop-types';
import ShoppingCartBtn from '../../stardui/cart/ShoppingCartBtn';

function CardItemBody({ price, name, category, id }) {
  console.log(id);
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

        <ShoppingCartBtn />
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
