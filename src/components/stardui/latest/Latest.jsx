import React from 'react';

/* assets */
import BLOB from '../../../assets/img/blob.svg';
import RECOMMENDED from '../../../assets/img/recommended.svg';

/* Components */
import CarouselLatest from '../carousel/carouselLatest/CarouselLatest';

/* styles */
import './Latest.css';

function Latest() {
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
