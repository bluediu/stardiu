import React from 'react';

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
import { useSearch } from '../../../hooks/useSearch';

function Search() {
  const {
    loading,
    setShowList,
    inputText,
    handleInput,
    showList,
    products,
  } = useSearch();

  return (
    <div className="search-container-main">
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
