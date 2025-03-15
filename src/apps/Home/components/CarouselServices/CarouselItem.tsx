/* Components */
import { MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

import { ICarousel } from './data';

export const CarouselItem = (props: ICarousel) => {
  const { item, img, title, desc } = props;

  return (
    <MDBCarouselItem itemId={item} className={`${item === 1 && 'active'}`}>
      <img
        src={img}
        alt={desc}
        className="d-block w-100"
        style={{ borderRadius: '12px' }}
      />
      <MDBCarouselCaption>
        <h5>{title}</h5>
        <p>{desc}</p>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};
