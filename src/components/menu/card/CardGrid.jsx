import React, { useEffect } from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAllProducts } from '../../../context/actions/product.action';

import CardItem from './CardItem';

function CardGrid() {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(startGetAllProducts());
  }, [dispatch]);

  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-5 m-1">
      {records.map((d) => (
        <CardItem key={d.id} />
      ))}
    </MDBRow>
  );
}

export default CardGrid;
