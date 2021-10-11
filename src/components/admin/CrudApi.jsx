import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startGetInitialProducts,
  startGetProductsByPage,
} from '../../context/actions/product.action';
import CrudTable from './shared/CrudTable';

function CrudApi() {
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
    <div>
      <CrudTable
        data={products}
        pagesNumber={pagesNumber}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}

export default CrudApi;
