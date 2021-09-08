import {
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import React from 'react';

function CaroselItem({ item, image, title, desc }) {
  return (
    <MDBCarouselItem itemId={item}>
      <MDBCarouselElement
        style={{ borderRadius: '12px' }}
        src={image}
        alt={desc}
      />
      <MDBCarouselCaption>
        <h5>{title}</h5>
        <p>{desc}</p>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
}

export default CaroselItem;
