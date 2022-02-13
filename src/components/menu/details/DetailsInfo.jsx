import { MDBBadge } from 'mdb-react-ui-kit';
import React from 'react';
import { formatPrice } from '../../../helpers/format-price';
import ShoppingCartBtn from '../../stardui/cart/ShoppingCartBtn';

function DetailsInfo(props) {
  const { name, description, category, price } = props;

  return (
    <section className="mt-5">
      <div className="d-flex align-items-center">
        <h3 style={{ margin: '0' }}>{name}</h3>
        <MDBBadge className="mx-2" color="dark">
          {category?.name}
        </MDBBadge>
      </div>
      <div className="mt-4">
        <p className="max-size-text">{description}</p>

        <h5>Price:</h5>
        <p className="fw-bold fs-4">
          {formatPrice.format(price)}
        </p>

        <hr />
        <ShoppingCartBtn />
      </div>
    </section>
  );
}

export default DetailsInfo;