import React from 'react';
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';

import Pagination from '../../utils/Pagination';
import CrudTableRow from './CrudTableRow';

function CrudTable({ data, pagesNumber, handlePageClick }) {
  return (
    <>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">creator user</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.length > 0 ? (
            data.map((product) => (
              <CrudTableRow key={product._id} {...product} />
            ))
          ) : (
            <tr>
              <td colSpan="3">There are not data</td>
            </tr>
          )}
        </MDBTableBody>
      </MDBTable>

      {data.length && (
        <Pagination
          pageCount={pagesNumber}
          onPageChange={handlePageClick}
        />
      )}
    </>
  );
}

export default CrudTable;
