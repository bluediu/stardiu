import React from 'react';
import CategoriesNavigation from '../components/categories/CategoriesNavigation';
import { Footer, Navbar } from '../components/stardui';

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
