import React, { useEffect } from 'react';
import About from '../components/about/About';

/* Components */
import { MainLayout } from '../layouts';

function AboutScreen() {
  useEffect(() => {
    document.title = 'Stardiu - Acerca';
  }, []);

  return (
    <>
      <MainLayout>
        <About />
      </MainLayout>
    </>
  );
}

export default AboutScreen;
