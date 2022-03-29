import React from 'react';

/* Components */
import { Footer, Navbar } from '../components/stardui';
import CategoriesNavigation from '../components/categories';

function CategoriesScreen() {
  return (
    <>
      <Navbar />
      <CategoriesNavigation />
      <Footer />
    </>
  );
}

export default CategoriesScreen;
