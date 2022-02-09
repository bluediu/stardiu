import React, { useEffect, useState } from 'react';

import { startSearchByName } from '../../../context/actions/search.action';
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

/* styles */
import '../../menu/card/Card.css';
import './Search.css';

function Search() {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(null);
  const [showList, setShowList] = useState(false);
  const [products, setProducts] = useState([]);

  /* Redux */
  const { results, loading } = useSelector(
    (state) => state.search
  );

  // eslint-disable-next-line no-unused-vars
  const [_, cancel] = useDebounce(
    () => {
      setDebouncedSearch(inputText);
    },
    1500,
    [inputText]
  );

  useEffect(() => {
    if (inputText?.length >= 1) {
      console.log('Buscando');
      dispatch(startSearchByName(debouncedSearch, 'products'));
    }
  }, [debouncedSearch]);

  useEffect(() => {
    /* Verify if there are results for a product search */
    if (results.results?.length >= 1) {
      setProducts(results);
    } else {
      setProducts([]);
    }
  }, [results]);

  const handleInput = (e) => {
    if (e.target.value) {
      setInputText(e.target.value);
    } else {
      setInputText(null);
    }
  };

  console.log(showList);

  return (
    <>
      <section className="container mt-4">
        <div className="search-container">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="search-input"
          >
            <MDBInputGroup
              className="mb-3"
              /*               onMouseLeave={() => setShowList(false)}
              onClick={() => setShowList(true)} */
            >
              <MDBInputGroupText>
                {!loading ? (
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
                value={inputText}
                onChange={handleInput}
              />
            </MDBInputGroup>
          </form>

          <div className="search-list">
            <MDBListGroup flush style={{ minWidth: '22rem' }}>
              {products.length < 1 && (
                <MDBListGroupItem>
                  There are not results
                </MDBListGroupItem>
              )}

              {products.results?.map((product) => {
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
