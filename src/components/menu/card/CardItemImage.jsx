import React from 'react';
import { MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
import DEFAULT_PRODUCT from '../../../assets/img/defaultProduct.webp';

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

export default CardItemImage;
