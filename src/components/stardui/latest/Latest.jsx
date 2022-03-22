import React from 'react';
import CarouselLatest from '../carousel/carouselLatest/CarouselLatest';

import RECOMMENDED from '../../../assets/img/recommended.svg';
import BLOB from '../../../assets/img/blob.svg';
import './Latest.css';

function Latest() {
  /* img-fluid w-50" */
  return (
    <section className="latest-container container my-5">
      <div className="row">
        <div className="latest-left col-lg-6">
          <section className="blod-container">
            <div>
              <img src={BLOB} alt="blod" className="blod" />
            </div>

            <div className="blod-info">
              <img
                className="img-fluid w-100"
                src={RECOMMENDED}
                alt=""
              />

              <span>Recomendaciones para ti</span>
            </div>
          </section>
        </div>

        <div className="latest-right col-lg-6">
          <CarouselLatest />
        </div>
      </div>
    </section>
  );
}

export default Latest;
