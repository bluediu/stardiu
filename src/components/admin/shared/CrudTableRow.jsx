import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import { formatPrice } from '../../../helpers/format-price';

function CrudTableRow(props) {
  const { name, price, category, user } = props;
  return (
    <>
      <tr>
        <td className="text-capitalize">{name.toLowerCase()}</td>
        <td>{formatPrice.format(price)}</td>
        <td className="text-capitalize">
          {category.name.toLowerCase()}
        </td>
        <td>{user.name}</td>
        <td>
          <MDBBtn size="sm" color="dark" className="me-3">
            <MDBIcon fas icon="plus" /> Edit
          </MDBBtn>
          <MDBBtn size="sm" color="light">
            <MDBIcon fas icon="ban" /> Delete
          </MDBBtn>
        </td>
      </tr>
    </>
  );
}

export default CrudTableRow;
