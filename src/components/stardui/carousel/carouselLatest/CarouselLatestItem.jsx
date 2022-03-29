import React from 'react';
import { useHistory } from 'react-router-dom';

/* Components */
import {
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function CarouselLatestItem({ id, item, name, img }) {
  let history = useHistory();

  return (
    <MDBCarouselItem
      style={{ borderRadius: '12px' }}
      itemId={item}
      className={`${item === 0 && 'active'}`}
    >
      <MDBCarouselElement
        onClick={() => history.push(`/d/${id}`)}
        style={{ borderRadius: '12px' }}
        src={img}
        alt={name}
      />
    </MDBCarouselItem>
  );
}

export default CarouselLatestItem;
