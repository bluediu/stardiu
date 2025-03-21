/* Components */
import { CarouselLatest } from './CarouselLatest';

/* Statics */
import OVAL from '/img/oval.svg';
import RECOMMENDED from '/img/recommended.svg';

import './Latest.scss';

export const Latest = () => {
  return (
    // container
    <section className="container my-5">
      <div className="row">
        <div className="d-flex align-items-center justify-content-center flex-column col-lg-6">
          <article className="background-container">
            <img src={OVAL} alt="background" className="background-img" />

            <div className="background-info">
              <img
                className="img-fluid w-100"
                src={RECOMMENDED}
                alt="recommended"
              />

              <span className="latest-text">Recommended for you</span>
            </div>
          </article>
        </div>
        {/* 4-  */}
        <div className="d-flex align-items-center justify-content-center col-lg-6">
          <CarouselLatest />
        </div>
      </div>
    </section>
  );
};
