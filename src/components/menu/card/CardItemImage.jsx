import React from 'react';
import { MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';

function CardItemImage() {
  return (
    <MDBRipple style={{ cursor: 'pointer' }}>
      <MDBCardImage
        src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_topcrop_630"
        alt="Cafe americano"
        position="top"
      />
    </MDBRipple>
  );
}

export default CardItemImage;
