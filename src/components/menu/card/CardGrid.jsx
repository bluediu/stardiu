import React, { useEffect } from 'react';
import { MDBRow } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';

import {
  startGetInitialProducts,
  startGetProductsByPage,
} from '../../../context/actions/product.action';
import { uid } from 'uid';

import CardItem from './CardItem';
import Pagination from '../../utils/Pagination';

function CardGrid() {
  const dispatch = useDispatch();
  const { records: products, pagesNumber } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(startGetInitialProducts());
  }, [dispatch]);

  const handlePageClick = ({ selected }) => {
    let currentPage = selected + 1;
    dispatch(startGetProductsByPage(currentPage));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <MDBRow className="row-cols-sm-1 row-cols-md-3 g-5 m-1">
      {!products.length && <h1>Loading</h1>}

      {products.map((product) => (
        <CardItem key={uid(16)} {...product} />
      ))}

      <Pagination
        pageCount={pagesNumber}
        onPageChange={handlePageClick}
      />
    </MDBRow>
  );
}

export default CardGrid;
