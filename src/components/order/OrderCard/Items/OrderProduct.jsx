import React from 'react';

function OrderProduct() {
  return (
    <>
      <article className="order-card__item">
        <div className="order-card__item-1">
          <div className="product">
            <img
              className="product__image"
              src="https://res.cloudinary.com/djpwtohdw/image/upload/v1649964442/stardiu/products/r4nbtbci8fhfwxgelub9.webp"
            />
          </div>
          <div className="order-info">
            <div className="order-info-item-1">
              <p>Vanilla Sweet Crem Nitro Cold Brew</p>
              <span>Hot Coffes</span>
            </div>
            <div className="order-info-item-2">
              <span>$5.40</span>
              <span>$Qty: 1</span>
            </div>
          </div>
        </div>
      </article>
      <article className="order-card__item">
        <div className="order-card__item-1">
          <div className="product">
            <img
              className="product__image"
              src="https://res.cloudinary.com/djpwtohdw/image/upload/v1645724240/stardiu/products/onvlzpgzcoizqmsqeq2p.webp"
            />
          </div>
          <div className="order-info">
            <div className="order-info-item-1">
              <p>Caffe Misto</p>
              <span>Hot Coffes</span>
            </div>
            <div className="order-info-item-2">
              <span>$5.40</span>
              <span>$Qty: 1</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default OrderProduct;
