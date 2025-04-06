/* Components */
import { MDBIcon, MDBInputGroup, MDBSpinner } from 'mdb-react-ui-kit';

/* Interfaces */
import { InputTypeElement } from '@/interfaces';

interface IProps {
  input: string;
  loading: boolean;
  handleInput: (e: InputTypeElement) => void;
  showResults: (value: boolean) => void;
}

export const SearchForm = (props: IProps) => {
  const { input, loading, handleInput, showResults } = props;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-input">
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
        onClick={() => showResults(true)}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Search a product..."
          id="search"
          autoComplete="off"
          value={input}
          onChange={handleInput}
        />
      </MDBInputGroup>
    </form>
  );
};
