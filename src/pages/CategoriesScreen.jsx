import React, { useEffect } from 'react';

/* Components */
import CategoriesNavigation from '../components/categories';
import { MainLayout } from '../layouts';

function CategoriesScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Categorias';
  }, []);

  return (
    <>
      <MainLayout>
        <CategoriesNavigation />
      </MainLayout>
    </>
  );
}

export default CategoriesScreen;
