import {
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import React from 'react';

import COFFE_CUP from '../../../assets/img/carousel/coffe-cup.jpg';

function CaroselItem({ item }) {
  return (
    <MDBCarouselItem itemId={item}>
      <MDBCarouselElement
        style={{ borderRadius: '12px' }}
        src={COFFE_CUP}
        alt="Coffe cup"
      />
      <MDBCarouselCaption>
        <h5>First slide label</h5>
        <p>
          Nulla vitae elit libero, a pharetra augue mollis
          interdum.
        </p>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
}

export default CaroselItem;
