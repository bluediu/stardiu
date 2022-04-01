import React, { useEffect } from 'react';

/* Components */
import Menu from '../components/menu/Menu';
import { Footer, Navbar } from '../components/stardui';

function MenuScreen() {
  useEffect(() => {
    document.title = 'Stardui - Menu';
  }, []);

  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
    </>
  );
}

export default MenuScreen;
