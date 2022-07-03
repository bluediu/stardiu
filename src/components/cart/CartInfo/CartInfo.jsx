import React from 'react';
import PropTypes from 'prop-types';

/* context */
import { useSelector } from 'react-redux';

/* Components */
import Loader from '../../utils/loader/Loader';
import CartInfoItem from './CartInfoItem/CartInfoItem';
import Empty from '../../utils/Empty/Empty';

/* styles */
import './CartInfo.css';

function CartInfo({ products, isLoading }) {
  const { thereAreProducts } = useSelector(
    (state) => state.shoppingCart
  );

  return (
    <article className="info">
      {isLoading && <Loader />}

      {thereAreProducts ? (
        products?.map(({ quantity, productId, size, _id }) => (
          <CartInfoItem
            key={productId._id}
            productId={productId}
            quantity={quantity}
            size={size}
            id={_id}
          />
        ))
      ) : (
        <Empty title={'Aún no tienes productos agregados'} />
      )}
    </article>
  );
}

CartInfo.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CartInfo;
