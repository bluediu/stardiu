import React from 'react';
import CartContainer from '../components/cart/CartContainer';

/* Components */
import Footer from '../components/stardui/footer/Footer';
import Navbar from '../components/stardui/navbar/Navbar';

function ShoppingCartScreen() {
  return (
    <>
      <Navbar />
      <CartContainer />
      <Footer />
    </>
  );
}

export default ShoppingCartScreen;
