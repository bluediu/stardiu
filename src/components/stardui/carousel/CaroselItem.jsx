import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBCarouselCaption,
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

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

CaroselItem.propTypes = {
  item: PropTypes.number,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CaroselItem;
