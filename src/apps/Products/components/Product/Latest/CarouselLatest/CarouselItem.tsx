/* Components */
import { MDBCarouselCaption, MDBCarouselItem } from 'mdb-react-ui-kit';

interface IProps {
  item: number;
  img: string;
  title: string;
}

export const CarouselItem = (props: IProps) => {
  const { item, img, title } = props;

  return (
    <MDBCarouselItem
      itemId={item + 1}
      className={`${item + 1 === 0 && 'active'}`}
    >
      <img
        src={img}
        alt={title}
        className="d-block w-100"
        style={{ borderRadius: '12px' }}
      />

      <MDBCarouselCaption>
        <h5>{title}</h5>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};
