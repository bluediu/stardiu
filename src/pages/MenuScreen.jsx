import React, { useEffect } from 'react';

/* Components */
import Menu from '../components/menu/Menu';
import { MainLayout } from '../layouts';

function MenuScreen() {
  useEffect(() => {
    document.title = 'Stardui - Menu';
  }, []);

  return (
    <>
      <MainLayout>
        <Menu />
      </MainLayout>
    </>
  );
}

export default MenuScreen;
