import React, { useEffect } from 'react';
import CartContainer from '../components/cart/CartContainer';

/* Components */
import { MainLayout } from '../layouts';

function ShoppingCartScreen() {
  useEffect(() => {
    document.title = 'Stardui - Cart';
  }, []);

  return (
    <>
      <MainLayout>
        <CartContainer />
      </MainLayout>
    </>
  );
}

export default ShoppingCartScreen;
