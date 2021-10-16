import { MDBCard } from 'mdb-react-ui-kit';
import React from 'react';
import CreateBtn from './CreateBtn';
import InputSearch from './InputSearch';

function CrudOptions() {
  return (
    <MDBCard className="my-4 p-2">
      <div className="d-flex justify-content-between">
        <CreateBtn />
        <InputSearch />
      </div>
    </MDBCard>
  );
}

export default CrudOptions;
