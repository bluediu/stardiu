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
      </tr>
    </>
  );
}

export default CrudTableRow;
