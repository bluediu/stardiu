import React, { useState } from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';

import './Carousel.css';
import COFFE_CUP from '../../../assets/img/carousel/coffe-cup.jpg';
import PERSON_COFFE from '../../../assets/img/carousel/person-drink-coffe.jpg';
import CaroselItem from './CaroselItem';
import { carouselData } from './data/carousel-data';

function Carousel() {
  const [data, setData] = useState(carouselData);

  console.log(data);
  // style={{ width: '700px' }}
  // 976
  return (
    <div className="container border p-4 text-center mb-4 carousel-width">
      <MDBCarousel showControls showIndicators>
        <MDBCarouselInner>
          <CaroselItem item={0} />
          <CaroselItem item={1} />
          <CaroselItem item={2} />
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Carousel;
