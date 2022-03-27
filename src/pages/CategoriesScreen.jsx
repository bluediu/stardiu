import React from 'react';

import { Footer, Navbar } from '../components/stardui';
import CategoriesNavigation from '../components/categories';

function CategoriesScreen() {
  return (
    <>
      <Navbar />
      <div className="container">
        <CategoriesNavigation />
      </div>
      <Footer />
    </>
  );
}

export default CategoriesScreen;
