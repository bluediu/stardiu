import React from 'react';

/* hooks */
import { useHistory } from 'react-router-dom';

/* Components */
import {
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

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

CarouselLatestItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default CarouselLatestItem;
