import React, { useEffect } from 'react';
import { MDBRow, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGetAllProducts,
  startGetProductsByPage,
} from '../../../context/actions/product.action';
import { uid } from 'uid';

import CardItem from './CardItem';

function CardGrid() {
  const dispatch = useDispatch();
  const { records: products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(startGetProductsByPage());
  }, [dispatch]);

  return (
    <MDBRow className="row-cols-sm-1 row-cols-md-3 g-5 m-1">
      {products.map((product) => (
        <CardItem key={uid(16)} {...product} />
      ))}

      <div className="d-flex justify-content-center align-items-center w-100">
        <MDBBtn className="me-2" color="dark">
          <MDBIcon fas icon="angle-left" className="me-2" />
          Previous
        </MDBBtn>
        <MDBBtn color="dark">
          <MDBIcon fas icon="angle-right" className="me-2" />
          Next
        </MDBBtn>
      </div>
    </MDBRow>
  );
}

export default CardGrid;
