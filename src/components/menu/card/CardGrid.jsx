import React, { useEffect } from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAllProducts } from '../../../context/actions/product.action';
import { uid } from 'uid';

import CardItem from './CardItem';

function CardGrid() {
  const dispatch = useDispatch();
  const { records: products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(startGetAllProducts());
  }, [dispatch]);

  return (
    <MDBRow className="row-cols-sm-1 row-cols-md-3 g-5 m-1">
      {products.map((product) => (
        <CardItem key={uid(16)} {...product} />
      ))}
    </MDBRow>
  );
}

export default CardGrid;
