import React from 'react';

/* Components */
import Menu from '../components/menu/Menu';
import { Footer, Navbar } from '../components/stardui';

function MenuScreen() {
  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
    </>
  );
}

export default MenuScreen;
