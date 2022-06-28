import React from 'react';
import { Footer, Navbar } from '../components/stardui';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
