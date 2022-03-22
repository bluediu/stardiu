import { MDBCarousel, MDBCarouselInner } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import CarouselLatestItem from './CarouselLatestItem';
import { getLatestProduct } from '../../../../context/actions/product.action';
import './CarouselLatest.css';

function CarouselLatest() {
  const [latest, setLatest] = useState([]);

  const getLatest = async () => {
    const latest = await getLatestProduct();
    setLatest(latest);
  };

  useEffect(() => {
    getLatest();
  }, []);

  return (
    <>
      {latest.length > 0 ? (
        <div className="container-fluid p-4 text-center mb-4 carousel-width-latest">
          <MDBCarousel showIndicators showControls fade>
            <MDBCarouselInner>
              {latest?.map(({ _id, name, img }, i) => (
                <CarouselLatestItem
                  key={_id}
                  item={i}
                  name={name}
                  img={img}
                />
              ))}
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
}

export default CarouselLatest;
