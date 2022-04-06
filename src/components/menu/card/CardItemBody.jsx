import React from 'react';
import { formatPrice } from '../../../helpers/format-price';

/* Components */
import {
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from 'mdb-react-ui-kit';

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
      </MDBCardBody>
    </div>
  );
}

CardItemBody.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
};

export default CardItemBody;
