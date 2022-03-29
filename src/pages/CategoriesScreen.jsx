import React from 'react';

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
