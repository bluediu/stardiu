import React from 'react';

import { MDBCard, MDBCol } from 'mdb-react-ui-kit';
import CardItemBody from './CardItemBody';
import CardItemImage from './CardItemImage';

function CardItem(props) {
  const { name, img, price, category } = props;

  return (
    <MDBCol>
      <MDBCard>
        <CardItemImage name={name} img={img} />
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
