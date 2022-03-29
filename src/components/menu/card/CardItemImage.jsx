import React from 'react';
import DEFAULT_PRODUCT from '../../../assets/img/defaultProduct.webp';

/* Components */
import { MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

function CardItemImage({ name, img, handleSelect }) {
  return (
    <MDBRipple style={{ cursor: 'pointer' }}>
      <MDBCardImage
        src={img ? img : DEFAULT_PRODUCT}
        position="top"
        alt={name}
        onClick={handleSelect}
      />
    </MDBRipple>
  );
}

CardItemImage.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  handleSelect: PropTypes.func.isRequired,
};

export default CardItemImage;
