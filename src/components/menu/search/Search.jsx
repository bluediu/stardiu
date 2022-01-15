import React, { useEffect, useState } from 'react';

import { startSearchByName } from '../../../context/actions/product.action';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';

/* components */
import { MDBInput } from 'mdb-react-ui-kit';
import { Footer, Navbar } from '../../stardui';
import Loader from '../../utils/loader/Loader';
import CardItem from '../card/CardItem';
import Tabs from '../../tabs/Tabs';

/* styles */
import '../../menu/card/Card.css';

function Search() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [thereAreResults, setThereAreResults] = useState(true);
  const [searchedProducts, setSearchedProducts] = useState([]);

  /* Redux */
  const { search, isLoading } = useSelector(
    (state) => state.products
  );

  const [debouncedValue, setDebouncedValue] = useState('');

  // eslint-disable-next-line no-unused-vars
  const [_, cancel] = useDebounce(
    () => {
      setDebouncedValue(searchTerm);
    },
    1500,
    [searchTerm]
  );

  useEffect(() => {
    if (searchTerm.length >= 1) {
      return dispatch(
        startSearchByName(debouncedValue, 'products')
      );
    }
  }, [debouncedValue]);

  useEffect(() => {
    /* Verify if there are results for a product search */
    if (search.results?.length >= 1) {
      setSearchedProducts(search);
      setThereAreResults(true);
    } else {
      setThereAreResults(false);
      setSearchedProducts([]);
    }
  }, [search]);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />

      <div className="my-3">
        <Tabs />
      </div>
      <div className="container mt-4">
        <form onSubmit={handleSearch}>
          <MDBInput
            label="🔎 Search a product..."
            id="search"
            type="search"
            value={searchTerm}
            onChange={handleInput}
          />
        </form>
      </div>

      {isLoading && <Loader />}

      {!thereAreResults && debouncedValue && (
        <p className="text-center h3 my-3">
          There not result for <b>{searchTerm} 😥</b>
        </p>
      )}

      <div className="container mt-4">
        <section className="cards-grid">
          {searchedProducts.results?.map((product) => (
            <CardItem key={product._id} {...product} />
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Search;
