import { useEffect, useState } from 'react';

/* Components */
import { CarouselItem } from './CarouselItem';
import { MDBCarousel } from 'mdb-react-ui-kit';

/* Interfaces */
import { IProduct } from '@/apps/Products/interfaces';

/* Services */
import { getLatestProducts } from '@/apps/Products/services';

import './CarouselLatest.scss';

export const CarouselLatest = () => {
  const [latest, setLatest] = useState<IProduct[]>();

  useEffect(() => {
    (async () => {
      const data = await getLatestProducts();
      setLatest(data);
    })();
  }, []);

  return (
    <>
      {latest?.length ? (
        <div className="carousel-width-latest">
          <MDBCarousel showIndicators showControls fade>
            {latest!.map((product, index) => (
              <CarouselItem
                key={product._id}
                item={index}
                title={product.name}
                img={product.img}
              />
            ))}
          </MDBCarousel>
        </div>
      ) : (
        <span>Loading</span>
      )}
    </>
  );
};
