import React, { useEffect, useState } from 'react';

import { startSearchByName } from '../../../context/actions/product.action';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';

/* components */
import {
  MDBIcon,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
  MDBListGroup,
  MDBListGroupItem,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Footer, Navbar } from '../../stardui';
import Loader from '../../utils/loader/Loader';
import CardItem from '../card/CardItem';
import Tabs from '../../tabs/Tabs';

/* styles */
import '../../menu/card/Card.css';
import './Search.css';

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
      {/* TODO: Mouse Events */}
      <section className="container mt-4">
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-input">
            <MDBInputGroup className="mb-3">
              <MDBInputGroupText>
                {!isLoading ? (
                  <MDBIcon
                    fas
                    icon="search"
                    className="search-icon"
                  />
                ) : (
                  <MDBSpinner color="dark" size="sm">
                    <span className="visually-hidden">
                      Loading...
                    </span>
                  </MDBSpinner>
                )}
              </MDBInputGroupText>
              <MDBInputGroupElement
                placeholder="Search a product..."
                id="search"
                type="search"
                value={searchTerm}
                onChange={handleInput}
              />
            </MDBInputGroup>
          </form>

          <div className="search-list">
            <MDBListGroup flush style={{ minWidth: '22rem' }}>
              {searchedProducts.length < 1 && (
                <MDBListGroupItem>
                  There are not results
                </MDBListGroupItem>
              )}

              {searchedProducts.results?.map((product) => {
                return (
                  <>
                    <MDBListGroupItem>
                      {product.name}
                    </MDBListGroupItem>
                  </>
                );
              })}
            </MDBListGroup>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
