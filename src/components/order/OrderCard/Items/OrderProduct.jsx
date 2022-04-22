import React from 'react';
import { formatPrice } from '../../../../helpers';

function OrderProduct({ product }) {
  const { img, name, category, price } = product?.productId;

  return (
    <>
      <article className="order-card__item">
        <div className="order-card__item-1">
          <div className="product">
            <img
              className="product__image"
              src={img}
              alt={name}
            />
          </div>
          <div className="order-info">
            <div className="order-info-item-1">
              <p className="order-cap">{name.toLowerCase()}</p>
              <span className="order-cap">
                {category.name.toLowerCase()}
              </span>
            </div>
            <div className="order-info-item-2">
              <span>{formatPrice.format(price)}</span>
              <span>Cant: {product.quantity}</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default OrderProduct;
