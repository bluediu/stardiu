import React, { useCallback } from 'react';
import { useCounter } from '../../../../hooks/useCounter';
import { formatPrice } from '../../../../helpers/format-price';

/* Components */
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

import PropTypes from 'prop-types';

function CartInfoItem({ productId, quantity, size }) {
  const { counter, increaseBy, maxCount } = useCounter({
    value: quantity,
    initialValues: {
      counter: 1,
      maxCount: 10,
    },
  });

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div className="info-product mt-2">
      <div className="product-detail">
        <img src={productId.img} className="info-image" alt="" />

        <div className="info-details">
          <span>
            <b>{productId.name}</b>
          </span>
          <span>
            <b>Size:</b> {size}
          </span>
        </div>

        <div className="price-details">
          <div className="product-amount-container">
            <div className="product-amount">{counter}</div>
            <MDBBtnGroup size="sm">
              <MDBBtn
                color="dark"
                outline
                style={{ border: '1px' }}
                onClick={() => increaseBy(1)}
                disabled={isMaxReached()}
              >
                <span className={isMaxReached() && 'disabled'}>
                  +
                </span>
              </MDBBtn>
              <MDBBtn
                color="dark"
                outline
                style={{ border: 0 }}
                onClick={() => increaseBy(-1)}
              >
                -
              </MDBBtn>
            </MDBBtnGroup>
          </div>
          <div className="product-price">
            {formatPrice.format(productId.price)}
          </div>
        </div>
      </div>
    </div>
  );
}

CartInfoItem.propTypes = {
  productId: PropTypes.object,
  quantity: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

export default CartInfoItem;
