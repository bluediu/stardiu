import React, { useEffect, useState } from 'react';
import { formatPrice } from '../../../helpers/helpFormat-price';

/* Components */
import { MDBBadge } from 'mdb-react-ui-kit';
import ShoppingCartBtn from '../../stardui/cart/ShoppingCartBtn';

function DetailsInfo(props) {
  const { name, description, category, price, size } = props;
  const [selectValue, setSelectValue] = useState(null);

  useEffect(() => {
    if (size) setSelectValue(size[0]);
  }, [size]);

  const handleSelect = (e) => setSelectValue(e.target.value);

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

        <div>
          <small>Tamaño</small>

          <select
            className="form-select"
            value={selectValue || ''}
            onChange={handleSelect}
          >
            {size?.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <hr />
        <ShoppingCartBtn size={selectValue} />
      </div>
    </section>
  );
}

export default DetailsInfo;
