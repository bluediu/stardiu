import React, { useEffect, useState } from 'react';

import { startSearchByName } from '../../../context/actions/search.action';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'react-use';
import Fade from 'react-reveal/Fade';

/* components */
import {
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

/* styles */
import '../../menu/card/Card.css';
import './Search.css';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

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

  return (
    <div
      className="search-container-main"
      /*   onMouseLeave={() => setShowList(false)} */
    >
      <section className="container mt-4">
        <div className="search-container">
          <SearchForm
            loading={loading}
            setShowList={setShowList}
            inputText={inputText}
            handleInput={handleInput}
          />

          {showList && (
            <Fade left>
              <div className="search-list">
                <MDBListGroup
                  flush
                  style={{ minWidth: '22rem' }}
                  /*  className="list-group" */
                >
                  <MDBIcon
                    fas
                    icon="times"
                    className="list-group-cross"
                    onClick={() => setShowList(false)}
                  />

                  {products.results?.map((product, index) => {
                    return (
                      <SearchResult
                        key={index}
                        product={product}
                      />
                    );
                  })}

                  {products.length < 1 && (
                    <MDBListGroupItem className="no-results">
                      <b>
                        There are no results or type an available
                        entry 😕
                      </b>
                    </MDBListGroupItem>
                  )}
                </MDBListGroup>
              </div>
            </Fade>
          )}
        </div>
      </section>
    </div>
  );
}

export default Search;
