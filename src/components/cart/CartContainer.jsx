import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetShoppingCart } from '../../context/actions/shoppingCart';

/* Components */
import CartInfo from './CartInfo/CartInfo';
import CartSummary from './CartSummary/CartSummary';

/* styles */
import './CartContainer.css';

function CartContainer() {
  const dispath = useDispatch();
  const { checking, uid, name } = useSelector(
    (state) => state.auth
  );
  const { cart, total, isLoading } = useSelector(
    (state) => state.shoppingCart
  );

  useEffect(() => {
    if (checking) return;

    dispath(startGetShoppingCart(uid));
  }, []);

  return (
    <main className="container mt-4">
      <h1 className="cart-title">Tu carrito ({total})</h1>

      <section className="wrapper">
        <div className="cart-bottom">
          <CartInfo products={cart} isLoading={isLoading} />
          <CartSummary userName={name} total={total} />
        </div>
      </section>
    </main>
  );
}

export default CartContainer;
