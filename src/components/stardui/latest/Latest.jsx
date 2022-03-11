import React from 'react';
import CarouselLatest from '../carousel/carouselLatest/CarouselLatest';

import RECOMMENDED from '../../../assets/img/recommended.svg';
import './Latest.css';

function Latest() {
  /* img-fluid w-50" */
  return (
    <section className="latest-container container my-5">
      <div className="row">
        <div className="latest-left col-lg-6">
          <img
            className="img-fluid w-50"
            src={RECOMMENDED}
            alt=""
          />
          <span>Recomendaciones para ti</span>
        </div>

        <div className="latest-right col-lg-6">
          <CarouselLatest />
        </div>
      </div>
    </section>
  );
}

export default Latest;
