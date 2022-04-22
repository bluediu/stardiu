import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useCounter } from '../../../../hooks/useCounter';
import { formatPrice } from '../../../../helpers/helpFormat-price';
import { startUpdateProductInCart } from '../../../../context/actions/shoppingCart';

/* Components */
import {
  MDBBtn,
  MDBBtnGroup,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import CartRemoveBtn from '../CartRemoveBtn/CartRemoveBtn';

import PropTypes from 'prop-types';

function CartInfoItem({ productId, quantity, size, id }) {
  const dispatch = useDispatch();
  const { counter, increaseBy, maxCount, updatingQt } =
    useCounter({
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

  const handleUpdate = (counter) => {
    const productSchema = { id, counter };
    dispatch(startUpdateProductInCart(productSchema));
  };

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

          <span>
            <CartRemoveBtn productId={productId} id={id} />
          </span>
        </div>

        <div className="price-details">
          <div className="product-amount-container">
            <div className="product-amount">
              {updatingQt ? (
                <MDBSpinner size="sm">
                  <span className="visually-hidden">
                    Loading...
                  </span>
                </MDBSpinner>
              ) : (
                counter
              )}
            </div>
            <MDBBtnGroup size="sm">
              <MDBBtn
                color="dark"
                outline
                style={{ border: '0' }}
                onClick={() => {
                  increaseBy(1);
                  handleUpdate(counter + 1);
                }}
                disabled={isMaxReached() || updatingQt}
              >
                <span className={isMaxReached() && 'disabled'}>
                  +
                </span>
              </MDBBtn>
              <MDBBtn
                color="dark"
                outline
                style={{ border: 0 }}
                onClick={() => {
                  increaseBy(-1);
                  handleUpdate(counter - 1);
                }}
                disabled={counter === 1 || updatingQt}
              >
                <span className={counter === 1 && 'disabled'}>
                  -
                </span>
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
  id: PropTypes.string.isRequired,
};

export default CartInfoItem;
