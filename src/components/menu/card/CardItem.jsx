import React from 'react';
import { MDBCard } from 'mdb-react-ui-kit';
import CardItemBody from './CardItemBody';
import CardItemImage from './CardItemImage';
import { useHistory } from 'react-router';
import { ROUTE } from '../../../constants/auth-routes';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../../context/actions/shared.action';

function CardItem(props) {
  const dispatch = useDispatch();
  const { name, img, price, category } = props;

  let history = useHistory();

  const handleSelect = () => {
    dispatch(setIsLoading(true));
    history.push(`${ROUTE.DETAILS}/${props._id}`);
  };

  return (
    <MDBCard
      style={{
        boxShadow: '0 2px 9px rgba(0, 0, 0, 0.2)',
      }}
    >
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
  );
}

export default CardItem;
