import React, { useEffect } from 'react';
import CartContainer from '../components/cart/CartContainer';

/* Components */
import Footer from '../components/stardui/footer/Footer';
import Navbar from '../components/stardui/navbar/Navbar';

function ShoppingCartScreen() {
  useEffect(() => {
    document.title = 'Stardui - Cart';
  }, []);

  return (
    <>
      <Navbar />
      <CartContainer />
      <Footer />
    </>
  );
}

export default ShoppingCartScreen;
