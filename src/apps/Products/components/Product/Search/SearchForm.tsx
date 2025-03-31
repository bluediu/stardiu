import { MDBIcon, MDBInputGroup, MDBSpinner } from 'mdb-react-ui-kit';

export const SearchForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-input">
      <MDBInputGroup
        noWrap
        textBefore={
          !false ? (
            <MDBIcon fas icon="search" className="search-icon" />
          ) : (
            <MDBSpinner color="dark" size="sm">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
          )
        }
        className="mb-3"
        // onClick={() => setShowList(true)}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Search a product..."
          id="search"
          autoComplete="off"
          // value={inputText}
          // onChange={handleInput}
        />
      </MDBInputGroup>
    </form>
  );
};
