import React from 'react';

import { MDBCard, MDBCol } from 'mdb-react-ui-kit';
import CardItemBody from './CardItemBody';
import CardItemImage from './CardItemImage';

function CardItem() {
  return (
    <MDBCol>
      <MDBCard>
        <CardItemImage />
        <CardItemBody />
      </MDBCard>
    </MDBCol>
  );
}

export default CardItem;
