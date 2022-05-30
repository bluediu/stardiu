import React, { useEffect } from 'react';

/* Components */
import { Footer, Navbar } from '../components/stardui';
import CategoriesNavigation from '../components/categories';

function CategoriesScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Categorias';
  }, []);

  return (
    <>
      <Navbar />
      <CategoriesNavigation />
      <Footer />
    </>
  );
}

export default CategoriesScreen;
