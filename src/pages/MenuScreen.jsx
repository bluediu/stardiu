import React from 'react';
import Menu from '../components/menu/Menu';
import { Footer, Navbar } from '../components/stardui';
import AdminButton from '../components/utils/admin-button/AdminButton';

function MenuScreen() {
  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
      <AdminButton />
    </>
  );
}

export default MenuScreen;
