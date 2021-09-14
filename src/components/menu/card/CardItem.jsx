import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRipple,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import React from 'react';
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
