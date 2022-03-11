import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  startCurrentPage,
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
import { useHistory } from 'react-router-dom';

function Card() {
  const dispatch = useDispatch();
  const {
    records: products,
    pagesNumber,
    currentPage,
    error,
    isLoading,
  } = useSelector((state) => state.products);

  // ROUTER
  let history = useHistory();

  useEffect(() => {
    dispatch(startGetInitialProducts());
    history.push('menu/?page=1');
  }, []);

  useEffect(() => {
    dispatch(startGetProductsByPage(currentPage));
    if (currentPage !== 1) {
      history.push(`menu/?page=${currentPage}`);
    }
  }, [currentPage]);

  const handlePageClick = ({ selected }) => {
    const currentPage = selected + 1;

    dispatch(startCurrentPage(currentPage));
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
      <section className="mt-5">
        {products.length && (
          <Pagination
            pageCount={pagesNumber}
            onPageChange={handlePageClick}
            currentPage={currentPage}
          />
        )}
      </section>
    </>
  );
}

export default Card;
