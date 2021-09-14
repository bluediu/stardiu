import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react';

function InputSearch() {
  return (
    <div className="container mt-4">
      <MDBInput
        label="🔎 Search a product..."
        id="search"
        type="search"
      />
    </div>
  );
}

export default InputSearch;
