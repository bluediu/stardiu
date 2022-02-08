import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  startGetInitialProducts,
  startGetProductsByPage,
} from '../../../context/actions/product.action';

/* omponents */
import CardItem from './CardItem';
import Pagination from '../../utils/Pagination';
import Loader from '../../utils/loader/Loader';
import Alert from '../../utils/Alert';

/* styles */
import './Card.css';
import Search from '../search/Search';

function Card() {
  const dispatch = useDispatch();
  const {
    records: products,
    pagesNumber,
    error,
    isLoading,
  } = useSelector((state) => state.products);

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
    <>
      <Search />
      {error && <Alert error={error} />}

      {isLoading && <Loader />}

      <section className="cards-grid">
        {products.map((product) => (
          <CardItem key={product._id} {...product} />
        ))}
      </section>
      <section className="mt-4">
        {products.length && (
          <Pagination
            pageCount={pagesNumber}
            onPageChange={handlePageClick}
          />
        )}
      </section>
    </>
  );
}

export default Card;
