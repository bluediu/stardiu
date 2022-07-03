import React from 'react';

/* hooks */
import { useSearch } from '../../../hooks/useSearch';

/* components */
import {
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

/* styles */
import '../../menu/card/Card.css';
import './Search.css';

function Search() {
  const {
    loading,
    setShowList,
    inputText,
    handleInput,
    showList,
    results,
    thereAreProducts,
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

          {thereAreProducts !== null && showList && (
            <div className="search-list">
              <MDBListGroup flush style={{ minWidth: '22rem' }}>
                <MDBIcon
                  fas
                  icon="times"
                  className="list-group-cross"
                  onClick={() => setShowList(false)}
                />

                {results.map((product, index) => {
                  return (
                    <SearchResult
                      key={index}
                      product={product}
                    />
                  );
                })}

                {!thereAreProducts && (
                  <MDBListGroupItem className="no-results">
                    <b>
                      Lo sentimos, no hemos encontrado
                      resultados.
                    </b>
                  </MDBListGroupItem>
                )}
              </MDBListGroup>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Search;
