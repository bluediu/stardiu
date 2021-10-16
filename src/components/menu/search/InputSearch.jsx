import { MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  startSearchProductByName,
  startGetInitialProducts,
} from '../../../context/actions/product.action';

function InputSearch() {
  const dispatch = useDispatch();
  const [seachTerm, setSeachTerm] = useState();

  useEffect(() => {
    // dispatch(setIsLoading(true));
    if (!seachTerm) {
      dispatch(startGetInitialProducts());
    } else {
      dispatch(startSearchProductByName(seachTerm, 'products'));
    }
  }, [seachTerm]);

  const handleInput = (e) => {
    setSeachTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearch}>
        <MDBInput
          label="🔎 Search a product..."
          id="search"
          type="search"
          value={seachTerm}
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default InputSearch;
