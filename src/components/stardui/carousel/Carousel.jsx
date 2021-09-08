import React from 'react';

import CaroselItem from './CaroselItem';
import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
import { carouselData } from './data/carousel-data';
import './Carousel.css';

function Carousel() {
  return (
    <div className="container-fluid p-4 text-center mb-4 carousel-width">
      <h2 className="mb-4">Services</h2>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselInner>
          {carouselData.map((item) => (
            <CaroselItem
              key={item.item}
              item={item.item}
              title={item.title}
              image={item.img}
              desc={item.desc}
            />
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Carousel;
