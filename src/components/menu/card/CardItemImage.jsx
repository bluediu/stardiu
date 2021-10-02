import React from 'react';
import { MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
import DEFAULT_PRODUCT from '../../../assets/img/defaultProduct.webp';
import PropTypes from 'prop-types';

function CardItemImage({ name, img }) {
  return (
    <MDBRipple style={{ cursor: 'pointer' }}>
      <MDBCardImage
        src={img ? img : DEFAULT_PRODUCT}
        position="top"
        alt={name}
      />
    </MDBRipple>
  );
}

CardItemImage.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default CardItemImage;
