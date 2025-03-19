/* Components */
import { MDBCarousel } from 'mdb-react-ui-kit';
import { CarouselItem } from './CarouselItem';

/* Data */
import { carouselData } from './data';

/* Statics */
import SERVICES from '/img/barista.svg';

export const CarouselServices = () => {
  return (
    <section className="container my-5">
      <article className="row">
        <div className="col-lg-6">
          <MDBCarousel showIndicators>
            {carouselData.map((item) => (
              <CarouselItem
                key={item.item}
                item={item.item}
                title={item.title}
                img={item.img}
                desc={item.desc}
              />
            ))}
          </MDBCarousel>
        </div>

        <div className="col-lg-6">
          <h2 className="my-4 text-center">SERVICES</h2>
          <img
            src={SERVICES}
            alt="description-img"
            style={{ width: '36%' }}
            className="img-fluid float-end me-3"
          />
          <p className="fs-5">
            At our café, we are passionate about delivering the finest coffee
            experience. With high-quality beans, expert craftsmanship, and a
            modern yet cozy ambiance, we create the perfect space for coffee
            lovers.
          </p>
        </div>
      </article>
    </section>
  );
};
