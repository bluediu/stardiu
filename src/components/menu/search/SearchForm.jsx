import React from 'react';

/* Components */
import {
  MDBIcon,
  MDBInputGroup,
  MDBSpinner,
} from 'mdb-react-ui-kit';

function SearchForm(props) {
  const { loading, setShowList, inputText, handleInput } = props;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="search-input"
    >
      <MDBInputGroup
        noWrap
        textBefore={
          !loading ? (
            <MDBIcon fas icon="search" className="search-icon" />
          ) : (
            <MDBSpinner color="dark" size="sm">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          )
        }
        className="mb-3"
        onClick={() => setShowList(true)}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Buscar un producto..."
          id="search"
          value={inputText}
          onChange={handleInput}
        />
      </MDBInputGroup>
    </form>
  );
}

export default SearchForm;
