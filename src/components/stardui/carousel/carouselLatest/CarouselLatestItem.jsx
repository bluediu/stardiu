import {
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import React from 'react';

function CarouselLatestItem({ item, name, img }) {
  console.log('indice', item);
  return (
    <MDBCarouselItem
      style={{ borderRadius: '12px' }}
      itemId={item}
      className={`${item === 0 && 'active'}`}
    >
      <MDBCarouselElement
        style={{ borderRadius: '12px' }}
        src={img}
        alt={name}
      />
      <MDBCarouselCaption>
        <h5>Test</h5>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
}

export default CarouselLatestItem;
