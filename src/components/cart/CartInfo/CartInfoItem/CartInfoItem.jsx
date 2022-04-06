import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
import { useCounter } from '../../../../hooks/useCounter';

function CartInfoItem({ productId, quantity }) {
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
          <span>{productId.name}</span>
          <span>Size: ****</span>
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
          <div className="product-price">${productId.price}</div>
        </div>
      </div>
    </div>
  );
}

CartInfoItem.propTypes = {
  productId: PropTypes.object,
  quantity: PropTypes.number.isRequired,
};

export default CartInfoItem;
