import React, { useEffect, useState } from 'react';
import { MDBRow, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';

import { startGetProductsByPage } from '../../../context/actions/product.action';
import { uid } from 'uid';

import CardItem from './CardItem';

function CardGrid() {
  const dispatch = useDispatch();
  const { records: products } = useSelector(
    (state) => state.products
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(startGetProductsByPage(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePreviousPage = () => {
    if (page <= 1) {
      return setPage(1);
    }

    setPage(page - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <MDBRow className="row-cols-sm-1 row-cols-md-3 g-5 m-1">
      {products.map((product) => (
        <CardItem key={uid(16)} {...product} />
      ))}

      <section className="d-flex justify-content-center align-items-center w-100">
        {page > 1 && (
          <MDBBtn
            className="me-2"
            color="dark"
            onClick={handlePreviousPage}
          >
            <MDBIcon fas icon="angle-left" className="me-2" />
            Previous
          </MDBBtn>
        )}
        {products.length > 1 && (
          <MDBBtn color="dark" onClick={handleNextPage}>
            <MDBIcon fas icon="angle-right" className="me-2" />
            Next
          </MDBBtn>
        )}
      </section>
    </MDBRow>
  );
}

export default CardGrid;
