import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import React from 'react';
import CrudTableRow from './CrudTableRow';

function CrudTable() {
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <CrudTableRow />
        <CrudTableRow />
        <CrudTableRow />
        <CrudTableRow />
      </MDBTableBody>
    </MDBTable>
  );
}

export default CrudTable;
