import React from 'react';
import { MDBCard, MDBCol } from 'mdb-react-ui-kit';
import CardItemBody from './CardItemBody';
import CardItemImage from './CardItemImage';
import { useHistory } from 'react-router';
import { ROUTE } from '../../../constants/auth-routes';

function CardItem(props) {
  const { name, img, price, category } = props;

  let history = useHistory();

  const handleSelect = () => {
    // const data = { name, price, img, category, description };
    // dispatch(startDetailsItem(props._id, data));

    history.push(`${ROUTE.DETAILS}/${props._id}`);
  };

  return (
    <MDBCol>
      <MDBCard>
        <CardItemImage
          name={name}
          img={img}
          handleSelect={handleSelect}
        />
        <CardItemBody
          price={price}
          name={name}
          category={category.name}
        />
      </MDBCard>
    </MDBCol>
  );
}

export default CardItem;
