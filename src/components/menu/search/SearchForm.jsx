import {
  MDBIcon,
  MDBInputGroup,
  MDBInputGroupElement,
  MDBInputGroupText,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import React from 'react';

function SearchForm(props) {
  const { loading, setShowList, inputText, handleInput } = props;

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="search-input"
    >
      <MDBInputGroup
        className="mb-3"
        onClick={() => setShowList(true)}
      >
        <MDBInputGroupText>
          {!loading ? (
            <MDBIcon fas icon="search" className="search-icon" />
          ) : (
            <MDBSpinner color="dark" size="sm">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          )}
        </MDBInputGroupText>

        <MDBInputGroupElement
          placeholder="Search a product..."
          id="search"
          type="text"
          value={inputText}
          onChange={handleInput}
        />
      </MDBInputGroup>
    </form>
  );
}

export default SearchForm;
