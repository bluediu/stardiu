/* Components */
import { SearchList } from './SearchList';
import { SearchForm } from './SearchForm';
import { MDBIcon, MDBListGroup } from 'mdb-react-ui-kit';

/* Hooks */
import { useSearch } from '@/apps/Products/hooks';

import './Search.scss';

export const Search = () => {
  const {
    input,
    loading,
    products,
    showResults,
    hasSearched,

    handleInput,
    handleShowResult,
  } = useSearch();

  const hasResults = products.length > 0;

  return (
    <section className="search-container">
      <div className="container mt-4 search-box">
        <SearchForm
          loading={loading}
          input={input}
          showResults={handleShowResult}
          handleInput={handleInput}
        />

        {showResults && hasSearched && (
          <div className="search-list">
            <MDBListGroup flush style={{ minWidth: '22rem' }}>
              <MDBIcon
                fas
                icon="times"
                className="list-group-cross"
                onClick={() => handleShowResult(false)}
              />

              {loading && <b className="text-center">Loading...</b>}

              {!loading && hasResults && <SearchList products={products} />}

              {!loading && !hasResults && (
                <b className="text-center">Sorry. No search results found :(</b>
              )}
            </MDBListGroup>
          </div>
        )}
      </div>
    </section>
  );
};
